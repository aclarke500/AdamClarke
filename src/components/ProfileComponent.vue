<template>
 <div class="container">
    <div class="header">
      <h1 class="title">Hi, I'm Adam</h1>
      <div class="photo">
        <img src="../assets/Adam2.png" alt="Adam">
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
  background-color: #f5f5f5;
  /* height: 50vh; */
  max-width: 500px;
  border: 3px solid #73AD21;
}

.header {
  display: flex;
  align-items: center;
}
.tab{
  width:5px;
}

.title {
  width: 250px; /* Fixed width for the text container */
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
  height: 250px;
  border-radius: 50%;
  border: 3px solid #288ae6;

}

#profile-text{
  max-width: 400px;
}

</style>
