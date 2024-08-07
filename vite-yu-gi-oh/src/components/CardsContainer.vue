<script>
import SingleCard from './SingleCard.vue';
import AppLoader from './../other/AppLoader.vue';
import { store } from './../../store';


export default {
    name: 'CardsContainer',

    components: {
        SingleCard,
        AppLoader,
    },

    data() {
        return {
            store,
        }
    },
}
</script>


<template>
    <div v-if="store.cardsList.length === store.numOfCards" class="container">
        <div class="cards-number">Found {{ store.cardsList.length }}
            cards</div>
        <div class="cards-container d-flex wrap js-between">
            <SingleCard v-for="card in store.cardsList" :cardId="card.id" :imgUrl="card.card_images[0].image_url"
                :imgId="card.card_images[0].id" :cardArchetype="card.archetype" :cardName="card.name" />
        </div>
    </div>
    <AppLoader v-else />
</template>


<style lang="scss" scoped>
@use '../../style/partials/variables' as *;



.loader-container {
    text-align: center;
}

.container {
    background-color: $secondary--text-color;
    padding: 3.3rem;

    .cards-number {
        background-color: $primary--text-color;
        color: $secondary--text-color;
        padding: 1.5rem 1rem;
        font-weight: bold;
    }
}
</style>