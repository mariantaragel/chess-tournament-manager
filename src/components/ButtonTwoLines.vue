/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
    <button :style="{ background: color }" class="btn">{{ title }}<br>{{ text }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        title: String,
        text: String,
        color: String,
    },
}
</script>

<style scoped>
    .btn {
        display: inline-block;
        background: black;
        color: #2D3436;
        border: none;
        padding: 0.5em 1em;
        margin: 0.5em;
        cursor: pointer;
        text-decoration: none;
        font-size: 15px;
        border-radius: 10px;
    }
</style>