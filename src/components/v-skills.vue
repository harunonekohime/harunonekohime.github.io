<template>
  <section id="skills" class="skill-container">
    <div
      class="questionmark-button"
      :class="{explode: explode, hide: hideButton}"
      @click="explode = true"
      @animationend="showOverlay = true"
    />
    <div class="skill-overlay" :class="{show: showOverlay}" @animationend="showSkills = true; animate = true; hideButton = true;">
      <span style="font-size: 20px;">Skills</span>
      <div class="skills">
        <div class="skill-level-wrapper" v-for="skill in skills" :key="`skill-${skill}`">
          <label class="skill">{{ skill }}</label>
          <div class="line" :style="getLineStyle(skill)"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import cvData from '../data/cv.json';
import { useEventBus } from '@vueuse/core'

const explode: Ref<boolean> = ref(false);
const showOverlay: Ref<boolean> = ref(false);
const showSkills: Ref<boolean> = ref(false);
const animate: Ref<boolean> = ref(false);
const hideButton: Ref<boolean> = ref(false);
const skillBus = useEventBus('skills')
const skills: string[] = [
  'JavaScript',
  'Vue.js',
  'HTML',
  'CSS',
  'TailwindCSS',
  'TypeScript',
  'JSON',
  'Node.js',
  'PHP',
  'MySQL',
  'Jest',
  'Git',
  'Jira',
  'Figma',
  'Sketch',
  'Adobe Photoshop',
  'Adobe InDesign',
  'Adobe XD',
];

function getLineStyle(skill: string): object {
  const skillData = cvData.skills.find((s: { name: string }) => s.name === skill);
  return skillData && animate.value
    ? { '--skill-width': `${skillData.width}%` }
    : { '--skill-width': '0%' };
}

skillBus.on(() => {
  explode.value = true;
});
</script>

<style lang="scss">
.skill-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: fit-content;
  margin-bottom: 20px;

  .questionmark-button {
    background: url(../assets/images/questionmark-box-sprite.png) -0 -0;
    background-size: cover;
    background-position: 0px 0px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    animation: pulse 1.3s ease-in-out infinite;
    transition: .3s ease-in-out;
    overflow: hidden;

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }

    &.explode {
      animation: explode .8s steps(7) forwards;

      @keyframes explode {
        to {
          background-position: -350px 0px;
        }
      }
    }

    &.hide {
      height: 0;
      pointer-events: none;
      background: none;
    }
  }

  .skill-overlay {
    width: 100%;
    height: 0;
    background: white;
    border-radius: 8px;
    color: #b93a3a;
    font-family: cascadia;
    text-align: center;
    box-shadow: 0px 4px 7px -1px #cecece;
    z-index: 1;
    overflow: hidden;
    transform: scale(0);
    opacity: 0;

    &.show {
      height: auto;
      padding: 20px;
      animation: show .6s ease forwards;

      @keyframes show {
        to {
          transform: scale(1);
          opacity: 1;
        }
      }
    }

    .skills {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 20px;
      text-align: left;

      .skill-level-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 20px;

        .skill {
          font-size: 16px;
          margin-bottom: 5px;
        }

        .line {
          display: flex;
          width: 100%;
          height: 10px;
          background: #e4e4e4;
          border-radius: 5px;
          position: relative;
          --skill-width: 0%;

          &::before {
            content: '';
            height: 100%;
            background: #ff9c9c;
            border-radius: 5px;
            position: absolute;
            top: 0;
            left: 0;
            width: var(--skill-width);
            transition: width 1s ease-in-out;
          }
        }
      }
    }
  }
}
</style>
