export class User {

	constructor( public email: string,
				 public password: string,
				 public firstName: string,
				 public lastName: string) {}
}

// public allows you to define as a public attribute similar to the fashion in the message.model
// ? = optional