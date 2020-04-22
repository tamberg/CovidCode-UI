import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ObHttpApiInterceptorEvents, ObNotificationService} from '@oblique/oblique';

interface HttpOptions {
	headers?:
		| HttpHeaders
		| {
				[header: string]: string | string[];
		  };
	observe?: 'body';
	params?:
		| HttpParams
		| {
				[param: string]: string | string[];
		  };
	reportProgress?: boolean;
	responseType?: 'json';
	withCredentials?: boolean;
}

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private readonly path: string;

	constructor(
		@Inject('HOST') host: string,
		private http: HttpClient,
		interceptor: ObHttpApiInterceptorEvents,
		notification: ObNotificationService
	) {
		this.path = `${host}/v1`;
		interceptor.sessionExpired.subscribe(() => notification.error('notification.401'));
	}

	get<T>(url: string, options?: HttpOptions): Observable<T> {
		return this.http.get<T>(`${this.path}/${url}`, options);
	}

	post<T>(url: string, data: any, options?: HttpOptions): Observable<T> {
		return this.http.post<T>(`${this.path}/${url}`, data, options);
	}

	delete<T>(url: string, options?: HttpOptions): Observable<T> {
		return this.http.delete<T>(`${this.path}/${url}`, options);
	}

	head<T>(url: string, options?: HttpOptions): Observable<T> {
		return this.http.head<T>(`${this.path}/${url}`, options);
	}

	options<T>(url: string, options?: HttpOptions): Observable<T> {
		return this.http.options<T>(`${this.path}/${url}`, options);
	}

	put<T>(url: string, data: any, options?: HttpOptions): Observable<T> {
		return this.http.put<T>(`${this.path}/${url}`, data, options);
	}

	patch<T>(url: string, data: any, options?: HttpOptions): Observable<T> {
		return this.http.patch<T>(`${this.path}/${url}`, data, options);
	}

	jsonp<T>(url: string, callbackParam: string): Observable<T> {
		return this.http.jsonp<T>(`${this.path}/${url}`, callbackParam);
	}

	request<T>(method: string, url: string, options?: HttpOptions): Observable<T> {
		return this.http.request<T>(method, `${this.path}/${url}`, options);
	}
}
