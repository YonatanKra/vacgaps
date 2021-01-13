import { IExample } from "../Models/IExample";

export interface IExampleDataService {
  insertExample(example: IExample): Promise<string>;
}
