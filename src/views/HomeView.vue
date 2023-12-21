<template>
  <div class="home">
    <div id="profile">
      <ProfileComponent />
    </div>

  </div>
</template>

<script setup>
// @ is an alias to /src
import ProfileComponent from '@/components/ProfileComponent.vue';

</script>
<style scoped>
#profile{
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh;
  width: 100vw; */
}
</style>
