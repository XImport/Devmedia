<template>
  <div black>
    <AppNav />
    <div class="mt-12 bg-cus">
      <div class="banner">
        <div class="banner-text">
          <h1>{{ title }}</h1>
          <h3>{{ body }}</h3>
          <h6>{{ paragrapth }}</h6>
        </div>
      </div>

      <div class="journey-line"></div>
      <div>
        <v-container class="pa-12">
          <v-layout>
            <v-row>
              <v-col
                id="card"
                v-for="(content, index) in contents"
                :key="index"
                cols="12"
                sm="12"
                class="white--text"
              >
                <v-card
                  class="animate__animated animate__fadeInUp"
                  height="200px"
                  dark
                  black
                >
                  <v-card-title class="justify-center">{{
                    content.title
                  }}</v-card-title>
                  <v-card-text class="text-center">
                    {{ content.body }}
                  </v-card-text>
                  <v-card-actions class="justify-center">
                    <v-btn elevation="2" outlined plain raised rounded text>
                      <v-icon left> mdi-{{ content.icon }} </v-icon>
                      {{ content.btnTitle }}
                    </v-btn>
                  </v-card-actions>
                  <div></div>
                </v-card>
              </v-col>
            </v-row>
          </v-layout>
        </v-container>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import appNav from "@/components/NavBar.vue";
import appFooter from "@/components/FooTer.vue";
export default {
  data() {
    return {
      title: "About Us",
      body: "some body text",
      paragrapth: "some text here ....",
      contents: [
        {
          title: "Who Are We ??",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam odit numquam consequuntur voluptatibus repudiandae officia asperiores quasi esse eos delectus dolorum, iure sit, iusto natus aut cumque fugiat ipsum!",
          btnTitle: "learn More",
          icon: "information",
        },
        {
          title: "Our Philosophie",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam odit numquam consequuntur voluptatibus repudiandae officia asperiores quasi esse eos delectus dolorum, iure sit, iusto natus aut cumque fugiat ipsum!",
          btnTitle: "learn More",
          icon: "head",
        },
        {
          title: "Why You Should Choose Us ?",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam odit numquam consequuntur voluptatibus repudiandae officia asperiores quasi esse eos delectus dolorum, iure sit, iusto natus aut cumque fugiat ipsum!",
          btnTitle: "learn More",
          icon: "domain",
        },
        {
          title: "How Can We Help Your Business ?",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam odit numquam consequuntur voluptatibus repudiandae officia asperiores quasi esse eos delectus dolorum, iure sit, iusto natus aut cumque fugiat ipsum!",
          btnTitle: "learn More",
          icon: "domain",
        },
      ],
    };
  },
  components: {
    AppNav: appNav,
    AppFooter: appFooter,
  },
};
</script>

<style  scoped>
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

.bg-cus {
  background-image: url(https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022/bkgd-triangle-right.png),
    url(https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022/bkgd-triangle-left.png),
    url(https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022/bkgd-triangle-right2.png);
  background-size: cover;
  background-color: black;
}
h1 {
  font-size: 60px;
}
h3 {
  font-size: 32px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 4px;
}
h6 {
  font-size: 22px;
}

.banner h1,
.banner h3,
.banner h6 {
  margin: 0;
  text-shadow: 2px 2px 6px #000;
  text-align: left !important;
  justify-content: left !important;
}

.banner {
  color: white;
  background-image: url("https://www.pluralsight.com/content/dam/pluralsight2/landing-pages/product/cloud-labs/image1_cloud-labs.png");
  background-position: right;
  background-color: #000;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

#card {
  transition: all 0.2s; /* Animation */
}
#card:hover {
  transform: scale(
    1.05
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>