<template>
  <div class="max-width px-5w my-50 d-flex flex-column">
    <v-divider inset class="sections-separator"></v-divider>
    <div style="width: 1px; height: 30px;"/>
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
              <p class="pa-0 ma-0 description-text">{{ item.description }}</p>
            </div>
          </div>

          <div id="absolute-container">
            <div id="absolute-inner-container" class="d-flex flex-column">
              <div id="inner-relative">
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

.description-text {
  font-size: 22px;
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

#absolute-inner-container {
  padding-bottom: 80px !important;
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

#inner-relative {
  position: relative;
  padding-bottom: 110px;
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

@media screen and (max-width: 790px) {
  .number-item-title {
    font-size: 42px;
  }

  #absolute-inner-container {
    padding-bottom: 20px !important;
  }

  #absolute-container {
    margin-bottom: 120px;
  }

  #inner-relative {
    position: relative;
    padding-bottom: 100px;
  }
}

@media screen and (max-width: 720px) {
  .number-item-title {
    font-size: 32px;
  }

  #absolute-inner-container {
    padding-bottom: 0 !important;
  }

  .absolute-title {
    font-size: 73px;
  }

  #absolute-subtitle {
    font-size: 0.8em;
  }

  #absolute-container {
    margin-bottom: 100px;
  }

  #inner-relative {
    position: relative;
    padding-bottom: 100px;
  }
}

@media screen and (max-width: 665px) {
  .number-item-title {
    font-size: 28px;
  }

  .absolute-title {
    font-size: 63px;
  }

  #absolute-subtitle {
    font-size: 0.8em;
  }

  .description-text {
    font-size: 0.8em;
  }

  #absolute-container {
    margin-bottom: 100px;
  }

  #inner-relative {
    position: relative;
    padding-bottom: 80px;
  }
}

@media screen and (max-width: 600px) {
  .number-item-title {
    font-size: 28px;
  }

  .absolute-title {
    font-size: 45px;
  }

  #absolute-subtitle {
    font-size: 0.6em;
  }

  #absolute-container {
    margin-bottom: 110px;
    padding-left: 20px;
  }

  #inner-relative {
    position: relative;
    padding-bottom: 60px;
  }

  #arrow {
    height: 140px;
    width: auto;
  }
}

@media screen and (max-width: 554px) {
  .number-item-title {
    font-size: 28px;
  }

  #absolute-container {
    margin-bottom: 150px;
  }

  #arrow {
    height: 120px;
    width: auto;
  }
}

@media screen and (max-width: 554px) {
  .number-item-title {
    font-size: 28px;
  }

  .absolute-title {
    font-size: 45px;
  }

  #absolute-subtitle {
    font-size: 0.6em;
  }

  #absolute-container {
    margin-bottom: 150px;
  }

  #inner-relative {
    position: relative;
    padding-bottom: 60px;
  }

  #arrow {
    height: 120px;
    width: auto;
  }
}

@media screen and (max-width: 470px) {
  .number-item-title {
    font-size: 24px;
  }

  .absolute-title {
    font-size: 35px;
  }

  #absolute-subtitle {
    font-size: 0.5em;
  }

  #absolute-container {
    margin-bottom: 120px;
  }

  #inner-relative {
    position: relative;
    padding-bottom: 40px;
  }

  #arrow {
    height: 100px;
    width: auto;
  }
}
</style>
