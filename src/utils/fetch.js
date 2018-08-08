const domain = "http://47.100.246.45:8082";
export default {
    post: function (url, data) {
        return fetch(domain + url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }).then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
    },
    convertObjToQueryString: function (obj) {
        let paramStr = '';
        for (let name in obj) {
            paramStr += (name + '=' + obj[name] + '&');
        }
        if (paramStr[paramStr.length - 1] === '&')
            return paramStr.slice(0, paramStr.length - 1);
        else
            return paramStr;
    },
    get: function (url, data) {
        let queryString = this.convertObjToQueryString(data);
        if (url.indexOf('?') !== -1) url = url + '&' + queryString;
        else url += ('?' + queryString);
        return fetch(domain + url, {
            credentials: 'include'
        });
    },
    getJSON: function (url, data) {
        return this.get(url, data).then((response) => response.json());
    },
}
