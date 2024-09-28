<template>
  <div class="content-area">
      <p>I'm a Computer Science student at Queen's University. In short, I have two main passions. Creating and computers. I enjoy pursuing both. Simultaneously.</p>
      <p> This has lead me to my passion for computer science and entrepreneurship.  </p>
      <p>I've made this website to showcase myself, my skills, and my hobbies. Feel free to look around, check out my portfolios and connect!</p>
    </div>
</template>

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
}
</style>
