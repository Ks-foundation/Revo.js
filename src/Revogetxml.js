var Revo = Revo || {};

Revo.xml = {
    get: function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var xmlDoc = xhr.responseXML;
                if (xmlDoc) {
                    callback(null, xmlDoc);
                } else {
                    callback("Failed to parse XML", null);
                }
            } else if (xhr.readyState === 4) {
                callback("Failed to fetch XML", null);
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }
};
