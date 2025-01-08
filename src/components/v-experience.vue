<template>
  <v-card id="experience">
    <h2>Berufserfahrung</h2>
    <div class="data-block">
      <div class="data-block__left">
        09.2018 – Heute
      </div>
      <div class="data-block__right">
        <h3>RMH MEDIA GmbH</h3>
        <h4>Web Developer</h4>
        <ul>
          <li>Salesforce/Veeva CRM Webanwendungen mit JavaScript/Vue.js</li>
          <li>Single-Page-Applicationsmit JavaScript/Vue.js</li>
        </ul>
      </div>
    </div>

    <div class="data-block">
      <div class="data-block__left">
        02.2018 – 09.2018
      </div>
      <div class="data-block__right">
        <h3>Another Monday</h3>
        <h4>Analyst</h4>
        <ul>
          <li>Quality Assurance</li>
          <li>Mockups</li>
          <li>Technische Dokumentationen</li>
        </ul>
      </div>
    </div>

    <div class="data-block">
      <div class="data-block__left">
        08.2017 – 02.2018
      </div>
      <div class="data-block__right">
        <h3>Another Monday</h3>
        <h4>Werkstudent (Bachelorarbeit)</h4>
        <ul>
          <li>Entwicklung eines Firmeninternen Content-Management-Systems</li>
        </ul>
      </div>
    </div>
  </v-card>
</template>
<script setup lang="ts">
import vCard from '../components/v-card.vue';
</script>

<style lang="scss">
#experience {
  ul {
    padding-left: 30px;

    li {
      margin-left: 0;
      color: #ff9c9c;
      margin-bottom: 5px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
