import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  private message: BehaviorSubject<string> = new BehaviorSubject<string>('Hola');

  constructor(private httpClient: HttpClient) { }

  getPost():Observable<Post> {
    return this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts/1`);
  }

  get messageSubject(): Observable<string> {
    return this.message.asObservable();
  }

  set editMessageSubject(newValue: string) {
    this.message.next(newValue);
  }

}
