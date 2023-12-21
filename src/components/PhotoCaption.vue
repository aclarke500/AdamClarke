<template>
  <div class="container">
    <div class="img-container">
      <img :src="props.path" alt="Verus">
      <figcaption>{{ caption }}</figcaption> <!-- Caption for the image -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Define props with their types and default values
const props = defineProps({
  path: String,
  caption: String
})

// You don't need to make a reactive state for the props
// You can directly use props.path and props.caption in your template

// If you want to have a local reactive state that reacts to prop changes, you can use a watchEffect or computed
// However, for just displaying the values, using them directly is sufficient

console.log(props.path)
</script>


<style scoped>
.container {
  text-align: center; /* Center align the container contents */
}

.img-container {
  display: inline-block; /* Wrap the container around the content */
  margin: 0 auto; /* Center the container */
}

.img-container img {
  width: 400px;  /* Or the width of your choice */
  height: 400px; /* Or the height of your choice, ensure it's a square for a circle crop */
  border-radius: 10%; /* Makes the image round */
  object-fit: cover; /* This will cover the area with the image without stretching it */
  object-position: 50% 0%; /* Adjust this if you need to focus on a different part of the image */
}

figcaption {
  color: #333; /* Caption text color */
  font-size: 0.9em; /* Caption text size */
  margin-top: 8px; /* Space between image and caption */
}
</style>
