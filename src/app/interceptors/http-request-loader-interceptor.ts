import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HttpRequestLoaderInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Before sending request')
        return next.handle(req).pipe(finalize(() => console.log('After sending request')));
    }

}