import { Injectable, NgZone } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SseService {

    constructor(private readonly zone: NgZone) {}

    getServerSentEvent(url: string): Observable<MessageEvent<string>> {
        return new Observable<MessageEvent<string>>(observer => {

            const eventSource: EventSource = new EventSource(url);

            eventSource.onmessage = event => {
                this.zone.run(() => observer.next(event));
            }

            eventSource.onerror = error => {
                this.zone.run(() => observer.error(error));
            }
        })
    }

}