import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movie', {
  state: () => ({

    search:ref(null),
    movies:ref([]),
    movieCount:ref(0)


  }),
  getters: {

    
 
  },
  actions:{

   async SearchMovies(){

     if(this.search !=""){
      const {data} =   await axios.get(`http://www.omdbapi.com/?apikey=2fe71553&s=${this.search}`);

      // console.log(data);

      this.movies = data.Search;
      this.movieCount =  data.totalResults;

      }

    }

  

  }
})
