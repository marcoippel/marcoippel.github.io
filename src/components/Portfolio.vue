<template>
  <div class="kura_tm_section" id="portfolio">
    <div class="kura_tm_portfolio">
      <div class="container">
        <div class="kura_tm_main_title">
          <span>Portfolio</span>
          <h3>Selected Works</h3>
        </div>
        <div
          class="portfolio_list gallery_zoom wow fadeInUp"
          data-wow-duration=".7s"
        >
          <swiper :options="swiperOptions" ref="mySwiper">
            <swiper-slide
              v-for="image in images"
              :key="image.src"
              class="swiper-slide"
            >
              <div class="list_inner">
                <div class="image">
                  <img src="/img/portfolio/410-460.jpg" alt="" />
                  <div class="main" :data-img-url="'' + image.src" />
                  <div class="overlay"></div>
                  <img class="svg" src="/img/svg/right-arrow.svg" alt="" />
                  <div class="details">
                    <h3>{{ image.title }}</h3>
                    <span>{{ image.sub }}</span>
                  </div>
                </div>
                <a
                  class="kura_tm_full_link popup-vimeo"
                  @click="onClick(image.videoId)"
                ></a>
              </div>
            </swiper-slide>
          </swiper>
          <div class="kura_tm_swiper_progress fill" slot="navigation">
            <div class="my_pagination_in">
              <span class="current"></span>
              <!-- <span class="pagination_progress"
                ><span class="all"><span></span></span
              ></span> -->
              <span class="total"></span>
            </div>
            <div class="my_navigation">
              <ul>
                <li>
                  <a class="my_prev" href="#"
                    ><img class="svg" src="/img/svg/right-arrow.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a class="my_next" href="#"
                    ><img class="svg" src="/img/svg/right-arrow.svg" alt=""
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <VideoPopup v-if="modal" :close="closeModal" :videoId="videoId" />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import VideoPopup from "./VideoPopup.vue";
// import Modal from "./Modal.vue";
export default {
  name: "Portfolio",
  components: {
    Swiper,
    SwiperSlide,
    VideoPopup,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: false,
        navigation: {
          prevEl: ".my_prev",
          nextEl: ".my_next",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
        // Some Swiper option/callback...
      },
      images: [
        {
          src: "/img/portfolio/1.jpg",
          thumbnail: "/img/portfolio/1.jpg",
          title: "Magic Art",
          sub: "youtube",
          videoId: "kSJYu4njW8s",
        },
        {
          src: "/img/portfolio/2.jpg",
          thumbnail: "/img/portfolio/2.jpg",
          title: "Bona Green",
          sub: "youtube",
          videoId: "7e90gBu4pas",
        },

        {
          src: "/img/portfolio/3.jpg",
          thumbnail: "/img/portfolio/3.jpg",
          title: "Leo Dandora",
          sub: "youtube",
          videoId: "KklbdVboeB4",
        },
        {
          src: "/img/portfolio/4.jpg",
          thumbnail: "/img/portfolio/4.jpg",
          title: "Folio Grasia",
          sub: "youtube",
          videoId: "7e90gBu4pas",
        },
        {
          src: "/img/portfolio/5.jpg",
          thumbnail: "/img/portfolio/5.jpg",
          title: "Viva Mercury",
          sub: "youtube",
          videoId: "KklbdVboeB4",
        },
        {
          src: "/img/portfolio/6.jpg",
          thumbnail: "/img/portfolio/6.jpg",
          title: "Santa Onera",
          sub: "youtube",
          videoId: "kSJYu4njW8s",
        },
      ],
      modal: false,
      videoId: null,
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    closeModal() {
      this.modal = false;
    },
    onClick(videoId) {
      this.videoId = videoId;
      this.modal = true;
    },
  },
};
</script>
