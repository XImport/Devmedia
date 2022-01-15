
<template>
  <div class="black">
    <AppNav class="pa-12" />
    <div class="mt-12 bg-cus">
      <div class="banner">
        <div class="banner-text animate__animated animate__bounce">
          <h1>{{ title }}</h1>
          <h3>{{ body }}</h3>
          <h3 class="red--text">{{ subPara }}</h3>
        </div>
      </div>
      <section id="service">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section_title text-center">
                <h2 class="white--text" data-aos="zoom-in">Get In Touch</h2>
                <div class="brand_border" data-aos="zoom-in">
                  <i class="fa fa-minus" aria-hidden="true"></i>
                  <i class="fas fa-handshake"></i>
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </div>
                <p class="white--text" data-aos="zoom-in">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. <br />Aenean massa. Cum
                  sociis natoque penatibus et magnis dis parturient montes
                </p>
                <div>
                  <div class="journey-line"></div>
                  <v-container
                    class="lighten-5 white--text bl--tr cont--section"
                    fluid
                  >
                    <v-form
                      ref="form"
                      data-aos="zoom-in"
                      v-model="valid"
                      lazy-validation
                      dark
                      class="justify-end ml-12 bl--tr"
                    >
                      <v-text-field
                        v-model="name"
                        dark
                        class="bl--tr"
                        :counter="20"
                        :rules="nameRules"
                        label="Full Name"
                        required
                      ></v-text-field>

                      <v-text-field
                        dark
                        class="bl--tr"
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                      ></v-text-field>

                      <v-textarea
                        dark
                        class="bl--tr"
                        :rules="textareaRules"
                        label="Describe Your Need"
                        required
                        :counter="180"
                      ></v-textarea>
                      <!-- <v-select
                              v-model="select"
                              :items="items"
                              :rules="[(v) => !!v || 'Item is required']"
                              label="Item"
                              required
                            ></v-select> -->

                      <!-- <v-checkbox
                        v-model="checkbox"
                        :rules="[(v) => !!v || 'You must agree to continue!']"
                        label="Do you agree?"
                        required
                      ></v-checkbox> -->

                      <v-btn
                        :disabled="!valid"
                        color="gray"
                        class="mr-4"
                        @click="validate"
                      >
                        <v-icon left> mdi-send </v-icon>
                        Contact Us
                      </v-btn>
                    </v-form>
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
  data: () => ({
    title: "About Us",
    body: "some body text",
    subPara: "Text",
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    textarea: "",
    textareaRules: [
      (v) => !!v || "Please Write quick description about your Needs",
      (v) =>
        (v && v.length <= 180) ||
        "Your Description must be less than 10 characters",
    ],
    // checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
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
.bl--tr {
  background-color: rgb(0, 0, 0, 0.02);
}
/* margin: 100px; padding: 0px; width: 80% */
.cont--section {
  margin: 10%;
  padding: 0px;
  width: 80%;
}
@media only screen and (max-width: 600px) {
  .cont--section {
    margin: 0% !important;
    width: 100% !important;
    background-color: black !important;
  }
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
  background-image: url("https://www.pluralsight.com/content/pluralsight/en/product/skills/jcr:content/main/generic_block1_copy_/image-res.img.031090c1-15e0-4bfd-a728-56eb83ad8c17.png");
  background-image: top;
  background-position: right;
  background-color: #000;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}
.banner h1 h3 h6 {
  display: inline-block;
}
</style>