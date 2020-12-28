<template>
  <section class="intro">
    <div class="intro__info">
      <h1 class="intro__info-logo">HOTMART TALKS</h1>
      <h5 class="intro__info-place">MADRID</h5>
      <h3 class="intro__info-date">JUEVES 30 DE NOVIEMBRE DE 2017</h3>
      <h3 class="intro__info-speaker">LAMUCCA DE PRADO | 19:30 H</h3>
    </div>
    <div class="intro__subscribe">
      <button >Quiero inscribirme ahora</button>
    </div>
    <div class="intro__description">
      <h1>
        Share knowledge, make friends, and have fun.
      </h1>
      <h5>
        <span class="text--highlight">Hotmart Talks</span> es la oportunidad de participar en un Happy Hour
        y aprovechar para conocer a personas que se dedican al emprendimiento, los productos digitales y
        el mercado de la innovación. Ideado y organizado por Hotmart,
        <span class="text--highlight">"Talks"</span> tiene lugar en bares o sitios que amalgaman happy hour con
        aprendizaje y cuenta siempre con la presencia de invitados especiales, proporcionando una
        experiencia placentera para todos. Es un momento dedicado a conversar, hacer amigos y crecer.
      </h5>
    </div>
  </section>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "intro"
})
export default class Intro extends Vue {}
</script>

<style lang="less" scoped>
.intro {
  background-color: #f04e23;
  text-align: center;
  color: white;

  &__info {
    display: grid;
    align-items: center;
    justify-items: center;
    padding-top: 80px;

    &-logo {
      font-size: 40px;
      font-style: italic;
      padding: 12px;
      margin-bottom: 16px;
      background-color: #00000033;
      width: 400px;
      text-align: center;
      border-radius: 40px;
    }

    &-place {
      font-family: sans-serif;
      font-size: 14px;
      letter-spacing: 8px;
      font-weight: lighter;
      padding-bottom: 24px;

      &:before, &:after {
        background-color: #ffae3b;
        content: "";
        display: inline-block;
        height: 1px;
        position: relative;
        vertical-align: middle;
        width: 100px;
      }

      &:before {
        right: 0.5em;
      }

      &:after {
        left: 0.5em;
      }
    }

    &-date {
      font-size: 32px;
      font-style: italic;
      padding: 16px;
    }

    &-speaker {
      font-weight: lighter;
      letter-spacing: 8px;
    }

  }

  &__subscribe {
    margin: 40px;

    button {
      font-size: 20px;
      background-color: #02e202;
      color: black;
      border: 3px solid white;
      border-radius: 24px;
      height: 40px;
      padding: 0 24px 0 24px;
      font-weight: bold;
      outline: none;
    }

    &:before, &:after {
      background-color: #ff8e3b;
      content: "";
      display: inline-block;
      height: 2px;
      position: relative;
      vertical-align: middle;
      width: 250px;
    }
  }


  &__description {
    padding: 0 40px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1;
    flex-wrap: wrap;

    h1, h5 {
      flex: 1;
      min-width: 300px;
    }

    h1 {
      font-size: 48px;
      max-width: 320px;
      text-align: start;
      margin-right: 30px;
    }

    h5 {
      font-size: 12px;
      font-weight: lighter;
      max-width: 200px;
      text-align: start;
      margin-left: 30px;

      .text--highlight {
        font-weight: bold;
      }
    }

  }

}


</style>
