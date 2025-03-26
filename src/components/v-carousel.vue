<template>
  <div class="carousel" @pointerdown.stop="startSwipe" @pointerup="endSwipe">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useSlots, ref, onMounted } from 'vue';
import Carousel from './Carousel.ts';

const items = (useSlots as any)().default();
const carousel = ref<Carousel | null>(null);

const startSwipe = (e: PointerEvent) => {
  if (carousel.value) {
    carousel.value.startSwipe(e);
  }
};

const endSwipe = (e: PointerEvent) => {
  if (carousel.value) {
    carousel.value.endSwipe(e);
  }
};

onMounted(() => {
  carousel.value = new Carousel(items);
  carousel.value.startAutoSlide();
});
</script>

<style lang="scss">
.carousel {
  position: relative;
  width: 100%;
  height: 340px;
  overflow: hidden;

  > * {
    pointer-events: none;
  }
}
</style>
