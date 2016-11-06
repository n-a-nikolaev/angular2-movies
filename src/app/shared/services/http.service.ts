import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, RequestOptionsArgs, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    constructor(
        private http: Http
    ) { }

    public get(url: string, body?: Object) {
        let options: RequestOptionsArgs = {};

        if (body) {
            let params: URLSearchParams = new URLSearchParams();
            Object.keys(body).forEach(key => {
                params.set(key, body[key]);
            });
            options.search = params;
        }

        //options.headers = this.getHeaders('get');

        return this.http.get(url, options)
            .map((res: Response) => res.json());
    }

    /**
     * @description 
     * Generate Header for different http requests
     *  
     * @param {string} - http request method ( post, get, put, delete );
     * @return Headers object
     */
    private getHeaders(method): Headers {
        let that = this,
            paramsObj = {};

        switch (method) {
            case 'post':
                paramsObj['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
                break;
            case 'get':
                paramsObj['Content-Type'] = 'application/json';
                break;
            case 'put':
                paramsObj['Content-Type'] = 'multipart/form-data; charset=UTF-8';
                break;
            case 'delete':
                paramsObj['Content-Type'] = 'multipart/form-data; charset=UTF-8';
                break;
        }

        return new Headers(paramsObj);
    }
}