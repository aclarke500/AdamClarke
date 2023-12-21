<template>

  <h1>Connect with me!</h1>
  <p>I'm always excited to discuss new oppurtunites and ideas with people. Feel free to get connected on social media</p>
  <div class="social-links">
    <div class="link-item">
      <a href="https://www.linkedin.com/in/adam-clarke-a5b83b207/" target="_blank" class="icon linkedin" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <span class="link-text">LinkedIn</span>
    </div>
    <div class="link-item">
      <a href="https://github.com/aclarke500" target="_blank" class="icon github" aria-label="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <span class="link-text">GitHub</span>
    </div>
    <div class="link-item">
      <a href="https://instagram.com/adam_500c" target="_blank" class="icon instagram" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <span class="link-text">Instagram</span>
    </div>
  </div>
  <p>Or email me at: <div id="underline">aclarke500@gmail.com</div></p>
</template>

<script setup>

</script>

<style scoped>
.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}
#underline{
  display: inline;
  text-decoration: underline;
}

.link-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  font-size: 2em; /* Icon size */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff; /* Icon color */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
}

.icon:hover {
  transform: scale(1.1); /* Slightly enlarge icons on hover */
}

.link-text {
  font-size: 0.9em;
  color: #fff; /* Text color */
  margin-top: 4px;
}

/* Specific styles for different social media icons */
.linkedin {
  background-color: #0077b5;
}

.github {
  background-color: #333;
}

.email {
  background-color: #d44638;
}

.instagram {
  background-color: #E1306C;
}

/* Include font-awesome icons */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css');
</style>
