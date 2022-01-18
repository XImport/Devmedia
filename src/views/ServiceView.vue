<template>
  <div class="black">
    <AppNav class="pa-8" />

    <div class="mt-12 bg-cus">
      <section id="service">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section_title text-center">
                <h2 class="white--text">Our Services</h2>
                <div class="brand_border">
                  <i class="fa fa-minus" aria-hidden="true"></i>
                  <i class="fas fa-handshake"></i>
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </div>
                <p class="white--text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. <br />Aenean massa. Cum
                  sociis natoque penatibus et magnis dis parturient montes
                </p>
                <div>
                  <div class="journey-line"></div>
                  <v-container class="grey lighten-5 black white--text" fluid>
                    <v-layout>
                      <v-row>
                        <v-col
                          v-for="(content, index) in contents"
                          :key="index"
                          cols="12"
                          sm="4"
                          class="black white--text"
                        >
                          <v-card
                            data-aos="zoom-in"
                            elevation="2"
                            shaped
                            outlined
                            tile
                            class="mx-auto my-12 black white--text br--purple"
                            id="card"
                          >
                            <v-card-title
                              class="justify-center black white--text"
                              ><v-icon left class="black white--text"
                                >mdi-{{ content.icon }}</v-icon
                              >
                              {{ content.title }}</v-card-title
                            >
                            <v-icon left class="black white--text"
                              >mdi-{{ content.serviceIcon }}</v-icon
                            >
                            <v-card-text class="black white--text">{{
                              content.body
                            }}</v-card-text>
                            <v-btn depressed class="mb-6 black white--text" :to="content.url">
                              <v-icon dark class="black white--text">
                                mdi-arrow-right-thin
                              </v-icon>
                              {{ content.btn }}
                            </v-btn>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-layout>
                  </v-container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--/END SERVICE AREA-->
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
      contents: [
        {
          title: "Web Devlopment",
          body: "Greyhound divisely hello coldly fonwderfully",
          icon: "button",
          btn: "learn more",
          serviceIcon: "web",
          url : "/services/webdevlopment"
        },
        {
          title: "Logo Design",
          body: "Greyhound divisely hello coldly fonwderfully",
          icon: "button2",
          btn: "learn more",
          serviceIcon: "draw",
          url : "/services/LogoDesign"
        },
        {
          title: "Tasks Automation",
          body: "Greyhound divisely hello coldly fonwderfully",
          icon: "button2",
          btn: "learn more",
          serviceIcon: "atom",
          url : "/services/AutoMations"
        },
        {
          title: "SOCIAL MEDIA MARKETING",
          body: "Greyhound divisely hello coldly fonwderfully",
          icon: "button2",
          btn: "learn more",
          serviceIcon: "play-network-outline",
          url : "/services/SocialMedia"
        },
        {
          title: "SHOOTING",
          body: "Greyhound divisely hello coldly fonwderfully",
          icon: "button2",
          btn: "learn more",
          serviceIcon: "camera",
          url : "/services/Shooting"
        },
        {
          title: "MOTION GRAPHICS",
          body: "Greyhound divisely hello coldly fonwderfully",
          icon: "button2",
          btn: "learn more",
          serviceIcon: "animation-play",
          url : "/services/MotionGraphic"
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
<style scoped>
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

.br--purple {
  border-bottom: 1px solid purple !important;
  border-radius: 20px !important  ;
}

#card:hover {
  transform: scale(
    1.15
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.journey-line {
  background-color: #000 !important;
  margin: 0px auto;
  width: 0%;
  height: 150px;
  justify-content: center;
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

@import url("https://fonts.googleapis.com/css?family=Montserrat:600|Open+Sans");

*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  background: #fff;
  color: #999;
}

a {
  text-decoration: none;
  margin: 1rem 0;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8125rem;
  letter-spacing: 1px;
}

p {
  font-size: 0.9rem;
  margin: 1rem 0;
  line-height: 1.5;
}

section {
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
}

h3 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #333;
  font-size: 1.825rem;
  margin: 1.3rem 0;
}

.section-lead {
  max-width: 600px;
  margin: 1rem auto 1.5rem;
}

.service a {
  color: #5b7abb;
  display: block;
}

.service h4 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #56ceba;
  font-size: 1.3rem;
  margin: 1rem 0 0.6rem;
}

.services-grid {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.service {
  background: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  -webkit-box-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #e7e7e7;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
</style>