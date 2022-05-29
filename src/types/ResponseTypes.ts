export default interface ResponseTypes{
  statusCode: number;
  data: {
    message?: string;
    results?: object;
  }
}
