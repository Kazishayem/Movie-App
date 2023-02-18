<script setup>

</script>

<template>
  <header>

    <router-link :to="{ name: 'home' }">

      <h1>Movies <span>App</span></h1>

    </router-link>

  </header>

  <main> 

    <router-view></router-view>

  </main>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,400;0,500;0,700;1,600&family=Ubuntu:wght@400;500;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;


  &::selection{
    background: transparentize($color: #34d399, $amount: 0.5);
  }
}

body{
  background-color: #4b5563;
}
a{
  text-decoration: none;
}

header{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #1E293B;
  box-shadow: 0px 0px 6px rgba($color: #000000, $alpha: 0.1);

  h1{

    color: #fff;
    font-size: 28px;
    span{
      color: #34d399;
    }


  }
}





</style>
