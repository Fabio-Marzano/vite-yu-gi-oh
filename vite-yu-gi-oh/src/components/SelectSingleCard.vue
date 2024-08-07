<script>
import { store } from './../../store';

export default {
    name: 'SingleCard',

    data() {
        return {
            store,
        }
    },

    props: {
        cardId: Number,
        imgUrl: String,
        imgId: Number,
        cardName: String,
        cardArchetype: String,
    }
}
</script>


<template>
    <article :data-custom-id="cardId">
        <div class="img-container">
            <img :src="imgUrl" :alt="cardName" :data-id-custom="imgId" :title="cardName">
        </div>
        <div class="card-info">
            <h4 class="card-name">{{ cardName }}</h4>
            <div class="card-archetype" title="Archetipo della carta">{{ (cardArchetype) ? cardArchetype : 'La carta\
            non\
            ha un\
            archetipo' }}</div>
        </div>
    </article>
</template>


<style lang="scss">
@use '../../style/partials/variables' as *;



article {
    width: calc(100%/5 - 2rem);
    background-color: $primary--bg-color;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }

    &:active {
        filter: brightness(1.2);
    }

    .card-name {
        color: $secondary--text-color;
        text-transform: uppercase;

        &:hover {
            font-style: italic;
        }
    }

    .card-info>* {
        text-align: center;
        padding: 1rem;

        &.card-archetype {
            padding-bottom: 0.5rem;
            font-size: 1.2rem;

            &:hover {
                font-weight: bold;
            }
        }
    }
}
</style>