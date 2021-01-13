import { Db, MongoClient } from "mongodb";
import { ISettings } from "../Models/ISettings";
import { ICollection, patchMongoCollection } from "../Services/ICollection";
import { EnvironmentSettings } from "../Models/EnvironmentSettings";
import { TraceContext, HttpRequest } from "@azure/functions";
import { ExampleController } from "./ExampleController";
import { ExampleDataService } from "../Services/ExampleDataService";

export class ControllerFactory {
  

  private static mongoDb: Promise<Db>;
  private readonly settings: ISettings;

  constructor () {
    this.settings = new EnvironmentSettings();  
  }

  public async createExampleController(functionContext: TraceContext, request: HttpRequest): Promise<ExampleController> {
    const collection = await this.CreateCollection(this.settings.exampleCollection);
    const dataService = new ExampleDataService(collection);
    return new ExampleController(dataService);
  }

  private async CreateCollection(collectionName: string): Promise<ICollection> {
    if (ControllerFactory.mongoDb == null) {
      ControllerFactory.mongoDb = this.createMongoDb();
    }
    const mongoCollection = patchMongoCollection((await ControllerFactory.mongoDb).collection(collectionName));

    return mongoCollection;
  }

  private async createMongoDb(): Promise<Db> {
    // connect and select database
    const mongoClient = await MongoClient.connect(this.settings.mongoConnectionString,
      { useUnifiedTopology: true, useNewUrlParser: true, tlsAllowInvalidCertificates: this.settings.allowSelfSignedMongoCert });
    
    return mongoClient.db(this.settings.vacGapsDatabase);
  }
}