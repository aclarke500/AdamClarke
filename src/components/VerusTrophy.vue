<template>
  <div class="container">
    <div class="img-container">
      <img src="../assets/veruspitch2.jpeg" alt="Verus">
      <p>Vinicius and myself winning the Wisdom of the Market Award at the Annual Queen's Innovation Centre Pitch Competition</p> <!-- Caption for the image -->
    </div>
  </div>
</template>
<script setup>

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


</style>
