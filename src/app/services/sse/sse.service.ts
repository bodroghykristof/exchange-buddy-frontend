import { Injectable, NgZone } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SseService {

    constructor(private readonly zone: NgZone) {}

    getServerSentEvent(url: string, onEvent: (event: MessageEvent) => any, onError: (error: any) => any): Observable<EventSource> {
        return new Observable<EventSource>(observer => {

            const eventSource: EventSource = new EventSource(url);

            eventSource.onmessage = event => {
                this.zone.run(() => onEvent(event));
            }

            eventSource.onerror = error => {
                this.zone.run(() => onError(error));
            }
        })
    }

}