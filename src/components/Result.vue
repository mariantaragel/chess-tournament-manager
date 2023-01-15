/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
    <form>
        <select v-model="result" name="res">
            <option @click="white" value="W">1 : 0</option>
            <option @click="draw" value="=">½ : ½</option>
            <option @click="black" value="B">0 : 1</option>
        </select>
    </form>
</template>

<script>
import Button from './Button'

export default {
    components: { Button },
    name: 'Result',
    props: {
        res: String
    },
    data() {
        return {
            result: String
        }
    },
    methods: {
        white() {
            this.$emit('result', 'W')
        },
        draw() {
            this.$emit('result', '=')
        },
        black() {
            this.$emit('result', 'B')
        }
    },
    created() {
        this.result = this.res
    }
} 
</script>
