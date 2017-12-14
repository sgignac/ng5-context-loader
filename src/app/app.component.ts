import { IApplicationContext } from './interfaces/iapplication-context';
import { Component, OnInit } from '@angular/core';
import { ApplicationContextService } from './services/application-context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private _appContext: ApplicationContextService){}

  objectKeys = Object.keys;
  ctx:IApplicationContext;

  ngOnInit(){
    this.ctx = this._appContext.appContext;
  }


}
