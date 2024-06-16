export default function ajax(option) {
    return new Promise((resolve, reject) => {
        let method = (option.type || 'GET').toUpperCase();
        const data = option.data || {};
        let type = option.str || 'form';

        let querystring = Object.entries(data).map(item => item.join("=")).join("&")
        let [url, search] = option.url.split('?')

        querystring = search ? '&' + querystring : '?' + querystring

        let xhr = new XMLHttpRequest();

        method === 'GET' ? xhr.open('GET', option.url + querystring) : xhr.open('POST', option.url)

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    let res = JSON.parse(this.responseText);
                    resolve(res);
                } else {
                    reject(this.status)
                }
            }
        }
        if (method === 'GET') {
            xhr.send()
        } else if (method === 'POST') {
            // json格式
            if (type === 'JSON') {
                xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
                xhr.send(JSON.stringify(option.data))
            } else { // 表单格式
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8')
                xhr.send(querystring)
            }
        }
    })
}