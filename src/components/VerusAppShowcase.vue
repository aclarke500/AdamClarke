<template>
<p>Verus is a full stack application I have been developing since May 2022. In order to build Verus, I first taught myself web development with Vue. Throughout developing and refactoring this application, I have gained invaluable insight into the intricacies of software development, the importance of design patterns, and the grace of modular code and abstraction. </p>
<p>What sets this apart from internships, school and general computer science experience, is the creativity and scope of the work. In order to make the app usauble, I had to consider the end user, the data, as well as the development cycle. Unlike school where the project is laid out, or in an internship where I have a manager, I was thrown into the deep end and in charge of everything. </p>

<PhotoCaption  :path="../assets/Adam2.png" :caption="test123" />
</template>
<script setup>
import PhotoCaption from './PhotoCaption.vue';
</script>

<style scoped>
p {
  text-align: left; /* Align text to the left */
  font-size: 20px;
  /* width: auto; /* Set width to 100% to span the full container width */
  max-width: 80%; /* Optional: Set a maximum width for better reading experience */
  margin: 0 auto; /* Optional: This will center the paragraph block if it's narrower than the container */
  padding: 5px;
  
}

/* Optionally add a class for the content area if you want more control */
.content-area {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align children to the start (left) */
  width: 80%; /* Take up full width of the parent container */
}</style>