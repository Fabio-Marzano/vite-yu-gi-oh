import { reactive } from 'vue'

export const store = reactive({
    cardsList: [],
    numOfCards: 10,
    offsetNum: 0,
    archetypes: ['Alien', 'Laval', 'Vylon', 'Inzektor', 'Umi', 'Gusto'],
    activeArchetype: undefined,
})