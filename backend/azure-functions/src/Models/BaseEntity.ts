export type BaseEntity = {
  _id: string;
  [key: string]: unknown;
};

export type Entity<T> = T & BaseEntity;