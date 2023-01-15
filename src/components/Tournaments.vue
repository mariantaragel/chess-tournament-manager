/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
    <div class="grid">
        <div :key="tournament.id" v-for="tournament in tournaments">
            <Tournament @results-tournament="resultsTournament" @edit-tournament="editTournament" @delete-tournament="deleteTournament" :tournament="tournament" />
        </div>
    </div>
</template>

<script>
import Tournament from './Tournament'

export default {
    name: 'Tournaments',
    components: {
        Tournament
    },
    methods: {
        async fetchTournaments() {
            const res = await fetch('http://127.0.0.1:3000/api/tournaments')

            const data = await res.json()

            return data
        },
        async deleteTournament(tournament) {
            if(confirm('Are you sure?')) {
                const res = await fetch(`http://127.0.0.1:3000/api/tournament/${tournament}`, {
                    method: "DELETE"
                })

                const data = await res.json()

                this.tournaments = await this.fetchTournaments()
            }
        },
        editTournament(tournament) {
            this.$router.push({ path: `/addPlayers/${tournament.id}`});
        },
        resultsTournament(tournament) {
            this.$router.push({ path: `/addResults/${tournament.id}`});
        },
    },
    data() {
        return {
            tournaments: []
        }
    },
    async created() {
        this.tournaments = await this.fetchTournaments()
    }
}
</script>

<style scoped>
    .grid {
        display: flex;
        flex-flow: row wrap;
        margin-left: 2em;
        row-gap: 2em;
        column-gap: 3.8em;
    }
</style>