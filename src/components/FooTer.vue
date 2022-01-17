<template>
  <v-bottom-navigation
    class="black white--text"
    :value="value"
    color="primary"
    horizontal
  >
    <div v-for="(content, index) in contents" :key="index">
      <v-btn>
        <span class="white--text">{{ content.btnText }}</span>

        <v-icon class="white--text">mdi-{{ content.btnLogo }}</v-icon>
      </v-btn>
    </div>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      contents: [
        {
          btnText: "2022 release",
          btnLogo: "reload-alert",
        },
        {
          btnText: "Facebook Page",
          btnLogo: "facebook",
        },
        {
          btnText: "Instagram Page",
          btnLogo: "instagram",
        },
        {
          btnText: "Twitter Page",
          btnLogo: "twitter",
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>