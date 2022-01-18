
<template>
  <div class="black">
    <AppNav class="pa-8" />

    <div class="mt-12 bg-cus">
      <section id="service">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section_title text-center">
                <h2 class="white--text animate__animated animate__fadeInUp">
                  View Plans
                </h2>
                <div class="brand_border">
                  <i class="fa fa-minus" aria-hidden="true"></i>
                  <i class="fas fa-handshake"></i>
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </div>
                <p class="white--text animate__animated animate__fadeInUp">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. <br />Aenean massa. Cum
                  sociis natoque penatibus et magnis dis parturient montes
                </p>
                <div>
                  <div class="journey-line"></div>
                </div>
                <section id="lab_pricing_table">
                  <div
                    class="
                      pricing-tables
                      attached
                      animate__animated animate__fadeInUp
                    "
                  >
                    <div class="row">
                      <div class="col-sm-4 col-md-4 card--price">
                        <div class="plan first">
                          <div class="head">
                            <h2>Basic</h2>
                          </div>
                          <ul class="item-list">
                            <li><strong>20GB</strong> Storage</li>
                            <li><strong>15</strong> Email Addresses</li>
                            <li><strong>5</strong> Domains</li>
                            <li><strong>Endless</strong> Support</li>
                          </ul>
                          <div class="price">
                            <h3><span class="symbol">$</span>19</h3>
                            <h4>per month</h4>
                          </div>
                          <v-btn depressed class="btn btn-success">
                            <v-icon left> mdi-email </v-icon>
                            Contact Us
                          </v-btn>
                        </div>
                      </div>
                      <div class="col-sm-4 col-md-4 card--price">
                        <div class="plan recommended">
                          <div class="head">
                            <h2>Premium</h2>
                          </div>
                          <ul class="item-list">
                            <li><strong>50GB</strong> Storage</li>
                            <li><strong>25</strong> Email Addresses</li>
                            <li><strong>15</strong> Domains</li>
                            <li><strong>Endless</strong> Support</li>
                          </ul>
                          <div class="price">
                            <h3><span class="symbol">$</span>29</h3>
                            <h4>per month</h4>
                          </div>
                          <v-btn depressed class="btn btn-success">
                            <v-icon left> mdi-email </v-icon>
                            Contact Us
                          </v-btn>
                        </div>
                      </div>
                      <div class="col-sm-4 col-md-4 card--price">
                        <div class="plan last">
                          <div class="head">
                            <h2>Custom</h2>
                          </div>
                          <ul class="item-list">
                            <li><strong>100GB </strong>Storage</li>
                            <li><strong>50 </strong>Email Addresses</li>
                            <li><strong>25</strong> Domains</li>
                            <li><strong>Endless</strong> Support</li>
                          </ul>
                          <div class="price">
                            <h3><span class="symbol">$</span>49</h3>
                            <h4>per month</h4>
                          </div>
                          <v-btn depressed class="btn btn-success">
                            <v-icon left> mdi-email </v-icon>
                            Contact Us
                          </v-btn>
                        </div>
                      </div>
                      <!-- end .row -->
                      <!-- end .pricing-tables -->
                    </div>
                  </div>
                </section>
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
    return {};
  },
  components: {
    AppNav: appNav,
    AppFooter: appFooter,
  },
};
</script>
<style scoped>
#lab_pricing_table {
  background: #000;
  padding: 15px;
}

#lab_pricing_table .navbar {
  box-shadow: 0 2px 2px rgba(10, 10, 10, 0.06);
  -moz-box-shadow: 0 2px 2px rgba(10, 10, 10, 0.06);
  -webkit-box-shadow: 0 2px 2px rgba(10, 10, 10, 0.06);
  border: none;
  background: #fff;
}

#lab_pricing_table .navbar ul > li > a {
  font-weight: 600;
  padding: 26px;
  color: #434a54;
  font-size: 12px;
  text-transform: uppercase;
}

#lab_pricing_table .navbar .container .navbar-brand {
  margin-left: 0px;
  padding: 25px;
}

#lab_pricing_table .main-title {
  text-align: center;
}

#lab_pricing_table .pricing-tables {
  padding: 20px;
  max-width: 90%;
  margin: 0 auto;
}

#lab_pricing_table .pricing-tables h1 {
  font-size: 48px;
}

#lab_pricing_table .pricing-tables .plan.first {
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}

#lab_pricing_table .pricing-tables .plan.last {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}

#lab_pricing_table .pricing-tables .plan.recommended {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

#lab_pricing_table .pricing-tables .plan.recommended .head {
  margin-bottom: 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

#lab_pricing_table .pricing-tables.attached .col-sm-4,
#lab_pricing_table .pricing-tables.attached .col-md-4,
#lab_pricing_table .pricing-tables.attached .col-sm-3,
#lab_pricing_table .pricing-tables.attached .col-md-3 {
  padding-left: 0;
  padding-right: 0;
}

#lab_pricing_table .pricing-tables.attached .plan {
  border-radius: 0;
}

#lab_pricing_table .pricing-tables.attached .plan .head {
  border-radius: 0;
}

#lab_pricing_table .pricing-tables.attached .plan.recommended {
  border-radius: 4px;
}

#lab_pricing_table .pricing-tables.attached .plan.recommended .head {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

#lab_pricing_table .pricing-tables.attached .plan.last {
  border-bottom-right-radius: 4px;
}

#lab_pricing_table .pricing-tables.attached .plan.last .head {
  border-top-right-radius: 4px;
}

#lab_pricing_table .pricing-tables.attached .plan.first {
  border-bottom-left-radius: 4px;
}

#lab_pricing_table .pricing-tables.attached .plan.first .head {
  border-top-left-radius: 4px;
}

#lab_pricing_table .plan {
  box-shadow: 0 2px 2px rgba(10, 10, 10, 0.06);
  min-height: 100px;
  background: #fff;
  border-radius: 4px;
  margin: 20px 0;
  padding-bottom: 25px;
  text-align: center;
}

#lab_pricing_table .plan .head {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 12px 16px;
  background: #1c1c1c;
  color: #fff;
}

#lab_pricing_table .plan .head h1,
#lab_pricing_table .plan .head h2,
#lab_pricing_table .plan .head h3 {
  padding: 0;
  margin: 0;
  font-weight: 100;
}

#lab_pricing_table .plan .price {
  border-top: 1px solid #eee;
  margin: 0 auto 30px auto;
  width: 80%;
}

#lab_pricing_table .plan .price h3 {
  font-size: 82px;
  vertical-align: top;
  line-height: 1;
}

#lab_pricing_table .plan .price h3 span {
  font-size: 38px;
  vertical-align: top;
  position: relative;
  margin: 6px 0 0 -7px;
  display: inline-block;
}

#lab_pricing_table .plan .price h4 {
  color: #aaa;
  font-size: 14px;
}

#lab_pricing_table .plan .btn {
  padding: 10px 30px;
  text-transform: uppercase;
  font-weight: 500;
}

#lab_pricing_table .plan ul {
  list-style-type: none;
  padding: 20px;
  margin-top: 2px;
}

#lab_pricing_table .plan ul li {
  line-height: 22px;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 400;
}

#lab_pricing_table .plan ul li a {
  text-decoration: underline;
  color: #e6e9ed;
}

#lab_pricing_table .plan ul li:last-child {
  border-bottom: none;
}

#lab_pricing_table .plan ul strong {
  font-weight: 700;
}

#lab_pricing_table .plan.recommended {
  margin-top: 6px;
  box-shadow: 0 0 22px rgba(10, 10, 10, 0.42);
  position: relative;
  z-index: 99;
  border-radius: 4px;
}

#lab_pricing_table .plan.recommended .head {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: #171717;
}

#lab_pricing_table .plan.recommended .btn {
  margin-bottom: 10px;
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
.card--price {
  transition: transform 0.5s ease;
}
.card--price:hover {
  transform: scale(
    1.05
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>