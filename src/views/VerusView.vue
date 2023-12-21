<template>
<div class="container">
  <h1>Verus Automated Medical Billing</h1>
  <p>Verus Automated Medical Billing (Verus AMB) is a project I co-founded with Dr. Fabio Ynoe de Moraes and my best friend Vinicius Purgato out of my first year at Queen's. Feel free to check it out <div id="verus-link" @click="openVerus">here</div>.</p>
  <p>Verus aims to take the "ill" from medical bills to let doctors do what they were meant to do: take care of patients. </p>
  <p>Alongisde Vinicius, I designed, developed and implemented an innovative billing solution that automates physicain paperwork. We've recieved traction and are impmenting a pilot phase at Kingston General Hospital, as well as garnered interest from Sírio-Libanês all the way in Brazil. </p>
  <!-- <img src="../assets/veruspitch2.jpeg" alt="Verus"> -->
  <VerusTrophy />
  <VerusAppShowcase id="app-showcase"/>
  <p id="last-p">Working on Verus has been a very rewarding experience and has allowed me to bridge my knowledge of computer science and my creative personality in order to solve a novel problem.</p>
</div>
</template>

<script setup>
import VerusTrophy from '@/components/VerusTrophy.vue';
import VerusAppShowcase from '@/components/VerusAppShowcase.vue';

function openVerus(){
  window.open("https://www.verusamb.com/", "_blank");
}
</script>

<style scoped>
.container{
  margin-bottom: 1rem;
}
#last-p{
  margin-bottom: 3rem;
}
p {
  text-align: left; /* Align text to the left */
  font-size: 20px;
  /* width: auto; /* Set width to 100% to span the full container width */
  max-width: 80%; /* Optional: Set a maximum width for better reading experience */
  margin: 0 auto; /* Optional: This will center the paragraph block if it's narrower than the container */
  padding: 5px;
  
}

#verus-link{
  color: #288ae6;
  text-decoration: underline;
  cursor: pointer;
  display: inline;
}
/* Optionally add a class for the content area if you want more control */
.content-area {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align children to the start (left) */
  width: 80%; /* Take up full width of the parent container */
}

#app-showcase{
  margin-top: 40px;
}
</style>