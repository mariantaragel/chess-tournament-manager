/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
    <ul class="player">
        <li>{{ player.id }}.</li>
        <li>{{ player.name }}</li>
        <li>{{ player.surname }}</li>
        <li>{{ player.rating }}</li>
        <li><i @click="onDelete(player.id)" class="fas fa-times"></i></li>
    </ul>
</template>

<script>
export default {
    name: 'Player',
    props: {
        player: Object
    },
    methods: {
        onDelete(id) {
            this.$emit('delete-player', id)
        },
    },
}
</script>

<style scoped>
    .player {
        list-style-type: none;
        margin: 0px;
        padding: 10px 20px;
        border-bottom: 1px solid #636E72;
    }

    .player li {
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
        text-align: right;
    }

    .fas {
        color: red;
        cursor: pointer;
    }
</style>