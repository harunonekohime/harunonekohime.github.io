<template>
  <v-card id="contact">
    <div class="contact-wrapper">
      <h2>{{ $t('contact.title') }}</h2>
      <div class="contact__content">
        <div class="contact__content__left">
          <p>
            {{ $t('contact.text') }}
          </p>
        </div>
        <div class="contact__content__right">
          <ul>
            <li>
              <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
              <a href="mailto:jessicaleeschulz4@gmail.com" target="_blank" rel="noreferrer">jessicaleeschulz4@gmail.com</a>
            </li>
            <li>
              <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
              <a href="https://www.linkedin.com/in/jessica-lee-schulz-b1733233a/" target="_blank">LinkedIn</a>
            </li>
            <li>
              <font-awesome-icon class="icon" :icon="['fab', 'xing']" />
              <a href="https://www.xing.com/profile/Jessica_Schulz110/web_profiles?expandNeffi=true" target="_blank">Xing</a>
            </li>
            <li>
              <font-awesome-icon class="icon" :icon="['fab', 'etsy']" />
              <a href="https://harunonekostudio.etsy.com" target="_blank">Etsy Shop</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
  import vCard from '../components/v-card.vue';
</script>

<style lang="scss">
#contact {
  background: url('../assets/images/taiyaki-outlines-red.jpg');
  background-size: cover;
  margin-bottom: 0;

  .contact-wrapper {
    background: white;
    border-radius: 8px;
    padding: 20px;

    .icon {
      width: 20px;
      margin-right: 10px;
    }

    .contact__content {
      position: relative;
      display: flex;
      padding-bottom: 10px;
      font-size: 16px;

      &__left {

        p {
          padding: 10px;
          padding-right: 20px;
          padding-left: 0;
          border-right: 2px solid #ff9c9c;
        }
      }

      &__right {
        flex: 1 1 0%;
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 5px;

        ul {
          list-style: none;
          margin: 0;
          padding: 0;

          li {
            margin-bottom: 5px;
            line-height: 1.75rem;
            display: flex;
            align-items: center;

            a {
              font-size: 14px;
              color: #b93a3a;

              &:hover {
                text-decoration: underline;
                color: #ff9c9c
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 705px) {
  #contact {
    .contact-wrapper {
      .contact__content {
        flex-direction: column;

        &__left {
          p {
            padding-top: 0;
            border: none;
          }
        }

        &__right {
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;

          .icon {
            margin-right: 8px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 385px) {
  #contact {
    .contact-wrapper {
      .contact__content {
        &__right {
          ul {
            li, a {
              font-size: 11px !important;
            }
          }
        }
      }
    }
  }
}
</style>