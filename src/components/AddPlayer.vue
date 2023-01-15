/**
 * ITU 2022 project
 *
 * Author: Marián Tarageľ (xtarag01)
 */

<template>
    <form @submit="onSubmit">
        <label><strong>Name: </strong></label>
        <input type="text" v-model="name" name="name" placeholder="Input name"/>
        <label><strong>Surname: </strong></label>
        <input type="text" v-model="surname" name="surname" placeholder="Input surname"/>
        <label><strong>Rating: </strong></label>
        <input type="number" v-model="rating" name="rating"/>
        <input class="btn" type="submit" value="Add player"/>
    </form>
</template>

<script>
export default {
    name: 'AddPlayer',
    data() {
        return {
            name: '',
            surname: '',
            rating: 0
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()

            if (this.name == '') {
                alert('Add player name')
                return
            }

            if (this.surname == '') {
                alert('Add player surname')
                return
            }

            const newPlayer = {
                name: this.name,
                surname: this.surname,
                rating: this.rating
            }

            this.$emit('add-player', newPlayer)

            this.name = ''
            this.surname = ''
            this.rating = 0
        },
    }
}
</script>

<style scoped>
    input[type=text] {
        color: #636E72;
        padding: 12px 20px;
        margin: 8px 10px 0px 0px;
        box-sizing: border-box;
        border: 1px solid #999;
        border-radius: 12px;
    }

    input[type=number] {
        width: 100px;
        color: #636E72;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 1px solid #999;
        border-radius: 12px;
    }

    .btn {
        display: inline-block;
        background: #7FD1AE;
        border: none;
        padding: 0.5em;
        margin: 1em;
        cursor: pointer;
        text-decoration: none;
        font-size: 15px;
        border-radius: 10px;
    }
</style>