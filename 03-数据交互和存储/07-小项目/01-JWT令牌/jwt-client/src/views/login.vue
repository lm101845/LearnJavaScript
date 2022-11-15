<template>
  <div class="login-wrapper">
    <div class="title-wrapper">
      <h1 class="title">登录</h1>
    </div>
    <div class="form-wrapper">
      <el-form ref="formRef" :model="formData" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="formData.password" ></el-input>
        </el-form-item>
        <el-form-item class="btn-item">
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      const { username, password } = this.formData

      const tokenResult = await axios.post('/token', {
        username,
        password
      })

      const errCode = tokenResult.data.errCode

      if (errCode === 10001) {
        this.$message.error('用户名或密码错误')
        return
      }

      localStorage.setItem('token', tokenResult.data.token)

      this.$router.push('/list')
      this.$message.success('登录成功')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-wrapper {
    width: 100%;

    .title {
      margin-left: 50px;
    }
  }

  .form-wrapper {
    width: 100%;

    .btn-item::v-deep .el-form-item__content {
      margin-left: 50px !important;
    }
  }
}
</style>