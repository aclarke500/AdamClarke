<template>
  <h3>{{ props.name }}</h3>
  <img :src="props.photoUrl" alt="Profile photo" />

</template>

<script setup>
const props = defineProps({
  name: String,
  photoUrl: String,
})
</script>

<style scoped>
</style>