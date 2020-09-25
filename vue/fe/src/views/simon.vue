<template>
  <div class="simon">
    <SimonGame />
  </div>
</template>


<script>
  // @ is an alias to /src
  //import Keyword from '@/components/Keyword.vue'
  import SimonGame from '@/components/simonGame.vue'

  export default {
    name: 'home',
    components: {
      // Keyword,
      SimonGame
    }
  }
</script>
