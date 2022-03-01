<template>
  login
  <form>
    账号: <input type="text" v-model="userInfo.username" /> <br />
    密码: <input type="password" v-model="userInfo.password" /> <br />
    <button type="button" @click="handleSubmit">提交</button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../store";
const router = useRouter();
const store = useStore();
console.log("store", store);

const userInfo = reactive({
  username: "",
  password: "",
});
const handleSubmit = async (): Promise<any> => {
  console.log("userInfo", userInfo);
  let res = await fetch(
    `/api/user/login?username=${userInfo.username}&password=${userInfo.password}`
  ).then((res) => res.json());
  console.log("res", res);
  if (res.code == 200) {
    store.setUserInfo(res.data.userInfo);
    store.setToken(res.data.token);
    router.push("/");
  } else {
    alert(res.msg);
  }
};
</script>
