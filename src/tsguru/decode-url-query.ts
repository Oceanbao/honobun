import type { String, Union } from "ts-toolbelt";

const query = `/home?a=foo&b=wow`;

type Query = typeof query;

type QueryParamPart = String.Split<Query, "?">[1];

type QueryElements = String.Split<QueryParamPart, "&">;

type QueryParams = {
  [QueryElement in QueryElements[number]]: {
    [Key in String.Split<QueryElement, "=">[0]]: String.Split<
      QueryElement,
      "="
    >[1];
  };
}[QueryElements[number]];

const queryParams: Union.Merge<QueryParams> = {
  a: "foo",
  b: "wow",
};
