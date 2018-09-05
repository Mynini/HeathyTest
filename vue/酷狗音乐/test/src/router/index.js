import Vue from 'vue'
import Router from 'vue-router'

import Test from '@/view/test/test'
import Search from '@/view/search/search'

import { routers } from "./routers"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    ...routers,
    {
      path: '/test',
      name: 'Test',
      component: Test
    },


    {
      path: '/search',
      name: 'Search',
      components: {
        //nav: SearchBar,
        default: Search
      }
    },

  ]
})
