<template>
  <div class="login-container">
    <el-form label-width="80px">
      <h3 class="title">登录</h3>
      <el-form-item label="用户">
        <!-- <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span> -->
        <el-input v-model="form.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <!-- <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span> -->
        <el-input v-model="form.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <p>{{$store.state.count}}</p>
        <!-- <el-button type="primary" @click="onok">登录</el-button> -->
        <!-- <el-button>取消</el-button> -->
      </el-form-item>
     </el-form>
   </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit: function () {
      this.$ajax({
        method: 'post',
        url: '/user',
        data: {
          name: this.form.username,
          info: this.form.password
        }
      })
      .then(
        function (response) {
          console.log('response:', response)
          if (response.data.code === 200) {
            console.log(response.data)
            //获取数据存入vuex
            
            //数据存入cookie

          } else {
            // 由后端抛出的错误
            alert(response.data.message)
          }
        })
      .catch(
        function (error) {
          console.log('error:', error)
        }
      )
      console.log('store:', store.state.count)
      console.log('username', this.form.username)
      console.log('password', this.form.password)
    },
  }
}
</script>
<style lang="scss" scoped>
  .login-container{
    height: 100%;
    background-color:#d3dce6;
    position: relative;
    width: 100%;
    height: 100%;
    input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
    -webkit-text-fill-color: #fff !important;
    }
  }
  // el-form-item {

  // }
  input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: pink;
    height: 47px;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: pink;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: darkpink;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
</style>
