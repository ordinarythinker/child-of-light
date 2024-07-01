<template>
  <div
    id="idea"
    class="max-width px-5w d-flex flex-column"
    style="background: #FAE4CA;"
  >
    <div style="height: 100px;"></div>

    <div class="d-flex flex-column">
      <div class="main-layout">
        <div class="main-title">
          <p class="page-title">{{ ideaTitle }}</p>
        </div>

        <div class="main-content">
          <p class="page-title">{{ ideaDescription }}</p>
        </div>
      </div>

      <div style="height: 80px;"></div>

      <div class="main-layout">
        <div class="main-title">
          <p class="page-title">{{ detailed }}</p>
        </div>

        <div class="main-content">
          <p class="pa-0 ma-0 page-title pb-24">{{ detailedDescription }}</p>

          <div class="player-container">
            <vue-core-video-player
              controls="auto"
              src="/child_of_light.mp4"
              cover="/video-cover.png"
            />
          </div>
        </div>
      </div>

      <div style="height: 80px;"></div>

      <div class="main-layout">
        <div class="main-title">
          <p class="page-title">{{mission}}</p>
        </div>

        <div class="main-content">
          <p class="pa-0 ma-0 page-title ">{{missionDescription}}</p>
        </div>
      </div>

      <div style="height: 40px;"></div>

      <div class="main-layout">
        <div class="main-title">
          <p class="pa-0 ma-0 pb-24 page-title">{{location}}</p>
        </div>

        <div class="main-content">
          <p class="pa-0 ma-0 page-title">{{locationDescription}}</p>

          <p class="pa-0 ma-0 page-title">{{deadlines }}</p>
        </div>
      </div>

      <div style="height: 100px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IdeaMission",
  data: () => {
    return {
      ideaTitle: "Ідея",
      ideaDescription: "Обʼєднати 300 людей, які так само, як і ми, відчувають гостру потребу допомогти дітям сиротам в Україні. Донорів, які регулярно, щомісячно, будуть жертвувати від 1000 гривень на підтримку дитячого будинку, а також стануть наставниками для дітей.",
      detailed: 'Дізнавайтесь\nбільше',
      detailedDescription: 'Дитячий будинок «Дитя Світла»',
      mission: 'Місія',
      missionDescription: "Крім базових потреб допомогти дітям з найважливішим: знайти сімʼю, отримати гарну сучасну освіту та правильні цінності, знайти своє місце в житті.",
      location: 'Місце реалізації',
      locationDescription: 'село Мотижин, Макарівський район, Київська область',
      deadlines: 'Терміни: 2020–2025'
    }
  }
}
</script>

<style scoped>

.pb-24 {
  padding-bottom: 24px;
}

</style>
