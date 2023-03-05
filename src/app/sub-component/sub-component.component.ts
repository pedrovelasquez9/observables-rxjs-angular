import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppDataService } from '../core/app-data.service';

@Component({
  selector: 'app-sub-component',
  templateUrl: './sub-component.component.html',
  styleUrls: ['./sub-component.component.scss']
})
export class SubComponentComponent implements OnInit {
  public subjectMessage$!: Observable<string>;

  constructor(appDataService: AppDataService){
    this.subjectMessage$ = appDataService.messageSubject;
  }

  ngOnInit(): void {
  }

}
