import { IExample, IExampleSearch } from "../Models/IExample";

export interface IExampleDataService {
  insertExample(example: IExample): Promise<string>;
  findExample(id: string): Promise<IExample | null>;
  updateExample(example: IExample): Promise<string | null>;
  searchExample(exampleSearch: IExampleSearch): Promise<IExample[]>;
}
