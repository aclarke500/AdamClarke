<template>
 <div class="container">
    <div class="header">
      <h1 class="title">Hi, I'm Adam</h1>
      <div class="photo">
        <img src="../assets/Adam4.png" alt="Adam">
      </div>
    </div>
    <ProfileText id="profile-text" />
  </div>
</template>
<script setup>
import ProfileText from '@/components/ProfileText.vue';
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #322684;
  /* height: 50vh; */
  max-width: 80%;
  border: 3px solid #000000;
  padding-bottom: 2rem;
}

.header {
  display: flex;
  align-items: center;
}
.tab{
  width:5px;
}

.title {
  width: auto; /* Fixed width for the text container */
  padding-right: 20px; /* Spacing between text and image */
}

.photo {
  flex-grow: 1; /* Allow the image container to take up remaining space */
  display: flex;
  justify-content: flex-end; /* Align the image to the right */
  padding: 5px; 

}

.photo img {
  width: auto;
  height: 10rem;
  border-radius: 50%;
  border: 3px solid #5e788f;
  object-fit: cover; /* This will cover the area with the image without stretching it */
  object-position: 0% 0%; /* Adjust this if you need to focus on a different part of the image */

}

#profile-text{
  max-width: 400px;
}

</style>
