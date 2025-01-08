<template>
   <v-card id="education">
      <h2>Bildungsweg</h2>
      <div class="data-block">
         <div class="data-block__left">
            09.2013 – 01.2018
         </div>
         <div class="data-block__right">
            <h3>Studium: Technische Hochschule Köln</h3>
            <p>Studiengang Medieninformatik Bachelor of Science</p>
         </div>
      </div>

      <div class="data-block">
         <div class="data-block__left">
            09.2011 – 06.2013
         </div>
         <div class="data-block__right">
            <h3>Fachabitur: Fritz-Henßler-Berufskolleg Dortmund</h3>
            <p>Fachrichtung Gestaltung</p>
         </div>
      </div>
   </v-card>
</template>

<script setup lang="ts">
   import vCard from '../components/v-card.vue';
</script>
