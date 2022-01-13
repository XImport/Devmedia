<template>
  <div class="black">
    <div class="journey-line"></div>
    <div class="text-center bg-cus">
      <h1 class="purple--text">{{ title }}</h1>
      <v-container class="grey lighten-5 black white--text">
        <v-layout>
          <v-row>
            <v-col
              v-for="(framework, index) in Frameworks"
              :key="index"
              cols="12"
              sm="6"
              class="black white--text"
            >
              <v-card
                elevation="2"
                shaped
                tile
                class="mx-auto my-12 black white--text"
                id="card"
              >
                <v-avatar size="56">
                  <img
                    alt="user"
                    :src="framework.img"
                  />
                </v-avatar>
                <v-card-title class="justify-center black white--text"
                  ><v-icon left class="black white--text"
                    >mdi-{{ framework.icon }}</v-icon
                  >
                  {{ framework.title }}</v-card-title
                >
                <v-card-text class="black white--text">{{
                  framework.body
                }}</v-card-text>
                <v-btn depressed class="mb-6 black white--text">
                  <v-icon dark class="black white--text">
                    mdi-arrow-right-thin
                  </v-icon>
                  {{ framework.btn }}
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
      title: "Trending Technologies",
      Frameworks: [
        {
          title: "VueJS",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, sapiente. Et aliquid, libero officiis aliquam expedita recusandae minima similique aspernatur corporis molestiae maxime tempora, eligendi quibusdam. Illo, maiores quaerat! Totam?",
          btn: "Learn More",
          icon: "vuejs",
          img : "https://images.ctfassets.net/ooa29xqb8tix/RrX9HCiZ8qPoIpJSlHphR/f9778b44e2b768d31fafb4ac70956682/vue-logo.png?w=400&q=50"
        },

        {
          title: "ReactJS",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, sapiente. Et aliquid, libero officiis aliquam expedita recusandae minima similique aspernatur corporis molestiae maxime tempora, eligendi quibusdam. Illo, maiores quaerat! Totam?",
          btn: "Learn More",
          icon: "react",
          img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3xvEmDO5XMQ1O7Rgk7Rrf8QKzrN_3jo0co5gTo0lW4G-t0NRcOi2MwJO1XpYzU4CsUA&usqp=CAU"
        },
        {
          title: "SQL",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, sapiente. Et aliquid, libero officiis aliquam expedita recusandae minima similique aspernatur corporis molestiae maxime tempora, eligendi quibusdam. Illo, maiores quaerat! Totam?",
          btn: "Learn More",
          icon: "database-cog",
          img: "https://thumbs.dreamstime.com/b/sql-database-icon-logo-design-ui-ux-app-gold-inscription-dark-black-background-96842123.jpg"
        },
        {
          title: "Python",
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, sapiente. Et aliquid, libero officiis aliquam expedita recusandae minima similique aspernatur corporis molestiae maxime tempora, eligendi quibusdam. Illo, maiores quaerat! Totam?",
          btn: "Learn More",
          icon: "vector-polyline-edit",
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVDJgFhyaPSObMtrBjvTBs6VnRu64Nx1AzGnCcSqrx1BoDIYBwmmfTDVdFrmG1uEl6qk&usqp=CAU"
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
