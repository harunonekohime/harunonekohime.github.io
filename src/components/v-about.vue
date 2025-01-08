<template>
  <v-card id="about" class="card__about">
    <div class="card__about__content">
      <h2>Über mich</h2>
      <p>
        Hi ich bin Jess (✿`꒳`)ﾉ! Ich habe Medieninformatik an der Technischen Hochschule Köln studiert und arbeite seit 2018 als Frontend Entwicklerin bei der RMH MEDIA GmbH.
        Dort sammelte ich Erfahrungen in der Entwicklung von Single-Page-Applications und Landingpages mit JavaScript und Vue.js.
      </p>
      <p>
        In meiner Freizeit spiele ich gerne Videospiele, Klavier und zeichne gerne. Nebenbei betreibe ich einen kleinen Shop auf Etsy, wo ich meine Zeichnungen verkaufe.
      </p>
    </div>
  </v-card>
</template>

<script setup lang="ts">
  import vCard from '../components/v-card.vue';
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