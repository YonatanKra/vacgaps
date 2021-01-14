import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { CollectionProvider } from "../Services/CollectionProvider"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {  
  // Collection Provider usage example
  type exampleType = { _id: string; foo: string }
  const collection = await CollectionProvider.get<exampleType>('example');
  collection.insertOne({ _id: 'fsdfsf', foo: 'bar' });

  context.res = {
    status: 200,
    body: 'Hello from Collection Provider Example',
  };
}

export default httpTrigger;