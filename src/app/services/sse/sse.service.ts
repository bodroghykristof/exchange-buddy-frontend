import { Injectable, NgZone } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SseService {

    constructor(private readonly zone: NgZone) {}

    getServerSentEvent(url: string): Observable<EventSource> {
        return new Observable<EventSource>(observer => {

            const eventSource: EventSource = new EventSource(url);

            eventSource.onmessage = event => {
                this.zone.run(() => console.log(event));
                
            }

            eventSource.onerror = error => {
                this.zone.run(() => console.log(error));
            }
        })
    }

}