<template>
  <div class="px-5w my-50 d-flex flex-column">
    <v-divider inset class="sections-separator"></v-divider>
    <div class="main-layout">
      <div class="main-title">
        <p class="page-title">{{ title }}</p>
      </div>

      <div class="main-content">
        <div id="relative-container">
          <img src="/children.png">

          <div id="numbers-row">
            <div v-for="item in numbers" :key="item.number" class="number-item">
              <p class="pa-0 ma-0 number-item-title">{{ item.number }}</p>
              <p class="pa-0 ma-0 f-22">{{ item.description }}</p>
            </div>
          </div>

          <div id="absolute-container">
            <div class="d-flex flex-column" style="padding-bottom: 80px !important;">
              <div style="position: relative; padding-bottom: 110px;">
                <p id="absolute-title-1" class="pa-0 ma-0 absolute-title">
                  {{absoluteTitle1}}
                </p>
                <p id="absolute-title-2" class="pa-0 ma-0 absolute-title">
                  {{absoluteTitle2}}
                </p>
              </div>

              <p id="absolute-subtitle" class="pa-0 ma-0"> {{absoluteSubtitle}} </p>
            </div>

            <img id="arrow" src="/arrow.svg"/>
          </div>
        </div>

        <div id="problem-description">
          <p class="pa-0 ma-0 f-32">{{ problemStatement }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stats",
  data: () => {
    return {
      title: "Статистика",
      numbers: [
        {
          number: '8 512',
          description: 'дітей залишилися без батьківського піклування'
        },
        {
          number: '1 476',
          description: 'дітей стали сиротами'
        },
        {
          number: '93 000',
          description: 'всього дітей, які сьогодні потребують допомоги'
        }
      ],
      problemStatement: 'Тема дітей-сиріт в Україні стала надзвичайно важливою. Особливо після повномасштабного вторгнення',
      absoluteTitle1: 'з 24/02/2022',
      absoluteTitle2: 'по 01/04/2023',
      absoluteSubtitle: '*за даними Національної соціальної сервісної служби України'
    }
  }
}
</script>

<style scoped>
#relative-container {
  position: relative;
  display: flex;
  flex-direction: column;
}

#absolute-container {
  position: absolute;
  display: flex;
  bottom: 0;
  align-content: end;
  margin-bottom: 23%;
  padding-left: 40px;
}

#arrow {
  margin-left: 30px;
  transform: rotate(-11deg);
}

#absolute-title-1 {
  position: absolute;
  margin-top: -60px !important;
}

#absolute-title-2 {
  padding-left: 80px !important;
  padding-right: 20px;
  position: absolute;
}

#absolute-subtitle {
  color: white;
}

.absolute-title {
  font-family: "Madelyn", sans-serif;
  color: blue;
  font-size: 103px;
}

#numbers-row {
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-evenly;
  flex: 1;
  flex-basis: 0;
}

.number-item {
  flex: 1;
  display: flex;
  flex-direction: column;
}

#problem-description {
  margin-top: 40px;
  margin-bottom: 100px;
}

.number-item-title {
  font-family: "Kyiv Type", sans-serif;
  font-size: 62px;
  padding-bottom: 22px;
}

.sections-separator {
  margin-left: 50px !important;
  margin-right: 50px !important;
  border-top-width: 1px !important;
  border-top-color: #FAE4CA !important;
}

.content-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
}
</style>
