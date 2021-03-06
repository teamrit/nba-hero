import fetch from 'isomorphic-fetch';
import {NBA_SERVER} from "./requests";

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export class Api {
		static get(url) {
				return fetch(proxyurl + NBA_SERVER + url, {
						method: 'GET',
						headers: {
              Accept: 'application/json',
							mode: 'no-cors'
						}
				})
						.then(response => {
								if (response.status >= 400) {
										throw new Error('Bad response from server');
								}
								const t = response.json();
								return t;
						})
						.catch(error => {
								throw error;
						});
		}
		static makeParams(params) {
				let urlParams = '';
				for (let key in params) {
						if (params.hasOwnProperty(key)) {
								const value = params[key];
								if (value) {
										urlParams += key + '=' + encodeURIComponent(value) + '&';
								}
						}
				}
				return urlParams;
		}
}
