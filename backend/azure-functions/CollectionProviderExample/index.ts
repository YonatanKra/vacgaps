import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { CollectionProvider } from "../Services/CollectionProvider"

type ExampleEntity = BaseEntity & { foo: string; };

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {  
  // Collection Provider usage example

  const collection = await CollectionProvider.get<ExampleType>('example');
  collection.insertOne({ _id: 'fsdfsf', foo: 'bar' });

  context.res = {
    status: 200,
    body: 'Hello from Collection Provider Example',
  };
}

export default httpTrigger;
