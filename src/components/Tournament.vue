/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
    <div class="container">
        <div class="space">
            <h3>{{ tournament.name }}</h3>
            <i style="color: red; cursor: pointer;" @click="onDelete(tournament.id)" class="fas fa-times"></i>
        </div>
        <p><i class="fa-solid fa-calendar-days"></i>{{ new Date(tournament.date).toLocaleString("sk-SK", { dateStyle: "medium", timeStyle: "short" }) }}</p>
        <p><i class="fa-solid fa-users"></i>{{ tournament.players.length }} players</p>
        <p><i class="fa-solid fa-chess"></i>{{ tournament.rounds.count }} rounds, {{ tournament.pairing }}</p>
        <div class="space">
            <Button @click="onResults(tournament)" text="Add results" color="#C2F0F4" />
            <Button @click="onEdit(tournament)" text="Edit players" color="#C2F0F4" />
        </div>
    </div>
</template>

<script>
import Button from './Button'

export default {
    name: 'Tournament',
    components: {
        Button,
    },
    props: {
        tournament: {
            type: Object
        }
    },
    methods: {
        onDelete(tournament) {
            this.$emit('delete-tournament', tournament)
        },
        onEdit(tournament) {
            this.$emit('edit-tournament', tournament)
        },
        onResults(tournament){
            this.$emit('results-tournament', tournament)
        }
    }
}
</script>

<style scoped>
    .container {
        width: 300px;
        border: 1px solid #636E72;
        padding: 1em;
        border-radius: 5px;
    }

    .container i {
        width: 20px;
        text-align: center;
        margin: 5px;
    }

    .space {
        display: flex;
        justify-content: space-between;
    }
</style>