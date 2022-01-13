<template>
  <v-app>
    <AppNav />
    <AppCarousel />
    <AppServices />
    <AppFrameworks />
    <AppSocials />
  </v-app>
</template>

<script>
import appNav from "./components/NavBar";
import appCarousel from "./components/CarouSel";
import appServices from "./components/ServiCes";
import appFramworks from "./components/FramWorks";
import appSocials from "./components/SocialMedia"
export default {
  name: "App",

  components: {
    AppNav: appNav,
    AppCarousel: appCarousel,
    AppServices: appServices,
    AppFrameworks: appFramworks,
    AppSocials : appSocials
  },

  data: () => ({
    //
  }),
};
</script>
