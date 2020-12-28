<template>
  <div class="speakers">
    <h1 class="speakers__title">Conoce a algunos de los ponentes</h1>

    <div class="speakers__container">
      <div
        class="speakers__item"
        v-for="speaker in speakers"
        :key="speaker.title"
      >
        <div class="speakers__item-avatar">
          <img :src="`http://${host}/${speaker.avatar}`" />
        </div>
        <div>
          <span class="speakers__item-name">{{ speaker.title }}</span>
        </div>
        <h5 class="speakers__item-jobtitle">{{ speaker.jobTitle }}</h5>
      </div>
    </div>

    <div class="speakers__more">
      <button>Conoce a todos los ponentes</button>
    </div>
  </div>
</template>

<script>
import { fetchSpeakers } from "@/services/SpeakersService";

export default {
  name: "speakers",
  data() {
    return {
      speakers: [],
      host: process.env.VUE_APP_BACKEND_HOST
    };
  },
  mounted() {
    this.getSpeakers();
  },
  methods: {
    async getSpeakers() {
      const data = await fetchSpeakers();
      this.speakers = data.filter(s => s.highlighted);
    }
  }
};
</script>

<style lang="less" scoped>
.speakers {
  padding: 50px;
  margin: auto;
  width: 70%;

  &__title {
    padding-bottom: 40px;
    font-size: 40px;
    font-weight: bold;
    color: #f04e23;
    max-width: 360px;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 32px;
  }

  &__more {
    margin: auto;
    width: 340px;
    display: grid;
    align-items: center;

    button {
      font-size: 20px;
      background-color: #f04e23;
      color: white;
      border: 3px solid #ff8e3b;
      border-radius: 24px;
      height: 40px;
      padding: 0 24px 0 24px;
      font-weight: bold;
      outline: none;
    }
  }

  &__item {
    display: grid;
    height: 300px;
    grid-template-rows: 180px min-content auto;
    grid-row-gap: 8px;

    &-avatar {
      img {
        width: 150px;
        border-radius: 50%;
        border: 8px solid;
        border-image-source: linear-gradient(
          45deg,
          rgb(0, 143, 104),
          rgb(250, 224, 66)
        );
        border-image-slice: 0;
        background-image: linear-gradient(white, white),
          radial-gradient(circle at top left, #ffa050, #f1663e);
        background-origin: border-box;
        background-clip: content-box, border-box;
      }
    }

    &-name {
      font-size: 24px;
      justify-self: start;
      background-image: linear-gradient(
        180deg,
        transparent 21px,
        #ffa050,
        #f1663e
      );
    }

    &-jobtitle {
    }
  }
}
</style>
