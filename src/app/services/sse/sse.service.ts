import { Injectable, NgZone } from "@angular/core";
import { Observable } from "rxjs";
import { OperationResult } from "../../commons/operation-result.model";

@Injectable({
    providedIn: 'root'
})
export class SseService {

    constructor(private readonly zone: NgZone) {}

    getServerSentEvent(url: string): Observable<OperationResult> {
        return new Observable<OperationResult>(observer => {

            const eventSource: EventSource = new EventSource(url);

            eventSource.onmessage = data => {
                this.zone.run(() => observer.next({data: data}));
            }

            // we do not use the error stream because we would like to keep
            // open the subscription (using observer.error would terminate the observer)
            eventSource.onerror = error => {
                this.zone.run(() => observer.next({error: error}
                ));
            }
        })
    }

}