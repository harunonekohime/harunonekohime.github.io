<template>
  <v-card id="about" class="card__about">
    <div class="card__about__content">
      <h2>{{ $t('about.title') }}</h2>
      <p>
        {{ $t('about.text1') }}
      </p>
      <p>
        {{ $t('about.text2') }}
      </p>
    </div>
  </v-card>
</template>

<script setup lang="ts">
  import vCard from '../components/v-card.vue'
</script>

<style lang="scss">
.card__about {
  background: url('../assets/images/taiyaki-outlines-red.jpg');
  background-size: cover;

  &__content {
    background: white;
    padding: 20px;
    border-radius: 8px;

    p {
      overflow: hidden;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>