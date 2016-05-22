/*

    #NoNeedForjQuery

    Author: Liam Martens

*/
XMLHttpRequest.prototype.success = function(fn) {
    this.addEventListener('readystatechange', (function(callback) {
        if((this.status>=200)&&(this.status<300)&&(this.readyState==4)) {
            callback.call(this, this.responseText);
        }
    }).bind(this, fn));
}
XMLHttpRequest.prototype.fail = function(fn) {
    this.addEventListener('readystatechange', (function(callback) {
        if((this.status>=200)&&(this.status<300)&&(this.readyState==4)) {
            callback.call(this, this);
        }
    }).bind(this, fn));
}
window._ = function(sl) {
    return document.querySelectorAll(sl);
}
window._.ajax = function(method, url, data) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    if(data!=undefined) {
        xhr.send(JSON.stringify(data));
    } else { xhr.send(); }
    return xhr;
}
