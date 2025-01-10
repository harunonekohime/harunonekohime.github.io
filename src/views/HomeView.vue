<template>
  <main>
    <v-header/>
    <v-about/>
    <v-skills/>
    <v-education/>
    <v-experience/>
    <v-contact/>
    <span class="heart-container">
      Made with Vue.js, TypeScript, HTML, CSS and
      <svg width="112" height="104" viewBox="0 0 112 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.2718 15.0813L55.9994 18.0472L57.7279 15.0818C62.873 6.25483 71.8876 2.04333 80.8127 2.04333C93.7063 2.04333 106 10.7613 106 26.8277C106 36.157 100.404 45.8907 90.9278 56.9884C83.8799 65.2425 74.918 73.999 65.0032 83.6865C62.077 86.5457 59.0677 89.486 56.0001 92.5184C52.9263 89.4794 49.911 86.5329 46.979 83.6679C37.0726 73.9877 28.1176 65.2373 21.0738 56.9884C11.5973 45.8906 6 36.1569 6 26.8277C6 10.7878 18.311 2 31.2177 2C40.1117 2 49.1028 6.20748 54.2718 15.0813Z" stroke="black" stroke-width="4"/>
      </svg>
    </span>
    <v-footer/>
  </main>
</template>

<script setup lang="ts">
import vSkills from '../components/v-skills.vue'
import vHeader from '../components/v-header.vue'
import vEducation from '../components/v-education.vue'
import vExperience from '../components/v-experience.vue'
import vContact from '../components/v-contact.vue'
import vAbout from '../components/v-about.vue'
import vFooter from '../components/v-footer.vue'

</script>
<style lang="scss">
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 700px;
  margin: auto;
  padding: 80px 20px 0px 20px;

  .heart-container {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #b93a3a;
    margin-top: 20px;

    svg {
      width: 40px;
      height: auto;
      margin-left: 10px;

      path {
        stroke-dasharray: 375;
        stroke-dashoffset: 375;
        stroke: #b93a3a;
        opacity: 0;
        animation: draw 2s linear infinite;
      }

      @keyframes draw {
        to {
          stroke-dasharray: 375;
          stroke-dashoffset: 0;
          opacity: 1;
        }
      }
    }
  }

  @media screen and (max-width: 468px) {
    .heart-container {
      font-size: 11px;

      svg {
        width: 30px;
      }
    }
  }

  @media screen and (max-width: 360px) {
    .heart-container {
      font-size: 9px;

      svg {
        width: 30px;
      }
    }
  }
}
</style>
