import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


/* 
  Http service is the service that provide the procedures
  to make the HTTP Requests to a remote server.
  It is a base layer service used only by other service.
  In this simple application only the GET request is implemented
*/
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: Http) {    
  }
 
  getRequest(path): Promise<any> {    
    return this.http.get(path)
        .toPromise().
        then((response) => response.json()).
        catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
            return Promise.reject(error.message || error);
  }

}

