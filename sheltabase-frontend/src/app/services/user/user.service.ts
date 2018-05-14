import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timingSafeEqual } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  getAllCats(): Observable<any>{
    return this.http.get('/api/cats');
  }
  getAllFosters(): Observable<any>{
    return this.http.get('/api/fosters');
  }
  
  get(id: string) {
    return this.http.get('/api/cats/' + id);
  }

  add(cat){
    return this.http.post('/api/cats',{
      "name": cat.name,
      "location": cat.location 
    });
  }

  remove(id: string){
    return this.http.delete('/api/cats/'+ id);
  }

  save(cat) {
    return this.http.patch('/api/cats/' + cat.id,{
    "name": cat.name,
    "location": cat.location
    });
  }


}
