import {Component} from 'angular2/core';
import {ContactComponent} from '../contacts/contact.component';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {OnInit} from 'angular2/core';


@Component({
	selector: "contact-list", 
	templateUrl: './dev/contacts/contact-list.template.html', 
	directives: [ContactComponent], 
	providers: [ContactService], 
	styleUrls: ["../src/css/contact-list.css"]
})
export class ContactListComponent implements OnInit{
	public contacts: Contact[];
	public selectedContact = null;

	constructor(private _contactService: ContactService) {}

	onSelect(contact){
		this.selectedContact = contact;
	}

	getContacts() {
		this._contactService.getContacts().then((contacts:Contact[]) => this.contacts = contacts);
	}

	ngOnInit():any {
		this.getContacts();
	}
}