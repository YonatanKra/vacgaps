import { Settings } from "./ISettings";

export class EnvironmentSettings implements Settings {
  public get exampleCollection(): string { return "examples";}
  public get vacGapsDatabase(): string { return process.env.vacgaps_database || ""; }
  public get mongoConnectionString(): string { return process.env.mongo_connection_string || "";}
  public get allowSelfSignedMongoCert(): boolean { return JSON.parse(process.env.allow_self_signed_mongo_cert || "false");}
}