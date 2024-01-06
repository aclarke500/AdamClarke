<template>
  <div class="container">
    <div class="header">
      <img :src="props.data.photo" alt="runtimes" border="0">
      <h1 class="project-title">{{ props.data.title }}</h1>
    </div> 
    <p v-if="props.data.websiteUrl">Check it out <a id="site-link" :href="props.data.websiteUrl">here:</a></p>
    <p v-for="(entry, index) in props.data.description" :key="index">{{ entry }}</p>
    <!-- Wrap the GitHub icon with a div for centering -->
    <div v-if="props.data.githubUrl" class="icon-container">
      <a :href="props.data.githubUrl" target="_blank" class="icon github" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  data: Object
})



</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f0f0f;
  /* height: 50vh; */
  max-width: 40rem;
  border: 3px solid #686f5c;
  border-radius: 5px;
  padding: 5px;

}
.project-title{
  flex-grow: 1;
}
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.icon {
  font-size: 2em;
  /* Icon size */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  /* Icon color */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.1);
  /* Slightly enlarge icons on hover */
}
#site-link{
  color: #288ae6;
}
img{
  width: 12rem;
  height: 12rem;
  /* border-radius: 50%; */
  border: 3px solid #288ae6;
  object-fit: cover;
  object-position: 0% 0%;
  /* Adjust this if you need to focus on a different part of the image */
}
.icon-container {
  display: flex;
  justify-content: center;
  width: 100%; /* Full width to allow centering */
  margin-top: 1rem; /* Add some space above the icon */
}

/* ... rest of your styles ... */

.github {
  background-color: #333;
  margin: 1rem;
}


/* Include font-awesome icons */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css');
</style>