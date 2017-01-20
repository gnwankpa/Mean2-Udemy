export class Message {
	content: string;
	username: string;
	messageId?: string;
	userId?: string;

	constructor( content: string, username: string, messageId?: string, userId?: string) {
		this.content = content;
		this.username = username;
		this.messageId = messageId;
		this.userId = userId;
	}

}

// public allows you to define as a public attribute similar to the fashion in the message.model
// ? = optional