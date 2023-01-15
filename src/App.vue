/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
  <div>
    <Header title='Chess Tournament Manager'/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
import Button from './components/Button'

export default {
  components: {
     Header,
     Button
   },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu');
 
 * {
   font-family: 'Ubuntu', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #2D3436;
   margin: 0px;
   padding: 0px;
 }
</style>
