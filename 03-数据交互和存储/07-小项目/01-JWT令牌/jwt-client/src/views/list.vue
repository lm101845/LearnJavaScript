<template>
  <div class="home">
    <el-button type="primary" @click="getContent">获取文章内容</el-button>
    <el-button type="primary" @click="addContent">新增文章内容</el-button>

    <h1>{{ result }}</h1>
  </div>
</template>

<script>
import axios from 'axios'
import { Base64 } from 'js-base64'

export default {
  data() {
    return {
      result: ''
    }
  },
  methods: {
    async getContent() {
      const result = await axios.get('/content')
      this.result = result.data
    },
    async addContent() {
      const result = await axios({
        url: '/content', 
        method: 'post',
        headers: {'Authorization': this._encode()},
      })
      this.result = result.data
    },
    _encode() {
      const token = localStorage.getItem('token')
      const encoded = Base64.encode(token + ':')
      return `Basic ${encoded}`
    }
  }
}
</script>