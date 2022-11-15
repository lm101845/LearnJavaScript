import axios from "axios"

const btn = document.querySelector("#btn")


// 模拟 get 请求
// btn.addEventListener("click", function() {
//   axios.get("http://localhost:3000/movies").then(res => {
//     console.log(res.data);
//   })
// })


// 模拟 post 请求
// btn.addEventListener("click", function() {
//   axios.post("http://localhost:3000/movies", {
//     "name": "最佳损友2",
//     "score": 999
//   }).then(res => {
//     console.log(res.data);
//   })
// })


// 模拟 put 请求
// btn.addEventListener("click", function() {
//   axios.put("http://localhost:3000/movies/20", {
//     "name": "最佳损友4",
//     // "score": 888
//   }).then(res => {
//     console.log(res.data);
//   })
// })


// 模拟 patch 请求
// btn.addEventListener("click", function() {
//   axios.patch("http://localhost:3000/movies/19", {
//     "name": "最佳损友3",
//     // "score": 777
//   }).then(res => {
//     console.log(res.data);
//   })
// })


// 模拟 delete 请求
btn.addEventListener("click", function() {
  axios.delete("http://localhost:3000/movies/13").then(res => {
    console.log(res.data);
  })
})