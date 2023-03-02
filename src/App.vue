<template>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      keepAliveData: ["manage"],
    };
  },
  // computed: {
  //   ...mapState(["isShowLoading"]),
  // },
};
</script>

<style>
.content {
  height: 100vh;
  width: 100vw;
}
</style>
