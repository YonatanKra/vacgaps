import { Db, MongoClient } from 'mongodb';
import { BaseEntity } from '../Models/BaseEntity';
import { EnvironmentSettings } from '../Models/EnvironmentSettings';
import { ICollection, patchMongoCollection } from './ICollection';

export class CollectionProvider {
  private static mongoDb: Promise<Db>;
  private static collections: { [collection: string]: ICollection<any> };
  private static settings = new EnvironmentSettings();

  private constructor() {}

  public static async get<T extends BaseEntity>(
    collectionName: string
  ): Promise<ICollection<T>> {
    if (!CollectionProvider.collections[collectionName]) {
      CollectionProvider.collections[
        collectionName
      ] = await CollectionProvider.createCollection<T>(collectionName);
    }

    return CollectionProvider.collections[collectionName];
  }

  private static async createCollection<T extends BaseEntity>(
    collectionName: string
  ): Promise<ICollection<T>> {
    if (CollectionProvider.mongoDb == null) {
      CollectionProvider.mongoDb = CollectionProvider.createMongoDb();
    }
    const mongoCollection = patchMongoCollection<T>(
      (await CollectionProvider.mongoDb).collection(collectionName)
    );

    return mongoCollection;
  }

  private static async createMongoDb(): Promise<Db> {
    // connect and select database
    const mongoClient = await MongoClient.connect(
      CollectionProvider.settings.mongoConnectionString,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        tlsAllowInvalidCertificates: this.settings.allowSelfSignedMongoCert,
      }
    );

    return mongoClient.db(this.settings.vacGapsDatabase);
  }
}
// type Bar = { _id: string, foo: string};
// (await CollectionProvidier.get<Bar>('dasd')).insertOne({ _id: 'asdas', foo: 'fds' })
