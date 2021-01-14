/* eslint-disable @typescript-eslint/no-explicit-any */
import { CollectionInsertOneOptions, 
  InsertOneWriteOpResult, 
  FilterQuery, 
  FindOneOptions, 
  UpdateQuery, 
  UpdateOneOptions, 
  UpdateWriteOpResult, 
  Collection} from "mongodb";
import { BaseEntity } from "../Models/BaseEntity";

export interface ICollection<T extends BaseEntity> {
  insertOne(docs: T, options?: CollectionInsertOneOptions): Promise<InsertOneWriteOpResult<T>>;
  findOne(filter: FilterQuery<Partial<T>>, options?: FindOneOptions<any>): Promise<T>;
  findMany(query: FilterQuery<Partial<T>>, options?: FindOneOptions<any>): Promise<any[]>;
  updateOne(filter: FilterQuery<Partial<T>>, update: UpdateQuery<Partial<T>> | Partial<T>, options?: UpdateOneOptions): Promise<UpdateWriteOpResult>;
}

export function patchMongoCollection<T extends BaseEntity>(mongoCollection: Collection<any>): ICollection<T> {
  const patchedCollection = mongoCollection as unknown as ICollection<T> & Collection<any>;
  patchedCollection.findMany = function (query: FilterQuery<Partial<T>>, options?: FindOneOptions<T> | undefined): Promise<T[]> {
    return this.find(query, options).toArray();
  };
  return patchedCollection;
}