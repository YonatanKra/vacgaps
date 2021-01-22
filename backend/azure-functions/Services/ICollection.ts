/* eslint-disable @typescript-eslint/no-explicit-any */
import { 
  AggregationCursor, 
  Collection,
  CollectionAggregationOptions,
  CollectionInsertOneOptions, 
  InsertOneWriteOpResult, 
  FilterQuery, 
  FindOneOptions, 
  UpdateQuery, 
  UpdateOneOptions, 
  UpdateWriteOpResult} from "mongodb";
import { BaseEntity, Entity } from "../Models/BaseEntity";

type PartialEntity<T> = Partial<Entity<T>>;

export interface ICollection<T> {
  aggregateDocuments<TAggregated>(pipeline?: object[], options?: CollectionAggregationOptions): Promise<AggregationCursor<TAggregated>>;
  insertOne(docs: T & Partial<BaseEntity>, options?: CollectionInsertOneOptions): Promise<InsertOneWriteOpResult<Entity<T>>>;
  findOne(filter: FilterQuery<PartialEntity<T>>, options?: FindOneOptions<any>): Promise<Entity<T>>;
  findMany(query: FilterQuery<PartialEntity<T>>, options?: FindOneOptions<any>): Promise<any[]>;
  updateOne(filter: FilterQuery<PartialEntity<T>>, update: UpdateQuery<Partial<T & BaseEntity>> | Partial<T & BaseEntity>, options?: UpdateOneOptions): Promise<UpdateWriteOpResult>;
}

export function patchMongoCollection<T extends BaseEntity>(mongoCollection: Collection<any>): ICollection<T> {
  const patchedCollection = mongoCollection as unknown as ICollection<T> & Collection<any>;
  patchedCollection.findMany = function (query: FilterQuery<Partial<T>>, options?: FindOneOptions<T> | undefined): Promise<T[]> {
    return this.find(query, options).toArray();
  };
  // error: MongoError, result: T
  patchedCollection.aggregateDocuments = function<TAggregated> (pipeline?: object[], options?: CollectionAggregationOptions): Promise<AggregationCursor<TAggregated>> {
    let that: Collection<any> = this;
    return new Promise<AggregationCursor<TAggregated>>((resolve, reject) =>
    {
      that.aggregate<TAggregated>(pipeline, options, (err, cursor) => {
        if (err) {
          reject(err);
        } else {
          resolve(cursor);
        }
      });
    });
  };

  return patchedCollection;
}