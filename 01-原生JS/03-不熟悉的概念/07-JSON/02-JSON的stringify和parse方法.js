// JSON 对象有两个方法： stringify() 和 parse() 。
// stringify()可以将JavaScript 序列化为 JSON 字符串
// parse()可以将JSON 解析为原生 JavaScript 值
let book = {
	title: 'Professional JavaScript',
	authors: ['Nicholas C. Zakas', 'Matt Frisbie'],
	edition: 4,
	year: 2017,
}
//这个book是一个js对象


let jsonText = JSON.stringify(book)
console.log(jsonText);
// 这个例子使用 JSON.stringify() 把一个 JavaScript 对象序列化为一个 JSON 字符串，保存在变量
// jsonText 中。

// parse()可以将JSON 解析为原生 JavaScript 值
// 注意， book 和 bookCopy 是两个完全不同的对象，没有任何关系。但是它们拥有相同的属性和值。
let bookCopy = JSON.parse(jsonText);
console.log(bookCopy);

