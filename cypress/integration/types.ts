type DefaultData = Record<string, Record<string, any>[]>;

export interface GraphQLHttpResponse<Data = DefaultData> {
  response: {body: {result: {data: Data}}};
}
