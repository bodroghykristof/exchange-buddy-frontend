import { environment } from '../../environments/environment';

export const BASE_URL: string = environment.serverUrl;

export const EXCHANGE_RATE_ENDPOINT: string = '/exchange_rates';
export const EXCHANGE_RATE_SSE_ENDPOINT: string = '/exchange_rates/sse';