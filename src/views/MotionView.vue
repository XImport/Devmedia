<template>
  <div class="black">
    <AppNav class="pa-8" />
    <div class="mt-12 bg-cus">
      <section id="service">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section_title text-center" data-aos="fade-up">
                <h2 class="white--text">Motion Graphic Animation</h2>
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
                  <div>
                    <div
                      class="container"
                      v-for="(content, index) in contents"
                      :key="index"
                    >
                      <img
                        class="container__image"
                        src="http://www.dumdum.dk/wp-content/uploads/2015/08/Buddyfied-motion-graphics.gif"
                      />
                      <div class="container__text pink--text">
                        <h1>{{ content.title }}</h1>
                        <h3 class="white--text">
                          {{ content.subTitle }}
                        </h3>
                        <p class="white--text">
                          {{ content.body }}
                        </p>
                        <v-row no-gutters>
                          <v-col
                            v-for="(item, index) in items"
                            :key="index"
                            cols="12"
                            sm="6"
                          >
                            <v-card class="pa-2 black white--text">
                              <div class="links--text">
                                <v-list class="black white--text">
                                  <v-list-item-group
                                    v-model="model"
                                    class="text-left"
                                  >
                                    <v-icon class="yellow--text">
                                      {{ item.icon }}
                                    </v-icon>

                                    {{ item.text }}
                                  </v-list-item-group>
                                </v-list>
                              </div>
                            </v-card>
                          </v-col>
                        </v-row>
                        <!-- hereee -->
                        <v-item-group>
                          <v-container>
                            <v-row>
                              <v-col
                                v-for="(text, index) in subtexts"
                                :key="index"
                                cols="12"
                                md="4"
                              >
                                <v-item>
                                  <v-card
                                    data-aos="zoom-in"
                                    elevation="2"
                                    shaped
                                    outlined
                                    tile
                                    class="
                                      mx-auto
                                      my-12
                                      black
                                      white--text
                                      br--purple
                                    "
                                    id="card"
                                  >
                                    <v-card-title
                                      class="justify-center black white--text"
                                    >
                                      {{ text.title }}</v-card-title
                                    >
                                    <v-icon left class="black white--text"
                                      >mdi-{{ text.icon }}</v-icon
                                    >
                                    <v-card-text class="black white--text">
                                      {{ text.body }}
                                    </v-card-text>
                                  </v-card>
                                </v-item>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-item-group>

                        <!-- <p>While inside a box, cats feel that they cannot be snuck up on from behind or the side — anything that wants to approach them must come directly into their field of vision. In effect, such hiding spaces allow them to watch the world around them without being seen.</p> -->
                      </div>
                    </div>
                  </div>
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
          title: "Motion Graphic Animation",
          subTitle: "Feel confident your team is learning from the industry’s",
          body: "Upskill your team with courses on the most in-demand technology topics, taught by the experts .",
          icon: "web",
          btn: "learn more",
          serviceIcon: "web",
        },
      ],
      items: [
        {
          icon: "mdi-check",
          text: "Video Editing Software",
        },
        {
          icon: "mdi-check",
          text: "Video Editing Software",
        },
        {
          icon: "mdi-check",
          text: "Video Editing Software",
        },
        {
          icon: "mdi-check",
          text: "Video Editing Software",
        },
      ],
      subtexts: [],
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
.bg-color {
  background-color: black !important;
  background-size: cover;
}

#card-desc {
  transition: transform 0.2s; /* Animation */
}
#card-desc:hover {
  transform: scale(
    1.05
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
.container {
  padding: 5% 5% 5%;
  max-width: 95%;
}
.container__image {
  width: 25%;
  height: auto;
  margin: 5% 10% 10% 0%;
  float: left;
}
.container__text {
  display: inline;
}
@media only screen and (max-width: 600px) {
  .container {
    padding: 0%;
    max-width: 100%;
  }
  .container__image {
    width: 100%;
    height: auto;
    margin: 0% 0% 0% 0%;
    float: left;
  }
}
.text--center {
  margin-left: 0% !important;
}
</style>