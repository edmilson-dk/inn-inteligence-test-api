import { HttpResponse } from "../ports/http";

export const badRequest = (error: string, statusCode = 400): HttpResponse => ({
  statusCode,
  body: error
});

export const ok = (data: any, statusCode = 200): HttpResponse => ({
  statusCode,
  body: data
});

export const serverError = (reason: string): HttpResponse => ({
  statusCode: 500,
  body: new Error(reason).message,
});
