<script>
import { store } from './../../store';
import CardsArchetypeSelectField from './CardsArchetypeSelectField.vue';
import CardsContainer from './CardsContainer.vue';


export default {
    name: 'AppMain',

    components: {
        CardsArchetypeSelectField,
        CardsContainer,
    },

    data() {
        return {
            store,
        }
    },
}
</script>


<template>
    <main @change="$emit('cardArchetypeSearch')">
        <div class="container" :class="(store.cardsList.length !== store.numOfCards) ? 'loader-container' : ''">
            <CardsArchetypeSelectField />
            <CardsContainer />
        </div>
    </main>
</template>


<style lang="scss" scoped>
@use '../../style/partials/variables' as *;



main {
    background-color: $primary--bg-color;

    >.container {
        padding: 1.7rem 8.2rem;
    }
}
</style>