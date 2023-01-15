/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
    <div>
        <ul>
            <li>No.</li>
            <li>Name</li>
            <li>Surname</li>
            <li>Rating</li>
            <li><br></li>
        </ul>
        <div :key="player.id" v-for="player in players">
            <Player @delete-player="$emit('delete-player', player.id)" :player="player"/>
        </div>
    </div>
</template>

<script>
import Player from './Player'

export default {
    name: 'Players',
    props: {
        players: Array,
    },
    components: {
        Player
    },
    emits: ['delete-player'],
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0px;
        padding: 10px 20px 0px 20px;
        border-bottom: 1px solid #636E72;
    }

    ul li {
        color: #0984E3;
        display: inline-block;
    }

    li:nth-child(1) {
        width: 5%;
    }
    li:nth-child(2) {
        width: 30%;
    }
    li:nth-child(3) {
        width: 30%;
    }
    li:nth-child(4) {
        width: 20%;
    }
    li:nth-child(5) {
        width: 15%;
    }
</style>