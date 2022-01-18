
<template>
  <div class="black">
    <AppNav class="pa-8" />

    <div class="mt-12 bg-cus">
      <section id="service">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section_title text-center" data-aos="fade-up">
                <h2 class="white--text">Web Devlopment</h2>
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

                  <v-container
                    data-aos="zoom-in"
                    class="grey lighten-5 black white--text"
                    fluid
                  >
                    <v-layout>
                      <v-row>
                        <v-col
                          v-for="(content, index) in contents"
                          :key="index"
                          cols="12"
                          sm="12"
                          class="black white--text"
                        >
                          <v-card
                            elevation="2"
                            shaped
                            outlined
                            tile
                            class="mx-auto my-12 black white--text br--purple"
                            id="card"
                          >
                            <v-card-title
                              class="justify-center black pink--text"
                              color="success"
                              ><v-icon left class="black pink--text"
                                >mdi-{{ content.icon }}</v-icon
                              >
                              {{ content.title }}</v-card-title
                            >
                            <div class="d-flex align-center">
                              <v-img
                                class="ml-auto"
                                lazy-src="https://www.pluralsight.com/content/pluralsight/en/product/skills/jcr:content/main/generic_block_copy/parsys/generic_block_413530/parsys/animation_wrapper/parsys/columns_copy/column-parsys-1/generic_block_202764/parsys/columns_copy/column-parsys-1/generic_block_copy_c/parsys/image/image-res.img.50a929ee-afcc-409d-b866-5be9f4b5d339.png"
                                max-height="250"
                                max-width="320"
                                src="https://www.pluralsight.com/content/pluralsight/en/product/skills/jcr:content/main/generic_block_copy/parsys/generic_block_413530/parsys/animation_wrapper/parsys/columns_copy/column-parsys-1/generic_block_202764/parsys/columns_copy/column-parsys-1/generic_block_copy_c/parsys/image/image-res.img.50a929ee-afcc-409d-b866-5be9f4b5d339.png"
                              ></v-img>

                              <v-card-title class="black lighten-1--text">
                                <h1>
                                  {{ content.subTitle }}
                                </h1>
                                <br />
                                <h5 class="red--text">
                                  {{ content.body }}
                                </h5>

                                <v-list class="black dark">
                                  <v-container class="black dark">
                                    <v-row no-gutters>
                                      <v-col
                                        v-for="(item, index) in items"
                                        :key="index"
                                        cols="12"
                                        sm="5"
                                      >
                                        <v-card
                                          class="pa-2 black white--text"
                                          outlined
                                          tile
                                        >
                                          <div class="text-wrapper">
                                            <h4 class="text-left">
                                              <v-icon
                                                class="yellow--text text-left"
                                                >mdi-check</v-icon
                                              >
                                              {{ item.text }}
                                            </h4>
                                          </div>
                                        </v-card>
                                      </v-col>
                                    </v-row>
                                  </v-container>
                                </v-list>
                              </v-card-title>
                            </div>

                            <div>
                              <v-container class="black">
                                <v-row no-gutters>
                                  <v-col
                                    v-for="(subtext, index) in subtexts"
                                    :key="index"
                                    cols="12"
                                    sm="4"
                                  >
                                    <v-card
                                      class="pa-2 black"
                                      id="card-desc"
                                      outlined
                                      tile
                                    >
                                      <v-card-title
                                        class="justify-center black white--text"
                                      >
                                        <v-icon
                                          left
                                          class="
                                            justify-center
                                            black
                                            white--text
                                          "
                                        >
                                          mdi-{{ subtext.icon }}
                                        </v-icon>
                                        {{ subtext.title }}
                                      </v-card-title>
                                      <v-card-text
                                        class="justify-center black white--text"
                                      >
                                        {{ subtext.body }}
                                      </v-card-text>
                                    </v-card>
                                  </v-col>
                                </v-row>
                                <div class="pt-6">
                                  <v-img
                                    class="bg-color"
                                    max-height="150"
                                    src="https://image.shutterstock.com/image-photo/contact-us-connection-concept-copy-260nw-1861158043.jpg"
                                  >
                                    <v-btn
                                      depressed
                                      color="error"
                                      class="mt-12"
                                    >
                                      <v-icon left> mdi-phone </v-icon>
                                      Contact Us !!
                                    </v-btn>
                                  </v-img>
                                </div>
                              </v-container>
                            </div>
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
          subTitle: "Feel confident your team is learning from the industry’s",
          body: "Upskill your team with courses on the most in-demand technology topics, taught by the experts .",
          icon: "web",
          btn: "learn more",
          serviceIcon: "web",
        },
      ],
      items: [
        {
          icon: "mdi-inbox",
          text: "Software Development",
        },
        {
          icon: "mdi-star",
          text: "Machine Learning & AI",
        },
        {
          icon: "mdi-send",
          text: "IT Ops",
        },
        {
          icon: "mdi-email-open",
          text: "Data Professional",
        },
        {
          icon: "mdi-email-open",
          text: "Information & Cybersecurity",
        },
        {
          icon: "mdi-email-open",
          text: "Cloud computing",
        },
      ],
      subtexts: [
        {
          title: "Speed",
          body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat delectus culpa voluptatem ipsum vitae maiores tempore, quo est aliquam impedit similique illo officiis fugiat ab molestias tenetur iste obcaecati repellendus.",
          icon: "speedometer",
        },
        {
          title: "Reliability",
          body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat delectus culpa voluptatem ipsum vitae maiores tempore, quo est aliquam impedit similique illo officiis fugiat ab molestias tenetur iste obcaecati repellendus.",
          icon: "responsive",
        },
        {
          title: "Security",
          body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat delectus culpa voluptatem ipsum vitae maiores tempore, quo est aliquam impedit similique illo officiis fugiat ab molestias tenetur iste obcaecati repellendus.",
          icon: "lock",
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
</style>