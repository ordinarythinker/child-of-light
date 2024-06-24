<template>
  <div class="progress-container">
    <div class="d-flex justify-space-between" style="margin-bottom: -99px !important;">
      <img src="/rectangle.svg"/>
      <img src="/rectangle.svg"/>
    </div>
    <div id="progress-text-container">
      <p class="progress-text">з вами буде краще</p>
      <p class="progress-text" style="padding-left: 100px;">долучайтесь!</p>
    </div>
    <div class="progress-values">
      <span id="max-value">{{ max }}</span>
    </div>
    <progress :value="value" :max="max"></progress>
    <div class="progress-icon" :style="{ left: iconLeft }">
      <span style="margin-top: -40px !important;">{{ value }}</span>
      <img :src="iconSrc" alt="Progress Icon">
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ['value', 'max', 'iconSrc'],
  computed: {
    progressPercent() {
      return (this.value / this.max) * 100;
    },
    iconLeft() {
      return `calc(${this.progressPercent}% - 12px)`;
    }
  }
}
</script>

<style scoped>
.progress-container {
  position: relative;
  width: 100%;
}
#progress-text-container {
  transform: rotate(-4deg);
  margin-bottom: -75px;
  margin-left: 23%;
}

.progress-text {
  font-family: "Madelyn", sans-serif;
  font-size: 42px;
  color: #6D12E2;
}

.progress-values {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -20px;
  font-size: 14px;
  color: black;
}

#max-value {
  position: absolute;
  right: 10px;
}

progress {
  width: 100%;
  height: 8px;
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  z-index: 1;
}

progress::-webkit-progress-bar {
  background-color: #FAE4CA;
  border-radius: 10px;
  overflow: hidden;
}

progress::-webkit-progress-value {
  background-color: #EB902D;
  border-radius: 10px 0 0 10px;
}

progress::-moz-progress-bar {
  background-color: #EB902D;
  border-radius: 10px 0 0 10px;
}

.progress-icon {
  position: absolute;
  top: 52%;
  transform: translateY(-15%);
  transition: left 0.3s ease;
  display: flex;
  align-items: center;
  z-index: 2;
  margin-left: -30px !important;
}

.progress-icon img {
  width: 50px;
  height: 50px;
}
</style>
