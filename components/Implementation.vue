<template>
  <div id="implementation" class="d-flex flex-column" style="padding-left: 5vw;">
    <div style="height: 100px;"></div>

    <div class="main-layout">
      <div class="main-title">
        <p class="page-title">{{ title }}</p>
      </div>

      <div class="main-content" style="padding-right: 5vw;">
        <div class="d-flex flex-column">
          <p id="title-font" class="ma-0 pa-0">{{ subtitle1 }}</p>
          <p id="title-font2" class="ma-0 pa-0">{{ subtitle2 }}</p>
        </div>

        <div style="height: 15px;"></div>

        <img id="house" src="/building.jpg"/>

        <div style="height: 45px;"></div>

        <p class="ma-0 pa-0 f-32">{{ description1 }}</p>
        <div style="height: 25px;"></div>
        <p class="ma-0 pa-0 f-32">{{ description2 }}</p>
      </div>
    </div>

    <div style="height: 80px;"></div>

    <div class="d-flex">
      <p class="ma-0 pa-0 f-32">{{ visionTitle }}</p>

      <div style="width: 40px;"/>

      <img src="/arrow_left.svg" class="arrow-buttons" @click="goPrev"/>
      <div style="width: 30px;"/>
      <img src="/arrow_right.svg" class="arrow-buttons" @click="goNext"/>
    </div>

    <div style="width: 30px;"/>

    <div class="swiper swiper-container">
      <div class="swiper-wrapper">
        <img v-for="(image, index) in images" :key="index" :src="image" class="swiper-slide slide-image"/>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <div style="height: 80px;"/>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: "Implementation",
  data: () => {
    return {
      title: 'Реалізація',
      subtitle1: 'БУДІВНИЦТВО РОЗПОЧАЛОСЬ У 2020 РОЦІ ТА ТРИВАЛО',
      subtitle2: 'ДО ПОЧАТКУ ВIЙНИ',
      description1: 'В лютому 2022 року територія дитячого будинку була окупована. На той час проект підтримували 120 донорів. В 2024 році будівельні роботи відновили. Сьогодні вже зведено третій поверх.',
      description2: 'До літа 2025 року плануємо завершити будівництво, оздоблювальні та ремонтні роботи, закупити меблі, устаткування, найняти персонал та офіційно відкрити будинок для дітей, які потребують допомоги.',
      visionTitle: 'Такою ми бачимо нашу мрію',
      images: ['/viz1.jpg', '/viz2.jpg', '/viz3.jpg', '/viz4.jpg', '/viz5.jpg'],
      swiper: null
    }
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
  methods: {
    goNext() {
      if (this.swiper) {
        this.swiper.slideNext();
      }
    },
    goPrev() {
      if (this.swiper) {
        this.swiper.slidePrev();
      }
    },
  }
}
</script>

<style scoped>
.arrow-buttons {
  width: 22px;
  height: auto;
}

#house {
  border-radius: 8px;
  width: 780px;
  height: auto;
}

#title-font {
  font-family: "Kyiv Type", sans-serif;
  font-size: 45px;
}

#title-font2 {
  font-family: "Madelyn", sans-serif;
  font-size: 70px;
  color: #6D12E2;
  width: 100%;
  text-align: right;
  transform: rotate(-2deg);
}

.swiper {
  width: 100%;
}

.slide-image {
  height: 344px !important;
  width: 611px !important;
  border-radius: 8px;
}

@media screen and (max-width: 1100px) {
  #title-font2 {
    font-size: 50px;
  }
}

@media screen and (max-width: 720px) {
  #house {
    width: 100% !important;
    height: auto;
  }

  .slide-image {
    width: 96% !important;
    height: auto !important;
  }
}

@media screen and (max-width: 600px) {
  #title-font {
    font-size: 20px;
  }

  #title-font2 {
    font-size: 30px;
  }
}
</style>
