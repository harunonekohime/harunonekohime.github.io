<template>
  <h2 class="drawings-title">{{ $t('carousel.title') }}</h2>
  <div class="carousel" @pointerdown.stop="startSwipe" @pointerup="endSwipe">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useSlots, ref, onMounted } from 'vue';
import type { Ref } from 'vue'

const currentSlide: Ref<number> = ref(0);
const emit = defineEmits(['slide']);
const items = (useSlots as any)().default();
const autoInterval: any = ref(null);

let startX = 0;

const startSwipe = (event: PointerEvent) => {
  startX = event.clientX;
};

const endSwipe = (event: PointerEvent) => {
  const diff = event.clientX - startX;

  if (diff > 10) {
    prevSlide();
  } else if (diff < -10) {
    nextSlide();
  }

  clearInterval(autoInterval.value);
  autoInterval.value = null;
  startAutoSlide();
};

const nextSlide = () => {
  currentSlide.value += 1;

  if (currentSlide.value >= items.length) {
    currentSlide.value = 0;
  }

  onSlideChange();
};

const prevSlide = () => {
  currentSlide.value -= 1;

  if (currentSlide.value < 0) {
    currentSlide.value = items.length - 1;
  }

  onSlideChange();
};

const onSlideChange = () => {
  emit('slide', currentSlide.value);
  items.forEach((item: any, index: number) => {
    item.el.style.transform = `translateX(${(index - currentSlide.value) * 100}%)`;
  });
};

const startAutoSlide = () => {
  autoInterval.value = setInterval(() => {
    nextSlide();
  }, 4000);
};

onMounted(() => {
  onSlideChange();
  startAutoSlide();
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

.drawings-title {
  font-size: 20px;
  color: #b93a3a;
}

@media screen and (max-width: 705px) {
  .drawings-title {
    font-size: 18px;
  }
}
</style>
