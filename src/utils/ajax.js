import React from 'react';
import Axios from 'axios';
const weburl = "http://http://47.100.246.45:8002/";
const mockUrl = 'http://localhost:3003';

export default {
    convertObjToQueryString: function (obj) {
        var paramStr = '';
        for (let name in obj) {
            paramStr += (name + '=' + obj[name] + '&');
        }
        if (paramStr[paramStr.length - 1] === '&')
            return paramStr.slice(0, paramStr.length - 1);
        else
            return paramStr;
    },
    get: function (originUrl, data, mock) {
        let url = "";
        if (mock) {
            url = mockUrl + originUrl
        } else {
            url = weburl + originUrl;
        }
        let queryString = this.convertObjToQueryString(data);
        if (url.indexOf('?') !== -1) url = url + '&' + queryString;
        else url += ('?' + queryString);
        return axios(url, {
            credentials: 'include'
        });
    },
    getJSON: function (originUrl, data, mock) {
        return this.get(originUrl, data, mock).then(function (res) {
            if (res.status === "500") {
                Modal.error({
                    title: '系统异常',
                    content: '系统出现异常，请按F5刷新后重试，如果仍然存在异常，请联系管理员解决。',
                    onOk() {
                        ref = true;
                    },
                });
            } else if (res.redirected) {
                Modal.error({
                    title: '登录超时',
                    content: '登录超时,请重新登录',
                });
            } else {
                return res.json();
            }
        });


    },
    post: function (url, data, mock) {
        return Axios.post(url)
    }
}
