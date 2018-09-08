import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

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
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

}

