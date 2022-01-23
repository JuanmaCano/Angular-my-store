import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class TokenService {
	constructor() {}

	saveToken(token: string) {
		var date = new Date();
		date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
		var expires = '; expires=' + date.toUTCString();
		document.cookie = 'token=' + token + expires + '; path=/';
	}

	getToken() {
		const token = 'token=';
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(token) == 0) {
				return c.substring(token.length, c.length);
			}
		}
		return '';
	}
}
