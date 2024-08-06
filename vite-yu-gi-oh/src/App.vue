<script>
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';
import { store } from './store';
import axios from 'axios';


export default {
    components: {
        AppHeader,
        AppMain,
    },

    data() {
        return {
            apiUrl: `https://db.ygoprodeck.com/api/v7/cardinfo.php`,
            store,
        }
    },

    methods: {
        getCardInfo() {
            axios.get(this.apiUrl, {
                params: {
                    num: this.store.numOfCards,
                    offset: this.store.offsetNum,
                    archetype: this.store.activeArchetype,
                }
            })
                .then(response => {
                    this.store.cardsList = response.data.data;
                    console.log(response.data.data);
                })

                .catch(err => {
                    console.warn(err.message);
                })
        }
    },

    created() {
        this.getCardInfo();
    }
}
</script>


<template>
    <AppHeader />
    <AppMain @cardArchetypeSearch="getCardInfo" />
</template>


<style lang="scss">
@use './style/general.scss' as *;
</style>