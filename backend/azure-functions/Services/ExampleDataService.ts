import { IExampleDataService } from "./IExampleDataService";
import { IExample } from "../Models/IExample";
import { ICollection } from "./ICollection";
import { InsertFailedError } from "../Models/InsertFailedError";

export class ExampleDataService implements IExampleDataService {
  constructor (private readonly collection: ICollection) {

  }

  public async insertExample(examaple: IExample): Promise<string> {
    const dbExample: IDBExample = {
      ...examaple,
      _id: examaple.id!,
      _shardKey: examaple.id!
    };

    const result = await this.collection.insertOne(dbExample);
    if (result.insertedCount > 0) {
      return dbExample._id;
    }
    else {
      throw new InsertFailedError();
    }
  }
}

interface IDBExample extends IExample {
  _id: string;
  _shardKey: string;
}


