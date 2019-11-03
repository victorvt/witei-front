import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

/**
 * The best way to send headers in each request is by an http interceptor, 
 * but for Witei's test the requests go through of a constant of HttpHeaders created in the service
 */
const httpOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 16002a3e-983e-438b-9d4e-cc461744646e'
        }
    )
};

@Injectable()
export class AppService {

    constructor(
        private http: HttpClient
    ) { }

    /**
     * List all tasks with or without params
     * Reference: https://witei.docs.apiary.io/#reference/0/tasks/list-tasks
     */
    getTasks(): Observable<Object> {
        return this.http.get(environment.apiUrl + '/tasks/?done=true', httpOptions);
    };

    /**
     * Create a new task
     * @param body Params of the task
     * Reference: https://witei.docs.apiary.io/#reference/0/tasks/create-task
     */
    postTask(body): Observable<Object> {
        return this.http.post(environment.apiUrl + '/tasks', body, httpOptions)
    }

}