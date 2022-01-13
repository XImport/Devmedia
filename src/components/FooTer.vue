<template>
  <v-bottom-navigation
    class="black white--text"
    :value="value"
    color="primary"
    horizontal
  >
    <v-btn>
      <span class="white--text">2022 release</span>

      <v-icon class="white--text">mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span class="white--text">top of the page</span>

      <v-icon class="white--text">mdi-arrow-up</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data: () => ({ value: 1 }),
};
</script>

<style scoped>
</style>