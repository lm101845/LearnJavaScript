export class ResultModel<T> {
  data: T;
  code: number;
  msg: string;
  constructor(code: number, data: T, msg: string) {
    this.code = code;
    this.data = data;
    this.msg = msg;
  }
}
