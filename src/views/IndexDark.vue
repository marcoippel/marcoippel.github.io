<template>
  <div class="kura_tm_all_wrap">
    <Settings />
    <ModalBox />
    <Header />
    <Home />
    <Portfolio />
    <Skills />
    <Timeline />
    <Pricing />
    <News />
    <Contact />
    <Footer />
    <Audio />
    <Mouse />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
import Portfolio from "@/components/Portfolio.vue";
import Skills from "@/components/Skills.vue";
import Timeline from "@/components/Timeline.vue";
import Pricing from "@/components/Pricing.vue";
import News from "@/components/News.vue";
import Contact from "@/components/Contact.vue";
import Header from "@/components/layouts/Header.vue";
import Audio from "@/components/layouts/Audio.vue";
import Mouse from "@/components/layouts/Mouse.vue";
import Footer from "@/components/layouts/Footer.vue";
import ModalBox from "@/components/ModalBox.vue";
import Settings from "../components/Settings.vue";
import { dataImage, kura_tm_service_popup } from "../utils/utils";
export default {
  name: "Index",
  components: {
    Home,
    Portfolio,
    Skills,
    Timeline,
    Pricing,
    News,
    Contact,
    Header,
    Audio,
    Mouse,
    Footer,
    ModalBox,
    Settings,
  },
  mounted() {
    dataImage();
    kura_tm_service_popup();
    let body = document.querySelector("body");
    body.classList.add("dark");
  },
};
</script>
