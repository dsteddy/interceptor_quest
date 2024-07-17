import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const startTime = Date.now();

        return next.handle(req).pipe(
            tap(
                event => {},
                error => {},
                () => {
                    const elaspedTime = Date.now() - startTime;
                    console.log(`Request for ${req.urlWithParams} took ${elaspedTime} ms.`)
                }
            )
        );
    }
}