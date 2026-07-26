import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Outgoing HTTP Request intercepted:', req.url);
  return next(req);
};