<template>
  <nav>
    <div class="nav__item" @click="openMenu">
      <div class="nav__item__line nav__item__line-1" :class="{ merge: menuIsOpen, reverse: !menuIsOpen }"></div>
      <div class="nav__item__line nav__item__line-2" :class="{ merge: menuIsOpen, reverse: !menuIsOpen }"></div>
      <div class="nav__item__line nav__item__line-3" :class="{ merge: menuIsOpen, reverse: !menuIsOpen }"></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

const menuIsOpen: Ref<boolean> = ref(false);

const openMenu = () => {
  menuIsOpen.value = !menuIsOpen.value;
  console.log('HELLO', menuIsOpen.value);
};

</script>

<style lang="scss">
  nav {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding: 10px;
    background: #fccfcf;
    height: 60px;
    z-index: 10000;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

    .nav__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      aspect-ratio: 1;
      cursor: pointer;

      &__line {
        background: #b93a3a;
        width: 25px;
        height: 3px;
        border-radius: 8px;
        margin-bottom: 5px;

        &:last-of-type {
          margin-bottom: 0;
        }
        &.merge {
          &.nav__item__line {
            &-1 {
              animation: merge-1 .1s linear forwards, close-1 .1s linear forwards .3s;
            }
            &-2 {
              animation: hide .1s linear forwards;
            }
            &-3 {
              animation: merge-2 .1s linear forwards, close-2 .1s linear forwards .3s;
            }
          }
        }

        &.reverse {
          &.nav__item__line {
            &-1 {
              animation: menu-1 .1s linear forwards, unmerge-1 .1s linear forwards .3s;
            }

            &-2 {
              animation: show .1s linear forwards;
            }

            &-3 {
              animation: menu-2 .1s linear forwards, unmerge-2 .1s linear forwards .3s;
            }
          }
        }

        @keyframes merge-1 {
          to {
            transform: translate3d(0px, 8px, 0px);
          }
        }

        @keyframes unmerge-1 {
          to {
            transform: translate3d(0px, 0px, 0px);
          }
        }

        @keyframes close-1 {
          to {
            transform: translate3d(0px, 8px, 0px) rotate(45deg);
          }
        }

        @keyframes menu-1 {
          to {
            transform: translate3d(0px, 8px, 0px) rotate(0deg);
          }
        }

        @keyframes merge-2 {
          to {
            transform: translate3d(0px, -8px, 0px);
          }
        }

        @keyframes unmerge-2 {
          to {
            transform: translate3d(0px, 0px, 0px);;
          }
        }

        @keyframes close-2 {
          to {
            transform: translate3d(0px, -8px, 0px) rotate(-45deg);
          }
        }

        @keyframes menu-2 {
          to {
            transform: translate3d(0px, -8px, 0px) rotate(0deg);
          }
        }

        @keyframes hide {
          to {
            opacity: 0;
          }
        }

        @keyframes show {
          to {
            opacity: 1;
          }
        }
      }
    }
  }
</style>
