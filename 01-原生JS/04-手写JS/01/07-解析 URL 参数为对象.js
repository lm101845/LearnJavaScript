function parseParam(url) {
    const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来
    //exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null
    //.	句号匹配任意单个字符除了换行符。
    //+	匹配>=1个重复的+号前的字符。
    //exec返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
    /**
     * 如果 exec() 找到了匹配的文本，则返回一个结果数组。否则，返回 null。
     * 此数组的第 0 个元素是与正则表达式相匹配的文本，
     * 第 1 个元素是与 RegExpObject 的第 1 个子表达式相匹配的文本（如果有的话），
     * 第 2 个元素是与 RegExpObject 的第 2 个子表达式相匹配的文本（如果有的话），
     * 以此类推。
     */
    console.log(paramsStr,'paramsStr');
    const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
    console.log('[ paramsArr ] >', paramsArr )
    let paramsObj = {};
    // 将 params 存到对象中
    paramsArr.forEach(param => {
        if (/=/.test(param)) { // 处理有 value 的参数
            let [key, val] = param.split('='); // 分割 key 和 value
            console.log(key, 'key',val,'value');
            val = decodeURIComponent(val); // 解码
            val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字

            if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
                paramsObj[key] = [].concat(paramsObj[key], val);
            } else { // 如果对象没有这个 key，创建 key 并设置值
                paramsObj[key] = val;
            }
        } else { // 处理没有 value 的参数
            paramsObj[param] = true;
        }
    })

    return paramsObj;
}

console.log(parseParam('www.baidu.com?a=1&b=2'));