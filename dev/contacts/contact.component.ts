import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Contact} from './contact';

@Component({
	selector: "contact", 
	templateUrl: '/dev/contacts/contact.template.html', 
	inputs: ["contact"],
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
export class ContactComponent {
	public contact: Contact = null;

	constructor(private _router: Router) {}
	
	onCreateNew() {
		this._router.navigate(['NewContact', {lastName: this.contact.lastName}]);
	}
}