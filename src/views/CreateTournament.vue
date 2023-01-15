/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
  <div>
    <Page-header class="center" title="Create tournament" text="Default text"/>
    <div class="container">
      <form @submit="onSubmit">
        <label><strong>Tournament name: </strong></label>
        <input type="text" name="name" v-model="name" placeholder="Name of your tournament"/><br/>

        <label><strong>Type of tournament:</strong></label><br/>
        <input type="radio" id="swiss" name="pairing" v-model="pairing" value="Swiss" />
        <label class="margin" for="swiss">Swiss</label>
        <input type="radio" id="roundrobin" name="pairing" v-model="pairing" value="Round-robin" />
        <label class="margin" for="roundrobin">Round-robin</label>
        <input type="radio" id="knockoff" name="pairing" v-model="pairing" value="Knock Off" />
        <label class="margin" for="knock off">Knock Off</label><br/>
        
        <label><strong>Number of rounds: </strong></label>
        <input type="number" name="rounds" v-model="rounds.count"/><br/>

        <label><strong>Date & time: </strong></label>
        <input type="datetime-local" name="date" v-model="date"/><br/>
        <input class="btn" type="submit" value="Save"/>
      </form>
    </div>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader';

export default {
  name: 'CreateTournament',
  components: {
    PageHeader
  },
  data() {
    return {
      name: '',
      rounds: {
        count: 0,
        gameLength: 30,
        breakLength: 10
      },
      pairing: '',
      date: '',
      players: [],
      matches: {}
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()

      if (!this.name) {
        alert('Please add tournament name')
        return
      }

      if (this.rounds.count <= 0) {
        alert('Tournament must have at least 1 round')
        return
      }

      if (this.pairing == '') {
        alert('Select tournament type')
        return
      }

      const newTournament = {
        name: this.name,
        rounds: {
          count: this.rounds.count,
          gameLength: 30,
          breakLength: 10
        },
        pairing: this.pairing,
        date: Date.parse(this.date),
        players: [],
        matches: {}
      }

      const res = await fetch('http://127.0.0.1:3000/api/tournament', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newTournament),
      })

      const data = await res.json()

      this.name = ''
      this.rounds = 0
      this.pairing = ''
      this.date = ''

      this.$router.push({ path: '/' });
    }
  }
}
</script>

<style scoped>

  .container {
    border: 1px solid #636E72;
    border-radius: 10px;
    width: 500px;
    margin: auto;
    padding: 10px;
    text-align: center;
  }

  .btn {
    display: inline-block;
    background: #7FD1AE;
    border: none;
    padding: 0.5em 2em;
    margin: 0.3em;
    cursor: pointer;
    text-decoration: none;
    font-size: 18px;
    border-radius: 10px;
  }

  input[type=text] {
    color: #636E72;
    padding: 12px 20px;
    margin: 8px 0px;
    box-sizing: border-box;
    border: 1px solid #999;
    border-radius: 12px;
  }

  input[type=datetime-local] {
    color: #636E72;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid #999;
    border-radius: 12px;
  }

  input[type=number] {
    width: 100px;
    color: #636E72;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid #999;
    border-radius: 12px;
  }

  input[type=radio] {
    appearance: none;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    outline: 2px solid #999;
    margin: 5px;
    position: relative;
    top: 6px;
  }

  input[type=radio]:checked {
    outline: 2px solid #999;
    border: 3px solid white;
    background: black;
  }

  p {
    text-align: end;
    color: #FF5A79;
  }
  
  .margin {
    margin: 5px;
    margin-right: 30px;
  }

  nav {
    text-align: center;
    margin: 15px;
    font-size: 20px;
  }

  .main {
    color: #0984E3;
  }

  .router {
    text-decoration: none;
  }

  .router:hover {
    text-decoration: underline;
  }

  .center {
    text-align: center;
  }
</style>