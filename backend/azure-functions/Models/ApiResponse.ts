import { IResponse } from "./IResponse";
import { StatusCodes } from "http-status-codes";
export class ApiResponse<T> implements IResponse {
  public constructor(public body: T) {
  }
  headers = { "Content-Type": "application/json" };
  status = StatusCodes.OK;
}
