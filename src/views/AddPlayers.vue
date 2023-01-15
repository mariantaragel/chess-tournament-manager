/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
    <div class="style">
        <AddPlayer @add-player="addPlayer"/>
        <Players @delete-player="deletePlayer" :players="players" />
        <Button style="margin: 1em" @click="onSave" color="#C2F0F4" text="Save & continue" />
    </div>
</template>

<script>
import Players from '../components/Players'
import Button from '../components/Button'
import AddPlayer from '../components/AddPlayer'

export default {
  name: 'AddPlayers',
  components: {
      Players,
      Button,
      AddPlayer
  },
  data() {
    return {
        players: []
    }
  },
  methods: {
  addPlayer(player){
    player.id = this.players.length + 1
    this.players = [...this.players, player]
  },
  deletePlayer(id) {
    this.players = this.players.filter((player) => player.id !== id)
    for (let index = 0; index < this.players.length; index++) {
      this.players[index].id = index + 1;
    }
  },
  async onSave() {
    let tournament = await this.fetchTournament(this.$route.params.id)
    tournament.players = this.players
    
    const res = await fetch(`http://127.0.0.1:3000/api/tournament/${this.$route.params.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(tournament),
    })

    const data = await res.json()

    this.players = []

    this.$router.push({ path: '/'});
  },
  async fetchTournament(id) {
          const res = await fetch(`http://127.0.0.1:3000/api/tournament/${id}`)

          const data = await res.json()

          return data
      },
  },
  async created() {
      let data = await this.fetchTournament(this.$route.params.id)
      for (let index = 0; index < data.players.length; index++) {
        data.players[index].id = index + 1;
      }
      this.players = data.players
  }
}
</script>

<style scoped>
  .style {
    text-align: center;
  }
</style>
  