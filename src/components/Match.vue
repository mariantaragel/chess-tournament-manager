/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
    <ul class="match">
        <li>{{ match.id }}.</li>
        <li>{{ tournament?.players[match.white].name }} {{ tournament?.players[match.white].surname }}</li>
        <li><Result :res="match.result" @result="result" /></li>
        <li>{{ tournament?.players[match.black].name }} {{ tournament?.players[match.black].surname }}</li>
    </ul>
</template>

<script>
import Result from '../components/Result'

export default {
    name: 'Match',
    props: {
        match: Object,
        tournament: Object
    },
    components: {
        Result
    },
    methods: {
        result(res) {
            const match = {
                white: this.match.white,
                black: this.match.black,
                result: res,
            }
            console.log(match)
            this.$emit('res-match', match)
        }
    }
}
</script>

<style scoped>
    .match {
        list-style-type: none;
        margin: 0px;
        padding: 10px 20px;
        border-bottom: 1px solid #636E72;
    }

    .match li {
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