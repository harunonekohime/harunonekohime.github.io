<template>
  <section class="card">
    <slot />
  </section>
</template>

<style lang="scss">
.card {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  color: #b93a3a;
  margin-bottom: 20px;
  overflow: hidden;

  .data-block {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    overflow: hidden;

    &:last-of-type {
      margin-bottom: 0;
    }

    &__left {
      display: flex;
      justify-content: flex-end;
      width: 30%;
      font-size: 16px;
      color: #ff9c9c;
      padding: 10px;
      padding-right: 20px;
      padding-left: 0;
      border-right: 2px solid #ff9c9c;
    }

    &__right {
      width: 70%;
      padding: 10px;
      padding-left: 20px;
    }
  }

  h2 {
    margin-bottom: 15px;
    margin-top: 0;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  p {
    font-size: 16px;
    color: #ff9c9c;
    margin-top: 0;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 705px) {
  .card {
    .data-block {
      display: flex;
      flex-direction: column;

      &__left {
        width: 100%;
        justify-content: flex-start;
        border-right: none;
        padding: 0;
      }

      &__right {
        width: 100%;
      }
    }

    h3 {
      font-size: 16px;
    }

    h4 {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }
  }
}
</style>
