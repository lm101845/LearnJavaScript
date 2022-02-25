function formatDate(value) {
    let month = value.slice(4, 6).replace(/^0/, "");
    let day = value.slice(6, 8).replace(/^0/, "");
    return month + '月' + day +　'日'
}

console.log(formatDate("20220225"));
console.log(formatDate("20220205"));
console.log(formatDate("20221205"));
console.log(formatDate("20221215"));