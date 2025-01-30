<template>
  <nav class="nav">
    <div class="switch-language" @click="switchLanguage">
      <span v-if="locale === 'de'" class="fi fi-de"></span>
      <span v-else class="fi fi-gb"></span>
    </div>
    <div class="nav__item" @click="toggleMenu">
      <div class="nav__item__line nav__item__line-1" :class="navItemClasses()"></div>
      <div class="nav__item__line nav__item__line-2" :class="navItemClasses()"></div>
      <div class="nav__item__line nav__item__line-3" :class="navItemClasses()"></div>
    </div>
    <div class="nav__overlay-wall" :class="{ 'nav__overlay-wall--show': menuIsOpen }" @click="closeMenu"></div>
    <div class="nav__overlay" :class="{ 'nav__overlay--open': menuIsOpen }">
      <ul>
        <li :class="listClasses(1)" @click="setItemActive(1, 'about')">
          <font-awesome-icon class="icon" :icon="['fas', 'id-card']" />
          <span>{{ $t('about.title') }}</span>
        </li>
        <li :class="listClasses(2)" @click="setItemActive(2, 'skills')">
          <font-awesome-icon class="icon" :icon="['fas', 'code']" />
          <span>{{ $t('skills.title') }}</span>
        </li>
        <li :class="listClasses(3)" @click="setItemActive(3, 'education')">
          <font-awesome-icon class="icon" :icon="['fas', 'graduation-cap']" />
          <span>{{ $t('education.title') }}</span>
        </li>
        <li :class="listClasses(4)" @click="setItemActive(4, 'experience')">
          <font-awesome-icon class="icon" :icon="['fas', 'briefcase']" />
          <span>{{ $t('experience.title') }}</span>
        </li>
        <li :class="listClasses(5)" @click="setItemActive(5, 'contact')">
          <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
          <span>{{ $t('contact.title') }}</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { Ref } from 'vue'
  import { useEventBus } from '@vueuse/core'
  import { useStorage } from '@vueuse/core'
  import "/node_modules/flag-icons/css/flag-icons.min.css";

  const menuIsOpen: Ref<boolean> = ref(false)
  const activeState: Ref<number> = ref(0)
  const skillBus = useEventBus('skills')
  const locale = useStorage('locale', 'de')

  const navItemClasses = () => {
    return {
      'switch-close': menuIsOpen.value,
      'switch-menu': !menuIsOpen.value
    }
  }

  const listClasses = (index: number) => {
    return {
      active: activeState.value === index,
    }
  }

  const toggleMenu = () => {
    if (menuIsOpen.value) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  const openMenu = () => {
    menuIsOpen.value = true
    document.body.classList.add('blur')
  }

  const closeMenu = () => {
    menuIsOpen.value = false
    document.body.classList.remove('blur')
  }

  const setItemActive = (index: number, hash: string) => {
    activeState.value = index
    closeMenu()

    window.history.pushState(null, '', `#${hash}`)

    const element: any = document.getElementById(hash)

    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    })

    if (hash === 'skills') {
      skillBus.emit()
    }
  }

  const switchLanguage = () => {
    locale.value = locale.value === 'en' ? 'de' : 'en'
    window.location.reload()
  }
</script>

<style lang="scss">
  .nav {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    padding: 10px;
    background: #ffbcbc;
    height: 60px;
    z-index: 10000;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      aspect-ratio: 1;
      z-index: 10000;
      -webkit-tap-highlight-color: transparent;
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

        &.switch-close {
          &.nav__item__line {
            &-1 {
              transition: .2s linear;
              transform: translate3d(0px, 8px, 0px) rotate(45deg);
            }
            &-2 {
              transition: .1s linear;
              opacity: 0;
            }
            &-3 {
              transition: .2s linear;
              transform: translate3d(0px, -8px, 0px) rotate(-45deg);
            }
          }
        }

        &.switch-menu {
          &.nav__item__line {
            &-1 {
              transition: .2s linear;
              transform: translate3d(0px, 0px, 0px) rotate(0deg);
            }
            &-2 {
              transition: .1s linear;
              opacity: 1;
            }
            &-3 {
              transition: .2s linear;
              transform: translate3d(0px, 0px, 0px) rotate(0deg);
            }
          }
        }
      }
    }

    .switch-language {
      height: 40px;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      background: transparent;
      cursor: pointer;
      margin-right: 10px;
      font-size: 20px;

      span {
        box-shadow: 0 5px 10px -4px rgba(0, 0, 0, 0.3);
      }
    }

    &__overlay {
      position: fixed;
      top: 60px;
      bottom: 0;
      left: 100%;
      width: 250px;
      height: 100%;
      background: white;
      padding: 20px;
      padding-top: 20px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      transition: .3s ease-in-out;
      z-index: 2;

      &--open {
        transform: translate3d(-100%, 0px, 0px);
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          margin-top: 15px;
          margin-bottom: 15px;
          padding: 15px;
          width: 100%;
          border-radius: 4px;
          font-size: 14px;
          color: #b93a3a;
          transition: background .2s linear;
          cursor: pointer;

          &:first-of-type {
            margin-top: 0;
          }

          svg {
            margin-right: 5px;
          }

          span {
            text-overflow: ellipsis;
            overflow: hidden;
          }

          &.active {
            background: #fccfcf;
          }

          &:not(&.active):hover {
            background: #fdf2f2;
          }
        }
      }

      &-wall {
        position: fixed;
        top: 60px;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
        opacity: 0;
        pointer-events: none;
        transition: .3s ease-in-out;

        &--show {
          opacity: 1;
          pointer-events: all;
        }
      }
    }
  }
</style>
