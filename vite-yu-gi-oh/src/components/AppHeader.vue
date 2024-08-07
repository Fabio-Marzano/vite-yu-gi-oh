<script>
export default {
    name: 'AppHeader',
}
</script>


<template>
    <header class="d-flex al-center">
        <div class="img-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg" alt="logo">
        </div>
        <h1>Yu-Gi-Oh Api</h1>
    </header>
</template>


<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

header {
    background-color: $secondary--text-color;
    color: $primary--text-color;
    padding: 1rem 0;

    .img-container {
        padding: 0 1.5rem;

        img {
            width: 50px;
        }
    }

    h1 {
        font-weight: normal;
        font-size: 2.5rem;
    }
}
</style>