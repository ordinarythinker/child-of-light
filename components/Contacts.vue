<template>
  <div
    id="contacts"
    class="max-width px-5w d-flex flex-column"
    style="background: #E8E0F3;"
  >
    <div style="height: 80px;"/>

    <div class="d-flex flex-column">
      <div class="main-layout">
        <div class="d-flex flex-column left-part">
          <p class="page-title">{{ title }}</p>
          <Contact v-for="contact in contacts" :key="contact.phone" :name="contact.name" :phone="contact.phone"/>
          <v-spacer/>
          <div style="height: 40px;"/>
        </div>

        <div class="d-flex flex-column justify-start right-part">
          <p class="pa-0 ma-0 page-title" >{{supportTitle}}</p>
          <div style="height: 40px;"/>
          <p class="pa-0 ma-0" v-html="bankAccount"></p>
          <div style="height: 20px;"/>
          <NuxtLink to="/agreement" class="links-no-decoration">Договір публічної оферти</NuxtLink>
          <div style="height: 20px;"/>

          <!-- <p class="pa-0 ma-0 f-22">{{or}}</p>
          <div style="height: 20px;"></div>
          <div class="d-flex align-center">
            <img id="qr" src="/qr.png" class="align-self-center">
          </div>-->

          <div style="height: 80px;"/>
        </div>
      </div>

      <div style="height: 30px;"/>

      <span>&copy; {{ new Date().getFullYear() }} Дитя світла</span>
    </div>

    <div style="height: 30px;"/>
  </div>
</template>

<script>
import Contact from "./Contact";
export default {
  name: "Contacts",
  components: {Contact},
  data: () => {
    return {
      title: 'Контакти',
      contacts: [
        {
          name: 'Манастирський Михайло',
          phone: '+380 97 984 7252'
        },
        {
          name: 'Рябчун Олександр',
          phone: '+380 67 685 8585'
        },
        {
          name: 'Рябчун Олена',
          phone: '+380 67 768 2585'
        },
        {
          name: 'Трухачова Анастасія',
          phone: '+380 50 946 1683'
        },
        {
          name: 'Акру Валерія',
          phone: '+380 97 683 6266'
        }
      ],
      supportTitle: "Підтримати проект",
      bankAccount: "Найменування отримувача: БО БФ ЧАЙЛД ОФ ЛАЙТ <br>" +
        "Код отримувача: 43546477 <br>" +
        "Рахунок отримувача: UA323052990000026005030141238.<br>" +
        "Назва банку: АТ КБ \"ПРИВАТБАНК\"",
      or: "Або через QR-код:"
    }
  }
}
</script>

<style scoped>
#qr {
  margin-left: 50px;
  width: 200px;
  height: auto;
}

.links-no-decoration {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.left-part {
  width: 40%;
}

.right-part {
  width: 60%;
}

@media screen and (max-width: 920px) {
  .left-part {
    width: 100%;
  }

  .right-part {
    width: 100%;
  }

}

</style>
