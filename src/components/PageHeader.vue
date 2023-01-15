/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
    <header>
        <h2>{{ title }}</h2>
    </header>
</template>

<script>
import Header from './Header.vue'
export default {
  components: { Header },
    name: 'PageHeader',
    props: {
        title: String,
        text: String,
    },
}
</script>

<style scoped>
header {
    margin: 0.5em;
    margin-top: 1em;
}
</style>