import { FormlyFieldConfig } from '@ngx-formly/core';

export class Contact {
	name:string;
	email:string;
	phone:string;

	formFields(){
		return <FormlyFieldConfig[]>[
			{
		  		key:"name",
		  		type:"input",
		  		templateOptions:{
		  			type:"text",
		  			label:"Name",
		  			placeholder:"Name",
		  			required: true
		  		},
		  		validation:{
		  			messages:{
		  				required:"You need to provide a name!"
		  			}
		  		}
		  	},
		  	{
		  		key:"email",
		  		type:"input",
		  		templateOptions:{
		  			type:"email",
		  			label:"Email",
		  			placeholder:"Email",
		  			required: true
		  		},
		  		validation:{
		  			messages:{
		  				required:"You need to provide an email!",
		  				email:"Please provide a valid email"
		  			}
		  		}
		  	},
		  	{
		  		key:"phone",
		  		type:"input",
		  		templateOptions:{
		  			type:"tel",
		  			label:"Phone",
		  			placeholder:"Mobile Number",
		  			required: true
		  		},
		  		validation:{
		  			messages:{
		  				required:"You need to provide a phone number!"
		  			}
		  		}
		  	}
		];
	}
}
