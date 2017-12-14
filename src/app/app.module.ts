import { ApplicationContextService } from './services/application-context.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';

//Factory to load the application context at bootstrap
export function applicationContextServiceFactory(appContextService: ApplicationContextService): Function {
  return () => appContextService.initContext();
}

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ApplicationContextService,
    {
      provide: APP_INITIALIZER,
      useFactory: applicationContextServiceFactory,
      deps: [ApplicationContextService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
