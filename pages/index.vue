<template>
  <div class="d-flex flex-column">
    <Header/>
    <Problem/>
    <IdeaMission/>
    <Implementation/>
    <Team/>
    <Contacts/>
  </div>
</template>

<script>
import Problem from "../components/Stats";
import IdeaMission from "../components/IdeaMission";
import Team from "../components/Team";
import Header from "../components/Header";
export default {
  name: 'IndexPage',
  components: {Header, Team, IdeaMission, Problem}
}
</script>

<style>
.bg-red {
  background: red;
}

.bg-green {
  background: green;
}

.px-5w {
  padding-left: 5vw;
  padding-right: 5vw;
}

.my-50 {
  margin-top: 50px;
  margin-bottom: 50px;
}

.page-title {
  font-size: 32px;
  padding-bottom: 30px;
}

.f-22 {
  font-size: 22px;
}

.f-32 {
  font-size: 32px;
}

.max-width {
  width: 100% !important;
}

.footer_title {
  width: 100vw;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.main-layout {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.main-title {
  width: 35%;
}

.main-content {
  display: flex;
  flex-direction: column;
  width: 65%;
}

@media screen and (max-width: 1150px) {
  .page-title {
    font-size: 1.2em;
    padding-bottom: 30px;
  }

  .f-22 {
    font-size: 1em;
  }

  .f-32 {
    font-size: 1.1em;
  }
}

@media screen and (max-width: 920px) {
  .main-layout {
    flex-direction: column;
  }

  .main-title {
    width: 100%;
  }

  .main-content {
    width: 100%;
  }
}
</style>
