/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

import { createRouter, createWebHistory } from 'vue-router'
import TournamentsView from '../views/TournamentsView.vue'

const routes = [
  {
    path: '/',
    name: 'TournamentsView',
    component: TournamentsView
  },
  {
    path: '/createTournament',
    name: 'createTournament',
    component: function () {
      return import('../views/CreateTournament.vue')
    }
  },
  {
    path: '/addPlayers/:id',
    name: 'addPlayers',
    component: function () {
      return import('../views/AddPlayers.vue')
    }
  },
  {
    path: '/addResults/:id',
    name: 'addResults',
    component: function () {
      return import('../views/AddResults.vue')
    }
  },
  {
    path: '/standings/:id',
    name: 'FinalTable',
    component: function () {
      return import('../views/FinalTable.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
