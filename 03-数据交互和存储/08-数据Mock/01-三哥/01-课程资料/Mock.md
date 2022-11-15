## Mock内容介绍

- json-server模拟数据（重点）
- Mock.js模拟数据 （重点）
- ApiFox简单介绍 （了解）



## json-server

#### 1.环境搭建

- node环境，建议12以上
- 下载json-server   `npm install -g json-server`
- 创建文件夹--myserver
- 启动 `json-server --watch db.json`
- 创建测试环境 `npm init vite@latest`
- 修改端口号 `json-server --watch db.json --port 5000`

db.json会自动生成一些数据

```json
{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  },
    
  // 也可以自己随便加点数据测试一下
  "stars": [
    {
      "id": 100,
      "name": "邱淑贞"
    },
    {
      "id": 101,
      "name": "周慧敏"
    },
    {
      "id": 102,
      "name": "李丽珍"
    }
  ]  
}
```



####  2.获取数据（GET）

数据

```json
{
  "movies": [
    {
      "id": 1,
      "name": "城市猎人",
      "score": 9.9
    },
    {
      "id": 2,
      "name": "倚天屠龙记",
      "score": 9.8
    },
    {
      "id": 3,
      "name": "整蛊专家",
      "score": 10.0
    }
  ],
  "users": [
    {
      "name": {
        "username": "邱淑贞",
        "nickname": "goddess"
      },
      "password": "123456"
    }
  ]
}
```



获取所有数据

`获取所有电影数据    http://localhost:3000/movies`

```json
[
    {
    "id": 1,
    "name": "城市猎人",
    "score": 9.9
    },
    {
    "id": 2,
    "name": "倚天屠龙记",
    "score": 9.8
    },
    {
    "id": 3,
    "name": "整蛊专家",
    "score": 10
    }
]	
```



`获取所有用户数据   http://localhost:3000/users`

```json
[
    {
    "name": {
    "username": "邱淑贞",
    "nickname": "goddess"
    },
    "password": "123456"
    }
]
```



` 根据id获取数据  方式一：  http://localhost:3000/movies/1`

```json
{
    "id": 1,
    "name": "城市猎人",
    "score": 9.9
}	
```



`根据id获取数据  方式二：http://localhost:3000/movies?id=1`

```json
[
    {
    "id": 1,
    "name": "城市猎人",
    "score": 9.9
    }
]
```



`添加多个过滤条件 http://localhost:3000/movies?id=1&score=9.9`

```json
[
    {
    "id": 1,
    "name": "城市猎人",
    "score": 9.9
    }
]
```



`使用对象取属性值 obj.key 的方式： http://localhost:3000/users?name.nickname=goddess`

```json
[
    {
    "name": {
    "username": "邱淑贞",
    "nickname": "goddess"
    },
    "password": "123456"
    }
]	
```

再添加一些数据

```json
{
      "id": 4,
      "name": "整蛊专家1",
      "score": 10.0
    },
    {
      "id": 5,
      "name": "整蛊专家2",
      "score": 10.1
    },
    {
      "id": 6,
      "name": "整蛊专家3",
      "score": 9.1
    },
    {
      "id": 7,
      "name": "整蛊专家4",
      "score": 9.6
    },
    {
      "id": 8,
      "name": "整蛊专家5",
      "score": 9.0
    },
    {
      "id": 9,
      "name": "整蛊专家6",
      "score": 9.1
    }
```



`模糊搜索  http://localhost:3000/movies?q=9.1`

```json
[
    {
    "id": 6,
    "name": "整蛊专家3",
    "score": 9.1
    },
    {
    "id": 9,
    "name": "整蛊专家6",
    "score": 9.1
    }
]
```



` 分页搜索  分页采用 _page 来设置页码， _limit 来控制每页显示条数。如果没有指定 _limit ，默认每页显示10条`

`http://localhost:3000/movies?_page=1&_limit=2`

```json
[
    {
    "id": 1,
    "name": "城市猎人",
    "score": 9.9
    },
    {
    "id": 2,
    "name": "倚天屠龙记",
    "score": 9.8
    }
]		
```



`排序 sort   排序采用 `_sort` 来指定要排序的字段， `_order` 来指定排序是正排序还是逆排序（asc | desc ，默认是asc）`

`http://localhost:3000/movies?_sort=score&_order=desc`

`http://localhost:3000/movies?_sort=score&_order=desc&_page=1&_limit=2`

```json
[
    {
    "id": 5,
    "name": "整蛊专家2",
    "score": 10.1
    },
    {
    "id": 3,
    "name": "整蛊专家",
    "score": 10
    }
]		
```



`取局部数据 Slice  采用 `__start` 来指定开始位置，_ `_end` 来指定结束位置, 或者是用`_limit`来指定从开始位置起往后取几个数据`

`http://localhost:3000/movies?_start=0&_end=2`

`http://localhost:3000/movies?_start=0&_limit=2`

```json
[
    {
    "id": 1,
    "name": "城市猎人",
    "score": 9.9
    },
    {
    "id": 2,
    "name": "倚天屠龙记",
    "score": 9.8
    }
]	
```



`更加细致的过滤条件`

`（1）采用 _gte  _lte 来设置一个取值范围`

`http://localhost:3000/movies?id_gte=5&id_lte=9`

```json
[
    {
    "id": 5,
    "name": "整蛊专家2",
    "score": 10.1
    },
    {
    "id": 6,
    "name": "整蛊专家3",
    "score": 9.1
    },
    {
    "id": 7,
    "name": "整蛊专家4",
    "score": 9.6
    },
    {
    "id": 8,
    "name": "整蛊专家5",
    "score": 9
    },
    {
    "id": 9,
    "name": "整蛊专家6",
    "score": 9.1
    }
]	
```



`(2)采用_ne来设置不包含某个值`

`http://localhost:3000/movies?id_ne=1&id_ne=2&id_ne=3`

```json
[
    {
    "id": 4,
    "name": "整蛊专家1",
    "score": 10
    },
    {
    "id": 5,
    "name": "整蛊专家2",
    "score": 10.1
    },
    {
    "id": 6,
    "name": "整蛊专家3",
    "score": 9.1
    },
    {
    "id": 7,
    "name": "整蛊专家4",
    "score": 9.6
    },
    {
    "id": 8,
    "name": "整蛊专家5",
    "score": 9
    },
    {
    "id": 9,
    "name": "整蛊专家6",
    "score": 9.1
    }
]
```



`(3)采用`_like`来设置匹配某个字符串`

`http://localhost:3000/movies?score_like=9`

```json
[
    {
    "id": 1,
    "name": "城市猎人",
    "score": 9.9
    },
    {
    "id": 2,
    "name": "倚天屠龙记",
    "score": 9.8
    },
    {
    "id": 6,
    "name": "整蛊专家3",
    "score": 9.1
    },
    {
    "id": 7,
    "name": "整蛊专家4",
    "score": 9.6
    },
    {
    "id": 8,
    "name": "整蛊专家5",
    "score": 9
    },
    {
    "id": 9,
    "name": "整蛊专家6",
    "score": 9.1
    }
]
```



修改数据

```json
{
  "movies": [
    {
      "id": 1,
      "name": "城市猎人",
      "score": 9.9
    },
    {
      "id": 2,
      "name": "倚天屠龙记",
      "score": 9.8
    },
    {
      "id": 3,
      "name": "整蛊专家",
      "score": 10.0
    },
    {
      "id": 4,
      "name": "整蛊专家1",
      "score": 10.0
    },
    {
      "id": 5,
      "name": "整蛊专家2",
      "score": 10.1
    },
    {
      "id": 6,
      "name": "整蛊专家3",
      "score": 9.1
    },
    {
      "id": 7,
      "name": "整蛊专家4",
      "score": 9.6
    },
    {
      "id": 8,
      "name": "整蛊专家5",
      "score": 9.0
    },
    {
      "id": 9,
      "name": "整蛊专家6",
      "score": 9.1
    }
  ],
  "users": [
    {
      "name": {
        "username": "邱淑贞",
        "nickname": "goddess"
      },
      "password": "123456"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "邱淑贞女神真好看111",
      "movieId": 1
    },
    {
      "id": 2,
      "body": "邱淑贞女神真好看222",
      "movieId": 1
    },
    {
      "id": 3,
      "body": "邱淑贞女神真好看3333",
      "movieId": 5
    },
    {
      "id": 4,
      "body": "邱淑贞女神真好看4444",
      "movieId": 5
    }
  ]
}
```



`多表查询 向下关联  _embed   注意：一定要写复数`  

`http://localhost:3000/movies?_embed=comments`

```json
[
    {
    "id": 1,
    "name": "城市猎人",
    "score": 9.9,
    "comments": [
    {
    "id": 1,
    "body": "邱淑贞女神真好看111",
    "movieId": 1
    },
    {
    "id": 2,
    "body": "邱淑贞女神真好看222",
    "movieId": 1
    }
    ]
    },
    {
    "id": 2,
    "name": "倚天屠龙记",
    "score": 9.8,
    "comments": []
    },
    {
    "id": 3,
    "name": "整蛊专家",
    "score": 10,
    "comments": []
    },
    {
    "id": 4,
    "name": "整蛊专家1",
    "score": 10,
    "comments": []
    },
    {
    "id": 5,
    "name": "整蛊专家2",
    "score": 10.1,
    "comments": [
    {
    "id": 3,
    "body": "邱淑贞女神真好看3333",
    "movieId": 5
    },
    {
    "id": 4,
    "body": "邱淑贞女神真好看4444",
    "movieId": 5
    }
    ]
    },
    {
    "id": 6,
    "name": "整蛊专家3",
    "score": 9.1,
    "comments": []
    },
    {
    "id": 7,
    "name": "整蛊专家4",
    "score": 9.6,
    "comments": []
    },
    {
    "id": 8,
    "name": "整蛊专家5",
    "score": 9,
    "comments": []
    },
    {
    "id": 9,
    "name": "整蛊专家6",
    "score": 9.1,
    "comments": []
    }
]
```



`多表查询 向上关联  _expand   注意：一定要写单数`

`http://localhost:3000/comments?_expand=movie`

```json
[
    {
    "id": 1,
    "body": "邱淑贞女神真好看111",
    "movieId": 1,
    "movie": {
    "id": 1,
    "name": "城市猎人",
    "score": 9.9
    }
    },
    {
    "id": 2,
    "body": "邱淑贞女神真好看222",
    "movieId": 1,
    "movie": {
    "id": 1,
    "name": "城市猎人",
    "score": 9.9
    }
    },
    {
    "id": 3,
    "body": "邱淑贞女神真好看3333",
    "movieId": 5,
    "movie": {
    "id": 5,
    "name": "整蛊专家2",
    "score": 10.1
    }
    },
    {
    "id": 4,
    "body": "邱淑贞女神真好看4444",
    "movieId": 5,
    "movie": {
    "id": 5,
    "name": "整蛊专家2",
    "score": 10.1
    }
    }
]
```



使用axios测试

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <button id="btn">按钮</button>
    <script type="module" src="/main.js"></script>
  </body>
</html>


<script>
import axios  from "axios";

const btn = document.querySelector("#btn")

btn.addEventListener("click", function() {
  axios.get("http://localhost:3000/comments?_expand=movie").then(res => {
    console.log(res.data);
  })
})
</script>
```



#### 3.添加数据（POST）

```js
btn.addEventListener("click", function() {
  axios.post("http://localhost:3000/movies", {
    "name": "最佳损友",
    "score": 10.0
  }).then(res => {
    console.log(res.data);
  })
})
```

会将新添加的数据进行返回且id自增长

```
{name: '最佳损友', score: 10, id: 10}
```



#### 4.修改数据  (PUT / PATCH)

返回值为修改后的数据

```js
// put
// 修改数据 PUT
btn.addEventListener("click", function() {
  axios.put("http://localhost:3000/movies/10", {
    // "name": "最佳损友",
    "score": 9.9
  }).then(res => {
    console.log(res.data);
  })
})

// patch
btn.addEventListener("click", function() {
  axios.patch("http://localhost:3000/movies/10", {
    // "name": "最佳损友",
    "score": 9.9
  }).then(res => {
    console.log(res.data);
  })
})
```



#### 5.删除数据 (DELETE)

返回值为空

```js
// 删除数据 DELETE
btn.addEventListener("click", function() {
  axios.delete("http://localhost:3000/movies/10").then(res => {
    console.log(res.data);
  })
})
```





#### 6.静态资源部署

创建**json_sever_config.json**文件

```javascript
{
  "port": 3000,            
  "watch": true,           
  "static": "./public",
  "read-only": false, 
  "no-cors": true, 
  "no-gzip": false
}
```

`http://localhost:3000/images/py.png`



## Mock.JS

#### 1.环境搭建

- vue create mockdemo
-  npm install mockjs
- npm i axios

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


const Mock = require("mockjs")
console.log(Mock);
```



#### 2.Mock语法规范

Mock.js 的语法规范包括两部分：

1. 数据模板定义规范（Data Template Definition，DTD）
2. 数据占位符定义规范（Data Placeholder Definition，DPD)



##### 数据模板定义规范 DTD

**数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：**

```js
// 属性名   name
// 生成规则 rule
// 属性值   value
'name|rule': value
```

**注意：**

- *属性名* 和 *生成规则* 之间用竖线 `|` 分隔。
- *生成规则* 是可选的。
- *生成规则* 有 7 种格式：
  1. `'name|min-max': value`
  2. `'name|count': value`
  3. `'name|min-max.dmin-dmax': value`
  4. `'name|min-max.dcount': value`
  5. `'name|count.dmin-dmax': value`
  6. `'name|count.dcount': value`
  7. `'name|+step': value`
- **生成规则 的 含义 需要依赖 属性值的类型 才能确定。**
- *属性值* 中可以含有 `@占位符`。
- *属性值* 还指定了最终值的初始值和类型。

**生成规则和示例：**

- 属性值是字符串 **String**

1. `'name|min-max': string`

   通过重复 `string` 生成一个字符串，重复次数大于等于 `min`，小于等于 `max`。

2. `'name|count': string`

   通过重复 `string` 生成一个字符串，重复次数等于 `count`。

   

- 属性值是数字 **Number**

1. `'name|+1': number`

   属性值自动加 1，初始值为 `number`。

2. `'name|min-max': number`

   生成一个大于等于 `min`、小于等于 `max` 的整数，属性值 `number` 只是用来确定类型。

3. `'name|min-max.dmin-dmax': number`

   生成一个浮点数，整数部分大于等于 `min`、小于等于 `max`，小数部分保留 `dmin` 到 `dmax` 位

```js
Mock.mock({
    'number1|1-100.1-10': 1,
    'number2|123.1-10': 1,
    'number3|123.3': 1,
    'number4|123.10': 1.123
})
// =>
{
    "number1": 12.92,
    "number2": 123.51,
    "number3": 123.777,
    "number4": 123.1231091814
}
```



-  属性值是布尔型 **Boolean**

1. `'name|1': boolean`

   随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。

2. `'name|min-max': value`

   随机生成一个布尔值，值为 `value` 的概率是 `min / (min + max)`，值为 `!value` 的概率是 `max / (min + max)`。

   

- 属性值是对象 **Object**

1. `'name|count': object`

   从属性值 `object` 中随机选取 `count` 个属性。

2. `'name|min-max': object`

   从属性值 `object` 中随机选取 `min` 到 `max` 个属性。

   

- 属性值是数组 **Array**

1. `'name|1': array`

   从属性值 `array` 中随机选取 1 个元素，作为最终值。

2. `'name|+1': array`

   从属性值 `array` 中顺序选取 1 个元素，作为最终值。

3. `'name|min-max': array`

   通过重复属性值 `array` 生成一个新数组，重复次数大于等于 `min`，小于等于 `max`。

4. `'name|count': array`

   通过重复属性值 `array` 生成一个新数组，重复次数为 `count`。

   

-  属性值是函数 **Function**

1. `'name': function`

   执行函数 `function`，取其返回值作为最终的属性值，函数的上下文为属性 `'name'` 所在的对象。

   

- 属性值是正则表达式 **RegExp**

1. `'name': regexp`

   根据正则表达式 `regexp` 反向生成可以匹配它的字符串。用于生成自定义格式的字符串

```js
Mock.mock({
    'regexp1': /[a-z][A-Z][0-9]/,
    'regexp2': /\w\W\s\S\d\D/,
    'regexp3': /\d{5,10}/
})
// =>
{
    "regexp1": "pJ7",
    "regexp2": "F)\fp1G",
    "regexp3": "561659409"
}
```



##### 数据占位符定义规范 DPD

*占位符* 只是在属性值字符串中占个位置，并不出现在最终的属性值中。

*占位符* 的格式为:

```js
@占位符
@占位符(参数 [, 参数])
```

**注意：**

1. 用 `@` 来标识其后的字符串是 *占位符*。
2. *占位符* 引用的是 `Mock.Random` 中的方法。
3. 通过 `Mock.Random.extend()` 来扩展自定义占位符。
4. *占位符* 也可以引用 *数据模板* 中的属性。
5. *占位符* 会优先引用 *数据模板* 中的属性。
6. *占位符* 支持 *相对路径* 和 *绝对路径*。

```js
Mock.mock({
    name: {
        first: '@email',
        middle: '@phone',
        last: '@LAST',
        full: '@first @middle @last'
    }
})
// =>
{
    "name": {
        "first": "111@qq.com",
        "middle": "17316601234",
        "last": "Lopez",
        "full": "Charles Brenda Lopez"
    }
}
```



#### 3.模拟GET请求

```js
import axios from "axios";
import Mock from "mockjs";
const Random = Mock.Random;

var { userdata } = Mock.mock({
  "userdata|1-10": [
    {
      "id|+1": 1,
      name: "@cname()",
      address: "@city(true)",
      email: "@email(163.com)"
    },
  ],
});

Mock.mock("/user/list", "get", () => {
  return {
    code: 200,
    message: "查询用户信息成功",
    data: userdata,
  };
});


var { newList } = Mock.mock({
  "newList|20-30": [
    {
      id: "@increment(1)",
      title: "@ctitle()",
      date: "@date(yyyy-MM-dd hh:mm:ss)",
      info: "@cparagraph(5,10)",
      avatar: Random.image('200x100', '#00405d', '#FFF', 'Mock.js'),
      pic: "@image('300x200')"
    },
  ],
});

Mock.mock("/api/movie", "get", () => {
  return {
    status: 200,
    message: "获取电影列表成功！",
    total: newList.length,
    data: newList,
  };
});

const btn = () => {
  axios.get("/api/movie").then((res) => {
    console.log(res.data);
  });
};
```



#### 4.模拟POST请求

```js
// 模拟post请求
let { newData } = Mock.mock({
  "newData|1-3": [
    {
      "company|1": ["CSDN", "阿里巴巴", "腾讯", "百度", "华为"],
      "companyDescription": "@cparagraph(4)",
      "logo": function () {
        return Random.image("36x36", "#d8d8d8", "#000", "png", "Logo");
      },
      "city|1": "长沙市岳麓区",
      "positionTitle|+1": [
        "Java开发工程师",
        "Python开发工程师",
        "前端开发工程师",
        "产品经理",
        "UI设计师",
        "IOS研发工程师",
        "安卓研发工程师",
      ],
      // 薪资
      "salaryRange|1": ["5k-8k", "10k-15k", "15k-20k"],
      // 工作年限
      "workTime|2-10": 2,
      // 招聘人数
      "recruitNumber|1-5": 1,
      // 学历
      "degree|1": ["本科", "硕士", "博士"],
      // 上架时间
      "launchTime": '@date("yyyy-MM-dd")',
      // 职位描述
      "jobDescription": "@word(20)",
    },
  ],
});

Mock.mock("/api/user", "post", (data) => {
  console.log(data);
  return {
    status: 200,
    message: "我是post请求",
    data: newData,
  };
});


const btn = () => {
  // axios.get("/api/movie").then((res) => {
  //   console.log(res.data);
  // });
  axios.post("/api/user", {name: "邱淑贞", age: 18}).then((res) => {
    console.log(res.data);
  });
};
```



#### 5.模拟PUT与DELETE（不常用）

```js
// 模拟 put 请求
Mock.mock("/api/user/put", "put", (data) => {
  return {
    status: 200,
    message: "我是put请求",
    data: data.body
  }
})

const btn2 = () => {
  axios.put("/api/user/put", {name: 222}).then(res => {
    console.log(res.data.data);
  })
}


// 模拟 delete 请求
Mock.mock(/\/api\/user/, "delete", () => {
   return {
    status: 200,
    message: "我是delete请求",
    data: 123
  }
})

const btn3 = () => {
  axios.delete("/api/user/10").then(res => {
    console.log(res.data);
  })
}
```

#### 6.配合fastmock使用，效率高高哦

`https://www.fastmock.site/#/`

## ApiFox

#### 1.环境搭建

- 下载、注册、登录即可
- 新建团队，新建项目

#### 2.简单介绍和基本使用

```js
{
    "email": "123@qq.com",
    "password": 123456
}

{
    "id": 1,
    "msg": "成功",
    "create_date": "2022-10-2",
    "update_date": "2022-10-3"
}

{
    "id": 1,
    "msg": "失败",
    "error_date": "2022-10-2"
}
```





