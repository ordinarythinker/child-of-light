<template>
  <div id="team" class="px-5w d-flex flex-column">
    <div style="height: 50px;"></div>

    <div class="main-layout">
      <div class="main-title">
        <p class="page-title">{{ title }}</p>
      </div>


      <div class="main-content justify-center align-center">
        <div class="d-grid">
          <TeamMember v-for="member in members" :key="member.name" :name="member.name" :title="member.title" :url="member.url"/>
        </div>
      </div>
    </div>

    <div style="height: 50px;"></div>
  </div>
</template>

<script>
import TeamMember from "./TeamMember";
export default {
  name: "Team",
  components: {TeamMember},
  data: () => {
    return {
      title: 'Наша команда',
      members: [
        {
          name: 'Манастирський Михайло',
          title: 'загальні питання та медіа',
          url: '/manastyr.jpg'
        },
        {
          name: 'Рябчун Олександр',
          title: 'загальні питання та будівництво',
          url: '/o_riabch.jpg'
        },
        {
          name: 'Рябчун Олена',
          title: 'організація процесу освіти, методика виховання',
          url: '/e_riabch.png'
        },
        {
          name: 'Трухачова Анастасія',
          title: 'адміністратор “Дитя Світла”, загальні питання',
          url: '/nast.jpg'
        },
        {
          name: 'Акру Валерія',
          title: 'юридичні питання та фінанси',
          url: '/vlr_akru.png'
        },
        {
          name: 'Сокол Ігор',
          title: '',
          url: '/sokol.png'
        },
        {
          name: 'Костюк Юлія',
          title: '',
          url: '/u_kostiu.png'
        },
      ]
    }
  }
}
</script>

<style scoped>
.d-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  grid-auto-rows: minmax(200px, auto);
}

@media screen and (max-width: 700px) {
  .d-grid {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: minmax(auto, auto);
  }
}
</style>
