import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ParentComponent } from './parent/parent.component';
import { EventsListComponent } from './events/eventlist.component';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/shared/event-route-activator.service';
import * as events from 'events';
import { EventListResolver } from './events/shared/event-list-resolver';



const routes: Routes = [
  { path: 'event/create', component: CreateEventComponent, canDeactivate: [ 'canDeactivateCreateEvent' ] },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
  { path: 'event/:id' , canActivate: [EventRouteActivator] , component: EventsListComponent, resolve: { events: EventListResolver } },
  { path: 'parent', component: ParentComponent},
  { path: 'error', component: Error404Component},
  { path: 'user', loadChildren: () => new Promise(function (resolve) {
    (require as any).ensure([], function (require: any) {
        resolve(require('./user/user.module')['UserModule']);
      });
    })
  },
  {path: '', redirectTo: 'home' , pathMatch: 'full' },
];
export const routing = RouterModule.forRoot(routes);

