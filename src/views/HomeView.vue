<template>
  <div class="home">
    <div id="profile">
      <!-- <ProfileComponent /> -->
    </div>

  </div>
  <div class="top-row">
    <!-- <div class="left"></div>
    <div class="middle"></div>
    <div class="right"></div> -->
    <h1>Hi, I'm Adam</h1>
    <img src="../assets/adam_panda.jpg" alt="Profile Picture">
    
  </div>


  <div class="intro-p">
    <p>I'm a Computer Science student at Queen's University. In short, I have two main passions. Creating and computers.
      I enjoy pursuing both. Simultaneously.</p>
    <p>This has lead me to my passion for computer science and entrepreneurship.</p>
    <p>I've made this website to showcase myself, my skills, and my hobbies. Feel free to look around, check out my
      <span class="link" @click="open('portfolio')">portfolio</span> and <span class="link" @click="open('connect')">connect</span>.</p>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import ProfileComponent from '@/components/ProfileComponent.vue';
const router = useRouter();

function open(page) {
  router.push({ name: page });
}

</script>
<style scoped lang="scss">
#profile {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh;
  width: 100vw; */
}


.top-row {
  display: flex; // Enables a flex container
  justify-content: center; // Centers the entire top-row horizontally
  align-items: center; // Aligns the children vertically
  flex-wrap: wrap; // Allows the content to wrap on smaller screens
  gap: 20px; // Adds consistent spacing between items

  .left,
  .middle,
  .right {
    flex: 1; // Each occupies equal space
    text-align: center; // Centers content inside each section
  }

  img {
    max-width: 200px; // Ensures the image size remains reasonable
    border-radius: 50%; // Makes the image circular
    margin: 0 20px; // Adds spacing around the image
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); // Adds a shadow for better appearance
  }

  h1 {
    margin: 0; // Removes default margin
    font-size: 2.5em; // Adjusts font size for better proportion
    color: #bfc0c2; // Matches your website's color scheme
  }
}

@media screen and (max-width: 768px) {
  .top-row {
    flex-direction: column; // Stacks items vertically
    align-items: center; // Centers the content on smaller screens

    img {
      margin-bottom: 20px; // Adds spacing between the image and h1
    }

    h1 {
      margin-bottom: 20px; // Adds space below the h1 on mobile
    }
  }
}

.intro-p {
  display: flex; // Enables flexbox
  justify-content: center; // Centers child elements horizontally
  align-items: center; // Centers child elements vertically
  text-align: center; // Centers text inside elements
  flex-direction: column; // Stacks child elements vertically
  width: 100%; // Makes the container span the full width of its parent

  p {
    max-width: 80%; // Limits the width of the paragraph
    font-size: 20px; // Sets a readable font size
    margin: 10px 0; // Adds vertical spacing (10px above and below each <p>)
  }
}

.welcome {
  display: flex;
  flex-direction: row;
}



</style>
