/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
    <div>
        <PageHeader title="Results" text="Default text" />
        <div :key="round" v-for="(round, index) in r.matches">
            <h4>Round {{ index + 1 }}.</h4>
            <Matches :tournament="tournament" @res-matches="resRound" v-bind:matches="round.pairs" />
        </div>
        <div class="center">
            <Button style="margin-right: 10px;" @click="genPairs" text="Generate next round" color="#C2F0F4" />
            <Button @click="showStandings" text="Show standings" color="#C2F0F4" />
        </div>
    </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import Matches from '../components/Matches'
import Button from '../components/Button'

export default {
    name: 'addPlayers',
    components: {
        PageHeader,
        Matches,
        Button
    },
    methods: {
        async getMatches(id) {
            const res = await fetch(`http://127.0.0.1:3000/api/tournament/${id}`, {
                method: 'GET',
            })

            const data = await res.json()

            return data
        },
        async genMatches(id) {
            const res = await fetch(`http://127.0.0.1:3000/api/tournament/${id}/round`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' }
            })

            const data = await res.json()

            const r = await fetch(`http://127.0.0.1:3000/api/tournament/${id}`, {
                method: 'GET',
            })

            const d = await r.json()

            return d
        },
        async genPairs() {
            let data = await this.genMatches(this.$route.params.id)
            for (let i = 0; i < data.matches.length; i++) {
                data.matches[i].id = i + 1
                for (let j = 0; j < data.matches[i].pairs.length; j++) {
                    data.matches[i].pairs[j].id = j + 1
                }
            }
            this.r.matches = data.matches
        },
        async resRound(pairs) {
            const round = {
                pairs: pairs,
                finished: false
            }

            for (let i = 0; i < this.r.matches.length; i++) {
                this.r.matches[i].id = i + 1
                for (let j = 0; j < this.r.matches[i].pairs.length; j++) {
                    this.r.matches[i].pairs[j].id = j + 1
                }
            }

            const res = await fetch(`http://127.0.0.1:3000/api/tournament/${this.$route.params.id}/score`, {
                method: 'POST',
                headers: { 'content-type': 'application/json', },
                body: JSON.stringify(this.r),
            })

            const data = await res.json()
        },
        showStandings() {
            this.$router.push({ path: `/standings/${this.$route.params.id}` });
        }
    },
    data() {
        return {
            r:{
            matches: [{
                pairs: [{
                    id: 0,
                    white: '',
                    black: '',
                    result: '-'
                }],
                finished: false
            }]},
            tournament: {}
        }
    },
    async created() {
        let data = await this.getMatches(this.$route.params.id)
        for (let i = 0; i < data.matches.length; i++) {
            data.matches[i].id = i + 1
            for (let j = 0; j < data.matches[i].pairs.length; j++) {
                data.matches[i].pairs[j].id = j + 1
            }
        }
        this.tournament = data
        this.r.matches = data.matches
    }
}
</script>

<style scoped>
    .center {
        text-align: center;
        margin: 1em;
    }

    h4 {
        margin: 10px 0px 10px 10px;
    }
</style>