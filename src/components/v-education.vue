<template>
   <v-card id="education">
      <h2>{{ $t('education.title') }}</h2>
      <div class="data-block">
         <div class="data-block__left">
            {{ $t('education.date1') }}
         </div>
         <div class="data-block__right">
            <h3>{{ $t('education.studytext1') }}</h3>
            <p>{{ $t('education.studytext2') }}</p>
         </div>
      </div>

      <div class="data-block">
         <div class="data-block__left">
            {{ $t('education.date2') }}
         </div>
         <div class="data-block__right">
            <h3>{{ $t('education.highschooltext1') }}</h3>
            <p>{{ $t('education.highschooltext2') }}</p>
         </div>
      </div>
   </v-card>
</template>

<script setup lang="ts">
   import vCard from '../components/v-card.vue';
</script>
