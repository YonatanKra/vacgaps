import { ISearchCriteriaFragment } from "../Models/Search";
import { IExampleSearch } from "../Models/IExample";

/**
 * Remove undefined properties from a JavaScript object.
 * Useful when attempting to avoid sending undefined params to a http endpoint
 *
 * Taken from https://stackoverflow.com/a/38340374/2442468
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removeUndefinedPropertiesFromObject = (obj: any): void => {
  Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key]);
};

/**
 * Checks if an object has any properties left that are empty, or null.
 *
 * Taken from https://stackoverflow.com/a/49427583
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isObjectEmpty = (object: any): boolean =>
  !Object.values(object).some(x => (x !== null && x !== ""));

/**
 * Creates a list of operators from simple property equals criteria. Excludes array and date properties.
 * @param searchCriteria the search criteria to use for the operator list.
 */
export function createSimpleCriteriaOperatorList(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchCriteria: IExampleSearch): any[] {

  const simpleEqualCriteria = (key: string): boolean => !(searchCriteria[key] instanceof Date)
  && !(searchCriteria[key] instanceof Array);

  const createOperator = (key: string): ISearchCriteriaFragment => {
    const frag: ISearchCriteriaFragment = {};
    frag[key] = searchCriteria[key];
    return frag;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const operatorList: any[] = Object.keys(searchCriteria)
    .filter(simpleEqualCriteria)
    .map(createOperator);
  return operatorList;
}
