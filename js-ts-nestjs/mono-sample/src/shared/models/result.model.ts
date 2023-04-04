export enum ResultEmum {
  SUCCESS = 'success',
  ERROR = 'error',
}

export class Error {
  constructor(public readonly code: string, public readonly message: string) {}
}

export class Result {
  public code: ResultEmum;
  message: string;
  data: any | null;
  errors: Error[] | null;
  updatedAt: Date;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public setData<T>(data: T[] | T, message = '') {
    this.code = ResultEmum.SUCCESS;
    this.message = message;
    this.data = data;
    this.errors = null;
    this.updatedAt = new Date();
  }

  public setError(errors: Error[], message = '') {
    this.code = ResultEmum.ERROR;
    this.message = message;
    this.data = null;
    this.errors = errors;
    this.updatedAt = new Date();
  }
}
