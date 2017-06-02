import {Component, OnInit} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {Router, RouteParams} from 'angular2/router';


@Component({
	templateUrl: '/dev/contacts/new-contact.template.html', 
	providers: [ContactService], 
	styles: [`
		label {
			display: inline-block;
			width: 140px;
		}

		input{
			width:250px;
		}
	`] 
})

export class NewContactComponent implements OnInit {
	
	public passedLastName = "";

	constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams) {}

	onAddContact(firstName, lastName, phone, email) {
		let contact: Contact = {firstName: firstName, lastName: lastName, phone: phone, email: email};
		this._contactService.insertContact(contact);
		this._router.navigate(['Contacts']);
	}

	ngOnInit():any {
		this.passedLastName = this._routeParams.get('lastName');
	}
}