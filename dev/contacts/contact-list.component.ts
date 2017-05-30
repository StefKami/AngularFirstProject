import {Component} from 'angular2/core';
import {ContactComponent} from '../contacts/contact.component';

@Component({
	selector: "contact-list", 
	template: `
		<ul>
			<li *ngFor="#contact of contacts"
				(click)="onSelect(contact)"
	     		[class.clicked]="selectedContact === contact"
	     	>
			{{contact.firstName}} {{contact.lastName}}
	     	</li>
    	</ul>
    	<contact [contact]="selectedContact"></contact>
	`, 
	directives: [ContactComponent], 
	styleUrls: ["../src/css/app.css"]
})
export class ContactListComponent {
	public contacts = [
		{ firstName: "Stef", lastName: "Kami", phone:"0123 456 789", email: "stefkami@gmail.com" },
		{ firstName: "Chris", lastName: "Rahces", phone:"0548 548 684", email: "test@test.com" },
		{ firstName: "Michael", lastName: "Alloy", phone:"0589 429 369", email: "michael@gmx.com" },
		{ firstName: "Indira", lastName: "Galah", phone:"0298 422 333", email: "indira@gmail.com" }
	 ];
	public selectedContact = {};

	onSelect(contact){
		this.selectedContact = contact;
	}
}