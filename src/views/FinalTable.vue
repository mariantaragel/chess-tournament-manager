/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
    <div>
        <PageHeader title="Current standings"/>
        <table>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Rating</th>
                <th>Points</th>
                <th>TB</th>
            </tr>
            <tr :key="player.id" v-for="player in players">
                <td>{{ player.id }}</td>
                <td>{{ player.name }}</td>
                <td>{{ player.surname }}</td>
                <td>{{ player.rating }}</td>
                <td>{{ player.points }}</td>
                <td>{{ player.tb }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import PageHeader from '../components/PageHeader'

export default {
    name: 'FinalTable',
    components: {
        PageHeader
    },
    methods: {
        async getTournament() {
            const res = await fetch(`http://127.0.0.1:3000/api/tournament/${this.$route.params.id}`)
            const data = await res.json()

            for (let index = 0; index < data.players.length; index++) {
                data.players[index].points = 0
                data.players[index].tb = 0
                data.players[index].opponets = []
            }

            for (let i = 0; i < data.matches.length; i++) {
                for (let j = 0; j < data.matches[i].pairs.length; j++) {
                    const match = data.matches[i].pairs[j]
                    if(match.result == "W") {
                        data.players[match.white].points++;
                        data.players[match.white].opponets[i] = match.black
                        data.players[match.black].opponets[i] = match.white
                    }
                    else if(match.result == "B") {
                        data.players[match.black].points++;
                        data.players[match.white].opponets[i] = match.black
                        data.players[match.black].opponets[i] = match.white
                    }
                    else if(match.result == "=") {
                        data.players[match.white].points += 0.5;
                        data.players[match.black].points += 0.5;
                        data.players[match.white].opponets[i] = match.black
                        data.players[match.black].opponets[i] = match.white
                    }
                }
            }

            for (let i = 0; i < data.players.length; i++) {
                for (let j = 0; j < data.matches.length; j++) {
                    data.players[i].tb += data.players[data.players[i].opponets[j]].points
                }
            }

            data.players.sort((a, b) => (a.points < b.points) ? 1 : -1)
            
            for (let index = 0; index < data.players.length; index++) {
                data.players[index].id = index + 1
            }
            
            return data
        }
    },
    data() {
        return {
            players: Array
        }
    },
    async created() {
        const data = await this.getTournament()
        this.players = data.players
    }
}
</script>

<style scoped>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border: 1px solid #D9D9D9;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(1) {
        background-color: #D9D9D9;
    }
</style>