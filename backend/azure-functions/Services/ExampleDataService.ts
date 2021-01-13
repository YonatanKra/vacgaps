import { IExampleDataService } from "./IExampleDataService";
import { IExample, IExampleSearch } from "../Models/IExample";
import { ICollection } from "./ICollection";
import { InsertFailedError } from "../Models/InsertFailedError";
import { UpdateFailedError } from "../Models/UpdateFailedError";
import { createSimpleCriteriaOperatorList, removeUndefinedPropertiesFromObject } from "../Util/Utils";

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

  public async findExample(id: string): Promise<IExample | null> {
    const filter = { id };
    const result: IDBExample = await this.collection.findOne(filter) as IDBExample;

    if (result) {
      // remove database properties
      return this.createExample(result);
    }

    return result;
  }

  public async updateExample(example: IExample): Promise<string | null> {
    const dbExample: IDBExample = {
      ...example,
      _id: example.id!,
      _shardKey: example.id!
    };

    const filter = { _id: dbExample._id, _shardKey: dbExample._shardKey };
    const result = await this.collection.updateOne(
      filter,
      {
        $set: example
      }
    );

    if (result.modifiedCount > 0) {
      return example.id!;
    }
    else {
      throw new UpdateFailedError();
    }
  }

  // searches examples
  public async searchExample(exampleSearch: IExampleSearch): Promise<IExample[]> {
    let queryFilter = {};

    // first off, delete all undefined values from the object
    removeUndefinedPropertiesFromObject(exampleSearch);

    // if we're not empty, then start putting the query together
    // tslint:disable: no-unsafe-any no-any
    const operatorList = createSimpleCriteriaOperatorList(exampleSearch);

    // set up query filter
    if (operatorList.length > 0) {
      queryFilter = {
        $and: operatorList
      };
    }

    const result = await this.collection.findMany(queryFilter);
    
    if (result) {
      return result.map(item => this.createExample(item));
    }
    return [];
  }

  
  private createExample (obj: IDBExample): IExample {
    // remove database properties
    delete obj._id;
    delete obj._shardKey;
    return obj;
  }
}

interface IDBExample extends IExample {
  _id: string;
  _shardKey: string;
}


