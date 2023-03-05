import { Component } from '@angular/core';
import { AppDataService } from './core/app-data.service';
import { Observable } from 'rxjs';
import { Post } from './common/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public subject: string = "";
  public postData$!: Observable<Post>;
  public subjectMessage$!: Observable<string>;

  constructor(private appDataService: AppDataService){
    this.subjectMessage$ = appDataService.messageSubject;
    this.postData$ = appDataService.getPost();
  }

  updateSubject(){
    this.appDataService.editMessageSubject = this.subject;
  }

}
