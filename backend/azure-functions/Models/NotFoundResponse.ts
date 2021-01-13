import { IResponse } from "./IResponse";
import { StatusCodes } from "http-status-codes";

export class NotFoundResponse extends Error implements IResponse {
  public constructor(message: string) {
    super ("Not found request: " + message);
    this.body = message;
  }
  body: string;
  headers = { "Content-Type": "application/json" };
  status = StatusCodes.NOT_FOUND;
}

