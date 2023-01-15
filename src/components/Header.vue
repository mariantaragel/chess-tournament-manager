/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
    <header>
        <h1><i class="fas fa-chess-pawn"></i> {{title}}</h1>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
    },
}
</script>

<style scoped>
    header {
        text-align: center;
        background: #D9D9D9;
    }
</style>