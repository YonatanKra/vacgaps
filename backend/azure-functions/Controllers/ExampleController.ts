import { HttpRequest } from "@azure/functions";
import { v4 as uuidv4 } from "uuid";
import { IResponse } from "../Models/IResponse";
import { IExampleDataService } from "../Services/IExampleDataService";
import { CreatedResponse } from "../Models/CreatedResponse";

export class ExampleController {
  public constructor(
    private readonly exampleDataService: IExampleDataService,
  ) {}

  // We can validate the body's properties in each handler with a library like
  // Joi, but this is just an example so I'm keeping it simple

  // Creates an example 
  public async createExample(req: HttpRequest): Promise<IResponse> {
    const example = req.body;

    const newExampleId = uuidv4();
    example.id = newExampleId;
    await this.exampleDataService.insertExample(example);
    
    return new CreatedResponse(example);
  }
}


