import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  body: {},
  observe: 'response' as 'body',
  params: {},
};

export class BaseApiController {
  readonly hostUrl: string;

  constructor(private http: HttpClient) {
    this.hostUrl = 'http://localhost:5000';
  }

  protected get<TData>(
    url: string,
    data?: any,
    params?: any,
  ): Observable<TData> {
    return this.request<TData>('GET', url, data, params).pipe(
      map((response) => response.body!)
    );
  }

  protected post<TData>(
    url: string,
    data: any,
  ): Observable<TData> {
    return this.request<TData>('POST', url, data, null).pipe(
      map((response) => response.body!)
    );
  }

  private request<TData>(
    method: string,
    url: string,
    data?: TData,
    params?: any,
  ): Observable<HttpResponse<TData>> {

    httpOptions.body = data || {};
    httpOptions.params = params;
    let path = `${this.hostUrl}/${url}`;
    console.log(path);
    return this.http.request<HttpResponse<TData>>(
      method,
      path,
      httpOptions
    );
  }
}
