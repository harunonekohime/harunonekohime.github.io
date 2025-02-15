<template>
  <v-card id="experience">
    <h2>{{ $t('experience.title') }}</h2>
    <div class="data-block">
      <div class="data-block__left">
        {{ $t('experience.date4') }}
      </div>
      <div class="data-block__right">
        <h3>{{ $t('experience.company3') }}</h3>
        <h4>{{ $t('experience.position4') }}</h4>
      </div>
    </div>

    <div class="data-block">
      <div class="data-block__left">
        {{ $t('experience.date1') }}
      </div>
      <div class="data-block__right">
        <h3>{{ $t('experience.company1') }}</h3>
        <h4>{{ $t('experience.position1') }}</h4>
        <ul>
          <li>{{ $t('experience.experience1') }}</li>
          <li>{{ $t('experience.experience2') }}</li>
        </ul>
      </div>
    </div>

    <div class="data-block">
      <div class="data-block__left">
        {{ $t('experience.date2') }}
      </div>
      <div class="data-block__right">
        <h3>{{ $t('experience.company2') }}</h3>
        <h4>{{ $t('experience.position2') }}</h4>
        <ul>
          <li>{{ $t('experience.experience3') }}</li>
          <li>{{ $t('experience.experience4') }}</li>
          <li>{{ $t('experience.experience5') }}</li>
        </ul>
      </div>
    </div>

    <div class="data-block">
      <div class="data-block__left">
        {{ $t('experience.date3') }}
      </div>
      <div class="data-block__right">
        <h3>{{ $t('experience.company2') }}</h3>
        <h4>{{ $t('experience.position3') }}</h4>
        <ul>
          <li>{{ $t('experience.bachelorthesis') }}</li>
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
