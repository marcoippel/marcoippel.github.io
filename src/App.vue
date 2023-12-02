<template>
  <fragment>
    <PreLoader />
    <router-view />
  </fragment>
</template>

<script>
import PreLoader from "@/components/layouts/PreLoader.vue";
import {
  kura_tm_my_load,
  customCursor,
  audioSoundAndOpen,
  wowJsAnimation,
  aTagClick,
} from "./utils/utils.js";
export default {
  components: {
    PreLoader,
  },
  mounted() {
    kura_tm_my_load();
    customCursor();
    audioSoundAndOpen();
    wowJsAnimation();
    aTagClick();
  },
};
</script>
