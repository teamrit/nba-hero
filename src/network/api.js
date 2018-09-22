import fetch from 'isomorphic-fetch';
export class Api {
    static get(url) {
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
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

    static postAuth(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: Api.makeParams(data)
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

    static post(url, data) {
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
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
