<template>
  <div class="container">
    <div class="img-container">
      <img src="../assets/verusss1.png" alt="Verus">
      <figcaption>This is the screen where users do their billing, replacing the 1000 page rule book that is the industry standard.</figcaption> <!-- Caption for the image -->
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
  width: 50%;  /* Or the width of your choice */
  height: 50%; /* Or the height of your choice, ensure it's a square for a circle crop */
  border-radius: 10%; /* Makes the image round */
  border: 3px solid #a519cf;
  
  
}

</style>
