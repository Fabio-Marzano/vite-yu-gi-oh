<script>
import { store } from './../../store';



export default {
    name: 'CardsArchetypeSelectField',

    data() {
        return {
            store,
        }
    },
}
</script>


<template>
    <select name="cards-archetype" id="cards-archetype" v-model="store.activeArchetype">
        <option :value="undefined">None</option>
        <option v-for="archetype in store.archetypes" :value="archetype">{{ archetype }}</option>
    </select>
</template>


<style lang="scss">
select {
    padding: 0.5rem;
    margin-bottom: 1.7rem;
    cursor: pointer;
}
</style>