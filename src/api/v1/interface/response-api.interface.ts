export interface IResponseApi<T> {
  statusCode: number;
  message: string;
  count: number;
  body: T[];
}
