import {Component} from 'angular2/core';
import {ContactListComponent} from "./contacts/contact-list.component";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NewContactComponent} from './contacts/new-contact.component';


@Component({
    selector: 'app',
    templateUrl: '/dev/app.template.html' ,  
    directives: [ContactListComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: '/contacts', name:'Contacts', component: ContactListComponent, useAsDefault:true}, 
	{path: '/newContact', name: 'NewContact', component: NewContactComponent}
])

export class AppComponent {
	
}