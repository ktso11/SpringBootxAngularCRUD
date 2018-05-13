import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  getAllCats(): Observable<any>{
    return this.http.get('//localhost:8080/cats/allcats');
  }
  
}
