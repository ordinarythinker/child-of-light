  <template>
    <div id="sponsors" class="px-5w d-flex flex-column align-center" style="padding-top: 50px;">
      <div class="d-flex flex-row justify-space-between thin-divider" style="width: 100%;">
        <Logo/>

        <div class="d-flex flex-row">
          <button @click="goto('#sponsors')" class="top-navigation-button-style f-22 selected_border">Учасники</button>
          <div style="width: 24px; height: 1px;"/>
          <button @click="goto('#idea')" class="top-navigation-button-style f-22">Ідея</button>
          <div style="width: 24px; height: 1px;"/>
          <button @click="goto('#implementation')" class="top-navigation-button-style f-22">Реалізація</button>
          <div style="width: 24px; height: 1px;"/>
          <button @click="goto('#history')" class="top-navigation-button-style f-22">Історія</button>
          <div style="width: 24px; height: 1px;"/>
          <button @click="goto('#team')" class="top-navigation-button-style f-22">Команда</button>
          <div style="width: 24px; height: 1px;"/>
          <button @click="goto('#contacts')" class="top-navigation-button-style f-22">Контакти</button>
        </div>

        <a :href="monoLink" class="join-button button-background">Підтримати</a>
      </div>

      <div style="height: 120px;"></div>

      <div class="d-block">
        <div >
          <div class="pa-0 ma-0 text-center title-child" style="position: relative;">БУДУЄМО ДИТЯЧИЙ БУДИНОК <br>ДЛЯ <span id="title_accent">30 ДIТЕЙ</span>
            <br><div id="second-title" class="pa-0 ma-0 text-center title-child">ДОЛУЧИСЬ ДО БУДІВНИЦТВА</div>
          </div>
        </div>
      </div>

      <div style="height: 80px;"></div>

      <pre class="pa-0 ma-0 text-center f-22 ff">
        Дитя Світла — дитячий будинок:
        Шукаємо 300 донорів, які підтримають будівництво дитячого будинку.
        Ось ті, хто приєднався:
      </pre>

      <div style="height: 40px;"/>

      <a href="https://forms.gle/WGCvB8dvQpsVDqYm7" class="charity_button button-background">Доєднатися</a>

      <div style="height: 80px;"/>

      <div class="d-grid justify-start">
        <div
          v-for="(sponsor, index) in sponsors"
          :key="index"
          @click="showDialog($event, index)"
          class="person-wrapper"
        >
          <img :src="sponsor.avatar" :alt="sponsor.name" class="person-image-style"/>
        </div>

        <a href="https://forms.gle/WGCvB8dvQpsVDqYm7">
          <div id="plus-button" class="d-flex justify-center align-center">
            <img src="/plus.svg">
          </div>
        </a>
      </div>

      <div style="height: 120px;"/>

      <ProgressBar value="58" max="300" iconSrc="/child_of_light.svg"/>

      <div style="height: 100px;"/>

      <div v-if="isDialogVisible" class="dialog" :style="dialogStyle">
        <PersonDialog :name="sponsors[selectedIndex].name" :url="sponsors[selectedIndex].avatar"/>
        <div class="close-btn" @click="hideDialog">X</div>
      </div>
    </div>
  </template>

  <script>
  import Problem from "./Stats";
  import PersonDialog from "./PersonDialog";
  export default {
    name: "Header",
    components: {PersonDialog, Problem},
    data: () => {
      return {
        monoLink: "https://www.liqpay.ua/uk/checkout/i6903804290",
        sponsors: [
          {
            name: "Акру Валерія",
            avatar: '/w1.jpg'
          },
          {
            name: "Трухачова Анастасія",
            avatar: '/w2.jpg'
          },
          {
            name: "Марчук Інна",
            avatar: '/w2.jpg'
          },
          {
            name: "Дондик Олександр",
            avatar: "/m4.jpg"
          },
          {
            name: "Indyk Maksym",
            avatar: "/m5.jpg"
          },
          {
            name: "Руслан Валіахметов",
            avatar: "/m6.jpg"
          },
          {
            name: "Герасименко Юлія",
            avatar: '/w4.jpg'
          },
          {
            name: "Невойт Олександр Миколайович",
            avatar: "/m4.jpg"
          },
          {
            name: "Орловська Анастасія Сергіївна",
            avatar: '/w5.jpg'
          },
          {
            name: "Хальметова Тетяна Олександрівна",
            avatar: '/w6.jpg'
          },
          {
            name: "Петрук Сергій",
            avatar: "/m8.jpg"
          },
          {
            name: "Машницький Олександр Петрович",
            avatar: "/m3.jpg"
          },
          {
            name: "Вергун Олена Олександрівна",
            avatar: '/w7.jpg'
          },
          {
            name: "Жицька Катерина Федорівна",
            avatar: '/w8.jpg'
          },
          {
            name: "Мадай Денис Вікторович",
            avatar: "/m1.jpg"
          },
          {
            name: "Твердовська Альона Іванівна",
            avatar: '/w9.jpg'
          },
          {
            name: "Костюк Юлія Сергіївна",
            avatar: '/w10.jpg'
          },
          {
            name: "Сазонов Олексій Валерійович",
            avatar: '/w11.jpg'
          },
          {
            name: "Вергун Олена Олександрівна",
            avatar: '/w12.jpg'
          },
          {
            name: "Ладутько Анна Олексіївна",
            avatar: '/w1.jpg'
          },
          {
            name: "Манастирський Михайло",
            avatar: "/m2.jpg"
          },
          {
            name: "Зубенко Володимир",
            avatar: "/m5.jpg"
          },
          {
            name: "Акіньшина Любов Володимирівна",
            avatar: '/w2.jpg'
          },
          {
            name: "Ірина Науменко",
            avatar: '/w3.jpg'
          },
          {
            name: "Юрчак Наталія",
            avatar: '/w4.jpg'
          },
          {
            name: "Войтун Анастасія",
            avatar: '/w5.jpg'
          },
          {
            name: "Гончаренко Олексій Юрійович",
            avatar: "/m12.jpg"
          },
          {
            name: "Ваврищук Марія Анатоліївна",
            avatar: '/w6.jpg'
          },
          {
            name: "Федьора Ігор Валерійович",
            avatar: '/w7.jpg'
          },
          {
            name: "Рімович Леся",
            avatar: '/w8.jpg'
          },
          {
            name: "Тутка Дарʼя Вікторівна",
            avatar: '/w9.jpg'
          },
          {
            name: "Dima Lysakivskyi",
            avatar: '/m4.jpg'
          },
          {
            name: "Стрільчук Володимир Сергійович",
            avatar: "/m1.jpg"
          },
          {
            name: "Микола Пуха Михайлович",
            avatar: "/m5.jpg"
          },
          {
            name: "Віталій",
            avatar: "/m11.jpg"
          },
          {
            name: "Ксьонзенко Сергій",
            avatar: "/m12.jpg"
          },
          {
            name: "Фень Сергій Миколайович",
            avatar: "/m10.jpg"
          },
          {
            name: "Багмут Марія Володимирівна",
            avatar: '/w10.jpg'
          },
          {
            name: "Лев Гаваец",
            avatar: "/m9.jpg"
          },
          {
            name: "Куца Наташа Петрівна",
            avatar: '/w11.jpg'
          },
          {
            name: "Зазимко Сергій Володимирович",
            avatar: "/m8.jpg"
          },
          {
            name: "Ірина Володимирівна Радзиківська",
            avatar: '/w12.jpg'
          },
          {
            name: "Вергун Олена Олександрівна",
            avatar: '/w1.jpg'
          },
          {
            name: "Дубовик Андрій",
            avatar: "/m7.jpg"
          },
          {
            name: "Alex Prepiialo",
            avatar: "/m6.jpg"
          },
          {
            name: "Сергій Валько",
            avatar: "/m5.jpg"
          },
          {
            name: "Гук Богдан Андрійович",
            avatar: "/m4.jpg"
          },
          {
            name: "Довга Олена Валентинівна",
            avatar: '/w2.jpg'
          },
          {
            name: "Наконечний Григорій Юрійович",
            avatar: "/m3.jpg"
          },
          {
            name: "Кацуба Александр Володимирович",
            avatar: "/m2.jpg"
          },
          {
            name: "Пономаренко Олексій Владиславович",
            avatar: "/m1.jpg"
          },
          {
            name: "Ваврищук Марія Анатоліївна",
            avatar: '/w3.jpg'
          },
          {
            name: "Шлюхарчук Володимир Тарасович",
            avatar: "/m13.jpg"
          },
          {
            name: "Рец Антон Едуардович",
            avatar: "/m12.jpg"
          },
          {
            name: "Новик Артем Олександрович",
            avatar: "/m11.jpg"
          },
          {
            name: "Василий",
            avatar: "/m10.jpg"
          },
          {
            name: "Скрипнюк Тарас Васильович",
            avatar: "/m9.jpg"
          },
          {
            name: "Олександр",
            avatar: "/m8.jpg"
          },
          {
            name: "Віталій",
            avatar: "/m7.jpg"
          },
          {
            name: "Ярослав Жабко",
            avatar: "/m6.jpg"
          }
        ],
        isDialogVisible: false,
        selectedIndex: null,
        dialogStyle: {
          top: '0px',
          left: '0px',
        },
      }
    },
    methods: {
      goto(routeHash) {
        this.$router.replace({ name: this.$route.name, hash: routeHash });
      },
      showDialog(event, index) {
        const rect = event.target.getBoundingClientRect();
        this.dialogStyle = {
          top: `${rect.top + window.scrollY + rect.height}px`,
          left: `${rect.left + window.scrollX}px`,
        };
        this.selectedIndex = index;
        this.isDialogVisible = true;
      },
      hideDialog() {
        this.isDialogVisible = false;
      },
    }
  }
  </script>

<style scoped>
  .dialog {
    position: absolute;
    display: block;
    z-index: 10;
  }
  .dialog .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background: #fff;
    color: #000;
    padding: 2px 5px;
    border-radius: 3px;
  }

  .thin-divider {
    border-bottom: 1px solid #FAE4CA !important;
  }

  .selected_border {
    border-bottom: 2px solid #EB902D !important;
  }

  #plus-button {
    width: 160px;
    height: 160px;
    background: #FAE4CA;
    border-radius: 8px !important;
  }

  .ff {
    font-family: "Onest", serif;
  }

  .top-navigation-button-style {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .join-button {
    margin-bottom: 8px;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 0 20px;
  }

  .button-background {
    background-color: #3344BC;
    border: none;
    color: #E8B543 !important;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    border-radius: 40px;
  }

  .d-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    grid-auto-rows: minmax(120px, auto);
  }

  .charity_button {
    color: black;
    padding: 10px 20px;
    display: inline-block;
    font-size: 22px;
  }

  .person-image-style {
    width: 160px !important;
    height: 160px !important;
    border-radius: 8px !important;
    border: 2px solid #FAE4CA !important;
  }

  .title-child {
    font-family: "Kyiv Type", sans-serif;
    font-size: 60px;
  }

  #second-title {
    margin-top: -60px !important;
    text-align: center;
    width: 100%;
    position: absolute;
  }

  #title_accent {
    font-family: "Madelyn", sans-serif;
    font-size: 90px;
    color: blue;
  }

  a {
    text-decoration: none;
    color: black !important;
  }
</style>
