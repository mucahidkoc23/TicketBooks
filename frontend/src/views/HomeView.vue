<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<template lang="pug">
  .home
    HelloWorld(msg="Welcome to Your App")
</template>
