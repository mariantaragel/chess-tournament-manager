/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
  <div>
    <div class="flex">
      <PageHeader title="My tournaments" text="Default text"/>
      <Button @click="onClick()" title="Create" text="tournament" color="#7FD1AE" />
    </div>
    <Tournaments />
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import Tournaments from '../components/Tournaments'
import Button from '../components/ButtonTwoLines'

export default {
  name: 'TorunamentsView',
  components: {
    PageHeader,
    Tournaments,
    Button,
  },
  methods: {
    onClick() {
      this.$router.push({ path: '/createTournament' });
    }
  }
}
</script>

<style scoped>
  .flex {
    display: flex;
    justify-content: space-between;
    margin: 0em 2em;
  }
</style>