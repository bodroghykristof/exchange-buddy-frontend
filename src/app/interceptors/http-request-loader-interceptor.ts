import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";

export const DISPLAY_LOADER = new HttpContextToken<boolean>(() => false);

@Injectable({
    providedIn: 'root'
})
export class HttpRequestLoaderInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const active : boolean = req.context.get(DISPLAY_LOADER);
        if (active) {
            console.log('Before sending request ' + req.url)
        }
        return next.handle(req).pipe(finalize(() => {
            if (active) {
                console.log('After sending request ' + req.url);
            }
        }));
    }

}