/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
    <div>
        <ul>
            <li>Board</li>
            <li>White</li>
            <li>Result</li>
            <li>Black</li>
        </ul>
        <div :key="match.id" v-for="match in matches">
            <Match :tournament="tournament" @res-match="resMatch" :match="match"/>
        </div>
    </div>
</template>

<script>
import Match from '../components/Match'

export default {
    name: 'Matches',
    components: {
        Match
    },
    props: {
        matches: Object,
        tournament: Object
    },
    methods: {
        resMatch(match) {
            const elem = this.matches.find(elem => (elem.white === match.white && elem.black === match.black))
            let index = this.matches.indexOf(elem)
            this.matches[index] = match
            this.$emit('res-matches', this.matches)
        }
    },
    data() {
        return {
            match: 0
        }
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0px;
        padding: 0px 20px 0px 20px;
        border-bottom: 1px solid #636E72;
    }

    ul li {
        color: #0984E3;
        display: inline-block;
    }

    li:nth-child(1) {
        width: 25%;
    }
    li:nth-child(2) {
        width: 25%;
    }
    li:nth-child(3) {
        width: 25%;
    }
    li:nth-child(4) {
        width: 25%;
    }
</style>