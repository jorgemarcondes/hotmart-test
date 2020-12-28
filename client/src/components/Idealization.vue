<template>
  <section class="idealization">
    <div class="idealization__container">
      <div class="idealization__container--inner">
        <span class="idealization__title">Idealización y realización</span>
        <div class="idealization__description">
          <span>
            <span class="text--highlight">Hotmart</span> es lider en la venta y
            distribución de infoproductos en toda Latinoamérica y ha permitido
            que miles de personas trabajen con lo que más aman, vendiendo y
            divulgando productos digitales en todo el mundo.
          </span>
          <span>
            Devido el interés del mercado europeo por el segmento de productos
            digitales, Hotmart posee una sede en Madri y actúa también en
            Holanda y Francia. Ahora, la empresa sintió que tiene mucho para
            compartir con los profesionales locales y decidió promover un
            encuentro enre ellos: especialistas y personas de diferentes áreas
            que, al igual que tú, están interesadas en aprender y compartir sus
            experiencias para darle un nuevo sentido a sus trayectories
            profesionales.
          </span>
        </div>
      </div>
    </div>

    <div class="idealization__logo">
      <span>Hotmart</span>
    </div>
  </section>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "idealization"
})
export default class Idealization extends Vue {}
</script>

<style lang="less" scoped>
.idealization {
  background-color: #2e2e2e;
  color: white;

  .text--highlight {
    font-weight: bold;
    color: white;
  }

  &__container {
    padding: 80px 0;
    background-color: #0e3946;

    &--inner {
      margin: 0 auto;
      justify-content: center;
      grid-column-gap: 16px;
      display: grid;
      grid-auto-flow: column;
      width: 70%;
    }
  }

  &__title {
    font-size: 40px;
    max-width: 300px;
  }

  &__description {
    font-size: 12px;
    max-width: 300px;
  }

  &__logo {
    font-size: 18px;
    margin: auto;
    width: 50%;
    text-align: center;
    padding: 40px;
  }
}
</style>
