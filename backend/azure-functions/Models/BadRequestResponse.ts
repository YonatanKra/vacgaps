import { IResponse } from "./IResponse";
import { StatusCodes } from "http-status-codes";

export class BadRequestResponse extends Error implements IResponse {
  public constructor(message: string) {
    super ("Bad request: " + message);
    this.body = message;
  }
  body: string;
  headers = { "Content-Type": "application/json" };
  status = StatusCodes.BAD_REQUEST;
}


