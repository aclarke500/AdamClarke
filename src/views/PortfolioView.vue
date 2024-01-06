<template>
  <div class="portfolio">
    <p>Here I've listed some of the projects I've built that best demonstrate my abilites and interests. With the
      exception of Verus, all of these
      projects are open source so feel free to copy anything you like, and all are authored solely by me. None of these
      are tutorials or class assignments unless otherwise stated.</p>
    <div id="project-github">
      <ProjectGithubComponentVue class="project-github-component-vue" :data="state.verusProject" />
      <ProjectGithubComponentVue class="project-github-component-vue" :data="state.operatingSystemStudySite" />
      <ProjectGithubComponentVue class="project-github-component-vue" :data="state.classificationProject" />
      <ProjectGithubComponentVue class="project-github-component-vue" :data="state.arduinoTwosComplementProject" />
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import ProjectGithubComponentVue from '@/components/ProjectGithubComponent.vue';

const verusProject = {
  title: 'Verus AMB',
  description: [
    "Veurs AMB is a company I co-founded in first year. It's a VueFire application that serves to automate and optimize billing practices. Physicians simply take a photo of their daily schedule, and Verus selects the most appropriate billing option based on the 1000 page OHIP billing manual. The app then generates a billing report, and sends it to the physician's secretary for a hands off billing solution. The app is currently in beta testing, and is scheduled to pilot at the Kingston General Hospital in the coming months."
  ],
  photo: require('@/assets/DALLe.png'),

  websiteUrl: "https://www.verusamb.com/",
  githubUrl: null,
}


const operatingSystemStudySite = {
  title: 'Operating Systems Study Site',
  description: [
    "This is a project in AI generated content. I did not like going to my OS class, nor did I have the time to read the textbook. I used chatGPT to skim my textbook, and I passed in my assigned readings and asked it to make notes in html. From there, I put the notes it generated onto a website, and modified it slightly. Most of the code, styling, and all of the images and art associated with it are AI generated. As much as it was about studying for my OS class, it was also about leveraging AI to automate work as a developer."
  ],
  githubUrl: "https://github.com/aclarke500/CISC-324-Notes",
  websiteUrl: "https://aclarke500.github.io/CISC-324-Notes/",
  photo: require('@/assets/os_project.png'),
}



const classificationProject = {
  title: 'Custom Classification Algorithm',
  description: [
    "This is a classification algorithm I designed and implemented from scratch. The idea came to me when I was playing around with properties of vectors and matrices, and realized I could build a supervised classification algorithm using p-values and dot products."
  ],
  githubUrl: 'https://github.com/aclarke500/custom-classification-algorithm',
  photo: require('@/assets/ML_project.png'),
  websiteURL: null,
}

const arduinoTwosComplementProject = {
  title: "Bitz Clash",
  description: [
    "This is a game I built that tests your binary skills. You are presented with a math equation, adding or subtracting numbers between [-50 and +50]. You must then input your answer in binary using the buttons on the bread board. You can also toggle between signed and unsigned ints in order to use 2s complement."],
  photo: require('@/assets/arduino_photo.png'),
  websiteUrl: "https://photos.app.goo.gl/f9JzjAd5LKtxUsRSA",
  githubUrl: "https://github.com/aclarke500/binary-addition-game",
}


const state = reactive({
  classificationProject: classificationProject,
  arduinoTwosComplementProject: arduinoTwosComplementProject,
  operatingSystemStudySite: operatingSystemStudySite,
  verusProject: verusProject,
})
</script>

<style scoped>
.portfolio {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

#project-github {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}

#project-github>.project-github-component-vue {
  margin: 10px 0 10px 0;
  display: block;
}

p {
  max-width: 30rem;
}
</style>