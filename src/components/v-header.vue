<template>
  <header id="header">
    <div class="description">
      <div class="description__image">
        <div></div>
      </div>
      <div class="description__text">
        <h1>Jessica Lee Schulz</h1>
        <span>Frontend Developer</span>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.description {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  background: white;
  text-align: center;
  padding: 15px;
  border-radius: 8px;
  width: 450px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &__image {
    display: flex;
    justify-content: center;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    overflow: hidden;
    transform: scale(0);
    z-index: 1;
    margin-right: 15px;
    animation: zoom 1s ease forwards .2s;

    div {
      background: url(../assets/images/me.jpeg);
      background-size: cover;
      width: 100%;
    }

    @keyframes zoom {
      50% {
        transform: scale(0);
      }
      75% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1, span {
      overflow: hidden;
      font-size: 20px;
      border-right: .15em solid #b93a3a;
      white-space: nowrap;
      margin: 0 auto;
      opacity: 0;
      font-family: cascadia;
      margin-bottom: 10px;
      color: #b93a3a;
      animation: typing 2.5s steps(30, end) forwards, blink-caret .5s step-end infinite;
      animation-delay: 1.2s;

      &span {
        margin-bottom: 0px;
      }

      @keyframes typing {
        from {
          width: 0;
          opacity: 0;
        }
        to {
          width: 100%;
          opacity: 1;
        }
      }

      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #b93a3a }
      }
    }

    h1 {
      font-size: 23px;
    }
  }
}

@media screen and (max-width: 505px) {
  .description {
    width: 100%;

    &__image {
      width: 100px;
      height: 100px;
    }

    &__text {
      span {
        font-size: 18px;
      }

      h1 {
        font-size: 20px;
      }
    }
  }
}

@media screen and (max-width: 422px) {
  .description {
    width: 100%;

    &__image {
      min-width: 70px;
      min-height: 70px;
      width: 70px;
      height: 70px;
    }

    &__text {
      span {
        font-size: 16px;
      }

      h1 {
        font-size: 18px;
      }
    }
  }
}

  @media screen and (max-width: 345px) {
  .description {
    width: 100%;

    &__image {
      min-width: 50px;
      min-height: 50px;
      width: 50px;
      height: 50px;
    }

    &__text {
      span {
        font-size: 12px;
      }

      h1 {
        font-size: 14px;
      }
    }
  }
}
</style>
