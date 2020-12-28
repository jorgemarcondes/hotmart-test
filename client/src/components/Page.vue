<template>
  <div>
    <Intro />
    <Speakers />
    <Idealization />
  </div>
</template>

<script lang="ts">
import Intro from "@/components/Intro.vue";
import Speakers from "@/components/Speakers.vue";
import Idealization from "@/components/Idealization.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "page",
  components: {
    Intro,
    Speakers,
    Idealization
  }
})
export default class Page extends Vue {
  // @Prop() private msg!: string;
}
</script>

<style scoped lang="less">

</style>
