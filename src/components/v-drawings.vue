<template>
  <section id="drawings">
    <h2>{{ $t('carousel.title') }}</h2>
    <v-carousel>
      <picture>
        <source media="(min-width:300px)" srcset="../assets/images/kimono-bunny.jpeg" />
        <img src="../assets/images/kimono-bunny.jpeg" alt="kimono-bunny" role="img" />
      </picture>
      <picture>
        <source media="(min-width:300px)" srcset="../assets/images/black-cat.jpeg" />
        <img src="../assets/images/black-cat.jpeg" alt="black-cat" role="img" />
      </picture>
      <picture>
        <source media="(min-width:300px)" srcset="../assets/images/squirrel.jpeg" />
        <img src="../assets/images/squirrel.jpeg" alt="squirrel" role="img" />
      </picture>
      <picture>
        <source media="(min-width:300px)" srcset="../assets/images/ramen-neko.jpeg" />
        <img src="../assets/images/ramen-neko.jpeg" alt="ramen-neko" role="img" />
      </picture>
      <picture>
        <source media="(min-width:300px)" srcset="../assets/images/bird.jpeg" />
        <img src="../assets/images/bird.jpeg" alt="bird" role="img" />
      </picture>
      <picture>
        <source media="(min-width:300px)" srcset="../assets/images/bumblebee.jpeg" />
        <img src="../assets/images/bumblebee.jpeg" alt="bumblebee" role="img" />
      </picture>
      <picture>
        <source media="(min-width:300px)" srcset="../assets/images/kimono-cat.jpeg" />
        <img src="../assets/images/kimono-cat.jpeg" alt="kimono-cat" role="img" />
      </picture>
    </v-carousel>
  </section>
</template>

<script setup lang="ts">
  import vCarousel from './v-carousel.vue'
</script>

<style lang="scss">
#drawings {
  width: 100%;

  h2 {
    text-align: center;
    width: 100%;
    display: block;
  }

  picture {
    position: absolute;
    width: 100%;
    height: calc(100% - 20px);
    object-fit: contain;
    transition: all 1s;
    left: 50%;

    source, img {
      position: absolute;
      transform: translateX(-50%);
      height: 100%;
      border-radius: 8px;
      border: 20px solid white;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>