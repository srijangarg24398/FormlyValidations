import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contact } from './models/contact';
import { FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactForm:FormGroup;
  contactModel:Contact;
  contactFields:Array<FormlyFieldConfig>;

  constructor(){
  	this.contactForm=new FormGroup({});
  	this.contactModel=new Contact();
  	// this.contactFields=[
  		// <lablel>Name</label>
  		// <input type="text" placeholder="Name" required>
	  	// {
	  	// 	key:"name",
	  	// 	type:"input",
	  	// 	templateOptions:{
	  	// 		type:"text",
	  	// 		label:"Name",
	  	// 		placeholder:"Name",
	  	// 		required: true
	  	// 	}
	  	// }
  	// ]
  	this.contactFields=this.contactModel.formFields();
  }
  submitForm(contact:Contact){
  	console.log(contact);
  }
}
