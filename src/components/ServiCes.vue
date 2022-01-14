<template>
  <div class="black">
    <div class="journey-line"></div>
    <div class="text-center bg-cus">
      <h1 class="white--text">{{ title }}</h1>
      <v-container class="grey lighten-5 black white--text">
        <v-layout>
          <v-row>
            <v-col
              v-for="(service, index) in Services"
              :key="index"
              cols="12"
              sm="4"
              class="black white--text"
            >
              <v-card
                data-aos="zoom-in"
                elevation="2"
                shaped
                tile
                class="mx-auto my-12 black white--text"
                id="card"
              >
                <v-card-title class="justify-center black white--text"
                  ><v-icon left class="black white--text"
                    >mdi-{{ service.icon }}</v-icon
                  >
                  {{ service.title }}</v-card-title
                >
                <v-card-text class="black white--text">{{
                  service.body
                }}</v-card-text>
                <v-btn depressed class="mb-6 black white--text">
                  <v-icon dark class="black white--text">
                    mdi-arrow-right-thin
                  </v-icon>
                  {{ service.btn }}
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Services",
      Services: [
        {
          title: "Web Development",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, sapiente. Et aliquid, libero officiis aliquam expedita recusandae minima similique aspernatur corporis molestiae maxime tempora, eligendi quibusdam. Illo, maiores quaerat! Totam?",
          btn: "Learn More",
          icon: "webpack",
        },

        {
          title: "Social Media Marketing",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, sapiente. Et aliquid, libero officiis aliquam expedita recusandae minima similique aspernatur corporis molestiae maxime tempora, eligendi quibusdam. Illo, maiores quaerat! Totam?",
          btn: "Learn More",
          icon: "account",
        },
        {
          title: "Automation Tasks",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, sapiente. Et aliquid, libero officiis aliquam expedita recusandae minima similique aspernatur corporis molestiae maxime tempora, eligendi quibusdam. Illo, maiores quaerat! Totam?",
          btn: "Learn More",
          icon: "checkbox-marked-circle-plus-outline",
        },
      ],
    };
  },
};
</script>
<style scoped>
#card {
  transition: transform 0.2s; /* Animation */
}
#card:hover {
  -webkit-box-shadow: 5px 5px 12px 2px rgba(0, 0, 0, 0.57);
  box-shadow: 5px 5px 12px 2px rgba(255, 0, 0, 0.57);
  border: 1px solid purple !important;
  transform: scale(
    1.05
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
.bg-cus {
  background-image: url(https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022/bkgd-triangle-right.png),
    url(https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022/bkgd-triangle-left.png),
    url(https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022/bkgd-triangle-right2.png);
  background-size: cover;
  background-color: black;
}

.journey-line {
  background-color: #000 !important;
  margin: 0px auto;
  width: 0%;
  height: 150px;
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to bottom, #ec008c, #f15b2a, rgba(0, 0, 0, 0)) 1
    100%;
}
</style>
