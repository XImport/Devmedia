<template>
  <div>
    <v-app-bar app color="black" dark>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title>DevMedia</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <div v-for="(item, index) in items" :key="index">
        <v-btn text class="hidden-xs-only">
          <span class="mr-2">
            <v-icon dark right> home-report </v-icon>
            {{ item.title }}
          </span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <div>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
    items: [
      { title: "Home", icon: "mdi-home" },
      { title: "Services", icon: "mdi-account-wrench-outline" },
      { title: "About", icon: "mdi-information" },
      { title: "Contact", icon: "mdi-email" },
    ],
  }),
};
</script>

<style scoped>
.btn {
  outline: none;
  box-shadow: none;
}
</style>
