<template>
  <div class="loader-container">
    <span class="loader"></span>
  </div>
</template>

<script>
export default {
  name: 'DefaultSpinner'
}
</script>

<style lang="scss" scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.loader {
  width: 71px;
  height: 71px;
  border: 5px solid #fff;
  border-bottom-color: #ffaa05;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
