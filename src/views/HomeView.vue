<template>
  <main>
    <v-header/>
    <v-about/>
    <v-skills/>
    <v-education/>
    <v-experience/>
    <v-contact/>
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
  padding: 100px 20px 0px 20px
}
</style>
