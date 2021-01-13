import { HttpRequest } from "@azure/functions";
import { v4 as uuidv4 } from "uuid";
import { IResponse } from "../Models/IResponse";
import { IExampleDataService } from "../Services/IExampleDataService";
import { BadRequestResponse } from "../Models/BadRequestResponse";
import { CreatedResponse } from "../Models/CreatedResponse";
import { IExample, IExampleSearch } from "../Models/IExample";
import { NotFoundResponse } from "../Models/NotFoundResponse";
import { ApiResponse } from "../Models/ApiResponse";

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

  // Finds an existing example in the database
  public async findExample(req: HttpRequest): Promise<IResponse> {
    const exampleId = req.params["exampleId"];

    if (!exampleId || exampleId.length === 0) {
      return new BadRequestResponse("Missing registration id");
    }
    
    const example: IExample | null = await this.exampleDataService.findExample(exampleId);
    
    if (!example)
      return new NotFoundResponse("Example not found");
    else
      return new ApiResponse(example);
  }

  // Updates an existing example
  public async updateExample(req: HttpRequest): Promise<IResponse> {
    const exampleId = req.params["exampleId"];

    if (exampleId == null || exampleId.length == 0) {
      return new BadRequestResponse("Missing ID parameter in the URL");
    }

    // Check if two registration IDs (in URL and data body) exist and are equal
    if (exampleId != req.body.id) {
      return new BadRequestResponse("Inconsistent registration IDs");
    }
    
    // get body
    const example = req.body as IExample;

    // update example
    await this.exampleDataService.updateExample(example);

    // returns update
    return new ApiResponse(example);
  }

  // Searches for examples in the database
  public async searchExample(req: HttpRequest): Promise<IResponse> {
    // get body
    const exampleSearch = req.body as IExampleSearch;
    
    const examples: IExample[] = await this.exampleDataService.searchExample(exampleSearch);
    
    if (examples.length === 0)
      return new NotFoundResponse("No examples found with provided criteria");
    else
      return new ApiResponse(examples);
  }
}


