import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _23263952 = () => interopDefault(import('..\\pages\\CreateTodo.vue' /* webpackChunkName: "pages/CreateTodo" */))
const _3ecc3582 = () => interopDefault(import('..\\pages\\GetAllTodos.vue' /* webpackChunkName: "pages/GetAllTodos" */))
const _2f258629 = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _3116013e = () => interopDefault(import('..\\pages\\MyTodos.vue' /* webpackChunkName: "pages/MyTodos" */))
const _74b09466 = () => interopDefault(import('..\\pages\\todos.vue' /* webpackChunkName: "pages/todos" */))
const _2006b41f = () => interopDefault(import('..\\pages\\UpdateTodo.vue' /* webpackChunkName: "pages/UpdateTodo" */))
const _23e8799c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CreateTodo",
    component: _23263952,
    name: "CreateTodo"
  }, {
    path: "/GetAllTodos",
    component: _3ecc3582,
    name: "GetAllTodos"
  }, {
    path: "/Login",
    component: _2f258629,
    name: "Login"
  }, {
    path: "/MyTodos",
    component: _3116013e,
    name: "MyTodos"
  }, {
    path: "/todos",
    component: _74b09466,
    name: "todos"
  }, {
    path: "/UpdateTodo",
    component: _2006b41f,
    name: "UpdateTodo"
  }, {
    path: "/",
    component: _23e8799c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
