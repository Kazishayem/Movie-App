<script setup>
import { onMounted } from 'vue';
import { useMovieStore } from '../stores/movie';
import { useRoute } from 'vue-router';


const movieStore = useMovieStore();
const route = useRoute();

onMounted(() => {
    movieStore.getSingleMovies(route.params.id);
})

</script>


<template>
    <div class="detail">

        <h3>{{ movieStore.singleMovie.Title }}</h3>
        <p> {{ movieStore.singleMovie.Year }}</p>
        <img :src="movieStore.singleMovie.Poster" alt="" class="movie-image">
        <p>{{ movieStore.singleMovie.Plot }}</p>

    </div>
</template>

<style lang="scss">


.detail{
    padding: 16px;

    h3{
        color: #fff;
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 16px;
    }

.movie-image{

    display: block;
    max-width: 200px;
    margin-bottom: 16px;

}

p{
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
}

}



</style>
