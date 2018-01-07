# 2018start

> A Vue.js project
## 安装scss
``` bash
# npm install node-sass --save-dev
# npm install sass-loader --save-dev
```

## 安装axios
``` 安装方式
cnpm install axios -S
1:首先在 main.js 中引入 axios,
将 axios 改写为 Vue 的原型属性,
Vue.prototype.$ajax = axios,
methods: {
  submitForm () {
    this.$ajax({
      method: 'post',
      url: '/user',
      data: {
        name: 'wise',
        info: 'wrong'
      }
   })
}
2:在 Vuex 中封装
// store.js
import Vue from 'Vue'
import Vuex from 'vuex'

// 引入 axios
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    test01: {
      name: 'Wise Wrong'
    },
    test02: {
      tell: '12312345678'
    }
  },
  actions: {
    // 封装一个 ajax 方法
    saveForm (context) {
      axios({
        method: 'post',
        url: '/user',
        data: context.state.test02
      })
    }
  }
})

export default store
    

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).





