<template>

  <h1>Verus Automated Medical Billing</h1>
  <p>Verus Automated Medical Billing (Verus AMB) is a project I co-founded with Dr. Fabio Ynoe de Moraes and my best friend Vinicius Purgato.</p>
  <p>Verus aims to take the "ill" from medical bills to let doctors do what they were meant to do: take care of patients. </p>
  <p>Alongisde Vinicius, we designed, developed and implemented an innovative billing solution that automates physicain paperwork. We've recieved traction and are impmenting a pilot phase at Kingston General Hospital, as well as Sírio-Libanês all the way in Brazil. </p>
  <!-- <img src="../assets/veruspitch2.jpeg" alt="Verus"> -->
  <VerusTrophy />
  <VerusAppShowcase id="app-showcase"/>
</template>

<script setup>
import VerusTrophy from '@/components/VerusTrophy.vue';
import VerusAppShowcase from '@/components/VerusAppShowcase.vue';
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
}

#app-showcase{
  margin-top: 20px;
}
</style>