<template>
  <div class="portfolio">
    <p>Here I've listed some of the projects I've built that best demonstrate my abilites and interests. With the
      exception of Verus, all of these
      projects are open source so feel free to copy anything you like. None of these
      are tutorials or class assignments unless otherwise stated.</p>
    <div id="project-github">
      <ProjectGithubComponentVue class="project-github-component-vue" :data="projects.verusProject" />
      <ProjectGithubComponentVue class="project-github-component-vue" :data="projects.fintech80" />
      <ProjectGithubComponentVue class="project-github-component-vue" :data="projects.smartCartAi" />
      <ProjectGithubComponentVue class="project-github-component-vue" :data="projects.codeNamesProject" />
      <ProjectGithubComponentVue class="project-github-component-vue" :data="projects.sentenceClassifications" />
      <ProjectGithubComponentVue class="project-github-component-vue" :data="projects.operatingSystemStudySite" />
      <ProjectGithubComponentVue class="project-github-component-vue" :data="projects.classificationProject" />
      <ProjectGithubComponentVue class="project-github-component-vue" :data="projects.arduinoTwosComplementProject" />
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import projects from '@/projects';
import ProjectGithubComponentVue from '@/components/ProjectGithubComponent.vue';

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
  max-width: 95%;
}

#project-github>.project-github-component-vue {
  margin: 10px 0 10px 0;
  display: block;
}

p {
  max-width: 30rem;
}
</style>