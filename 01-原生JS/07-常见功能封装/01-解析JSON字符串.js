function parseJsonString(params) {
    let res;
    if (Object.prototype.toString.call(params) === '[object String]') {
        try {
            const parse = JSON.parse(params);
            if(typepf parse == 'object' && parse) {
                res = parseJsonString(parse);
            }else {
                res = params
            }
        } catch (err) {
            res = params;
        }
    } else if (Object.prototype.toString.call(params) === '[object Array]') {
        res = []
        for (let k in params) {
            const p = params[k]
            res[k] = parseJsonString(p)
        }
    } else if (Object.prototype.toString.call(params) === '[object Object]') {
        res = {}
        for (let k in params) {
            const p = params[k]
            res[k] = parseJsonString(p)
        }
    } else {
        res = params
    }
    return res
}

console.log(parseJsonString('{"result":true, "count":42}');
