import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ApiService } from './shared';
import { EventService } from './events/shared/event.service';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { EventsListComponent } from './events/eventlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/shared/event-route-activator.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    routing,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ParentComponent,
    ChildComponent,
    EventsListComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    ApiService,
    EventService,
    EventRouteActivator,
    {provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
      // useValue: () => { return true; }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}

function checkDirtyState(component: CreateEventComponent ) {
  console.log('inside checkDirtyState');
  if (!component.isDirty) {
    let response = window.confirm('you havent saved anything, do you really want to cancel ? ');
    return response;
  }
  return true;
}
