<template>
  <fragment>
    <div class="kura_tm_topbar">
      <div class="wrapper">
        <div class="topbar_inner">
          <div class="logo">
            <a href="#"><img :src="`/img/logo/${logo}.png`" alt="" /></a>
          </div>
          <div class="menu">
            <div class="list">
              <ul class="anchor_nav" id="anchor_nav">
                <Menu />
              </ul>
            </div>
            <div class="trigger">
              <div
                class="hamburger hamburger--slider"
                :class="[isToggled ? `is-active` : ``]"
              >
                <div class="hamburger-box" @click="toggleTrueFalse()">
                  <div class="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Header -->
    <div class="kura_tm_mobile_menu">
      <div class="mobile_menu_inner">
        <div class="mobile_in">
          <div class="logo">
            <a href="#"><img :src="`/img/logo/${logo}.png`" alt="" /></a>
          </div>
          <div class="trigger">
            <div
              class="hamburger hamburger--slider"
              :class="[isToggled ? `is-active` : ``]"
            >
              <div class="hamburger-box" @click="toggleTrueFalse()">
                <div class="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown" :style="{ display: isToggled ? `block` : `none` }">
        <div class="dropdown_inner">
          <ul class="anchor_nav">
            <Menu />
          </ul>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import { openNav, stickyNav } from "../../utils/utils";
import Menu from "./Menu.vue";
export default {
  name: "Header",
  data() {
    return {
      isToggled: false,
      logo: "dark",
    };
  },
  methods: {
    toggleTrueFalse() {
      this.isToggled = !this.isToggled;
      openNav(this.isToggled);
    },
  },
  mounted() {
    window.addEventListener("scroll", stickyNav);
    if (window.location.pathname.includes("dark")) {
      this.logo = "logo";
    } else {
      this.logo = "dark";
    }
  },
  components: { Menu },
};
</script>
