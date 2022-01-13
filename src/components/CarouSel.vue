<template>
  <div>
    <header class="header-banner-top">
      <div class="banner">
        <div class="banner-image"></div>

        <div class="primary-wrapper">
          <h1 class="site-title">
            <a href="#">{{ title }}</a>
          </h1>
          <div class="site-tagline">
            {{ body }}
          </div>
          <div id="outer">
            <div
              class="inner text-center"
              v-for="(btn, index) in btns"
              :key="index"
            >
              <v-btn class="ma-2" outlined :color="btn.color" >
                <v-icon>
                  mdi-{{ btn.icon }}
                </v-icon>
                {{ btn.title }}
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "SITE TITLE",
      body: "Tagline. Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. ",
      btns: [
        {
          title: "View More",
          color : "purple",
          icon : "dots-horizontal"
        },
        {
          title: "View Plans",
          color : "blue",
          icon : "credit-card"
        },
      ],
    };
  },
};
</script>
<style scoped>
#outer {
  width: 100%;
  text-align: center;
}
.inner {
  display: inline-block !important;
  margin: 0 10px;
}
.btn-pos {
  display: inline-block;
}
.header-banner-top .primary-wrapper {
  margin: 0 auto;
  max-width: 100%;
  height: 100%;
  background-image: url(https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022/hero-illustration.png);
  background-size: cover;
  background-position: center;
  background-color: #000000;
}
.header-banner-top .hidden {
  display: none;
}
.header-banner-top .horizontal-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.header-banner-top .horizontal-nav li {
  display: inline-block;
}
.header-banner-top .horizontal-nav a {
  display: block;
}
.header-banner-top .horizontal-nav .folder {
  position: relative;
  cursor: pointer;
}
.header-banner-top .horizontal-nav .folder ul {
  display: block;
  position: absolute;
  top: -9999px;
  left: 0;
  z-index: 999;
}
.header-banner-top .horizontal-nav .folder li {
  display: block;
}
.header-banner-top .horizontal-nav .folder:hover ul {
  top: 100%;
}
.header-banner-top .mobile-menu-box,
.header-banner-top .mobile-menu-label {
  display: none;
}
.header-banner-top .banner {
  position: relative;
}
.header-banner-top .banner .banner-image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.header-banner-top .banner .primary-wrapper {
  position: relative;
}
@media screen and (max-width: 700px) {
  .header-banner-top .horizontal-nav {
    overflow: hidden;
    height: 0;
    background-image: url(https://www.pluralsight.com/content/dam/pluralsight2/homepage/2022/hero-illustration.png);
    background-size: cover;
    background-position: center;
    background-color: #000000;
  }
  .header-banner-top .mobile-menu-box {
    display: none;
  }
  .header-banner-top .mobile-menu-label {
    display: block;
    cursor: pointer;
  }
  .header-banner-top .mobile-menu-label:before {
    content: "Menu";
  }
  .header-banner-top .mobile-menu-box:checked ~ .horizontal-nav {
    height: auto;
  }
  .header-banner-top .mobile-menu-box:checked ~ .mobile-menu-label:before {
    content: "Close";
  }
  .header-banner-top .horizontal-nav li {
    display: block;
  }
  .header-banner-top .horizontal-nav .folder ul {
    position: static;
  }
  .header-banner-top .horizontal-nav .folder-toggle-label a:before {
    content: "+ ";
  }
  .header-banner-top
    .horizontal-nav
    .folder-toggle-box:checked
    ~ .folder-toggle-label
    a:before {
    content: "- ";
  }
  .header-banner-top .horizontal-nav .folder:hover ul,
  .header-banner-top .horizontal-nav .folder-toggle-box ~ ul {
    display: none;
  }
  .header-banner-top .horizontal-nav .folder-toggle-box:checked ~ ul {
    display: block;
  }
}
.header-banner-top {
  text-align: center;
}
.header-banner-top .main-navigation {
  background: #222;
}
.header-banner-top .horizontal-nav a {
  padding: 1.5em 1em;
  color: #aaa;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 1px;
}
.header-banner-top .horizontal-nav a:hover,
.header-banner-top .horizontal-nav .active-link a {
  color: #fff;
}
.header-banner-top .horizontal-nav .folder ul {
  background-color: #222;
  transition: padding 0.14s ease-out;
  text-align: left;
}
.header-banner-top .horizontal-nav .folder a {
  padding: 0.5em 1em;
  white-space: nowrap;
}
.header-banner-top .horizontal-nav .folder:hover ul {
  padding: 0.5em 0;
}
.header-banner-top .banner {
  background-color: #222;
}
.header-banner-top .banner .banner-image {
  background: url(http://farm7.staticflickr.com/6169/6161511237_c1834b35bc_b.jpg)
    center center;
  background-size: cover;
  opacity: 0.5;
}
.header-banner-top .banner .primary-wrapper {
  padding-top: 150px;
  padding-bottom: 150px;
}
.header-banner-top .banner .site-title {
  letter-spacing: 2px;
  font-size: 52px;
  margin: 0 0 20px;
}
.header-banner-top .banner .site-title a {
  color: #fff;
  text-decoration: none;
}
.header-banner-top .banner .site-tagline {
  color: #aaa;
  letter-spacing: 1px;
  font-size: 14px;
  margin: 0 20%;
}
@media screen and (max-width: 700px) {
  .header-banner-top .horizontal-nav a {
    padding: 0.75em 1em;
  }
  .header-banner-top .horizontal-nav > ul > li:first-child a {
    padding-top: 2em;
  }
  .header-banner-top .horizontal-nav > ul > li:last-child a {
    padding-bottom: 2em;
  }
  .header-banner-top .horizontal-nav li {
    display: block;
  }
  .header-banner-top .horizontal-nav .folder ul {
    text-align: center;
    padding: 0.5em 0;
    margin: 0.5em 0;
    transition: none;
    background-color: #292929;
  }
  .header-banner-top .horizontal-nav .folder:hover ul {
    padding: 0.5em 0;
  }
  .header-banner-top .horizontal-nav .folder-toggle-label a {
    cursor: pointer;
  }
  .header-banner-top .mobile-menu-label {
    color: #fff;
    background-color: #292929;
    padding: 1.5em 1em;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 1px;
  }
  .header-banner-top .mobile-menu-box:checked ~ .mobile-menu-label {
    color: #aaa;
  }
  .header-banner-top .mobile-menu-box:checked ~ .horizontal-nav {
    padding: 1em 0;
  }
  .header-banner-top .mobile-menu-box:checked ~ .mobile-menu-label:before {
    content: "Close";
  }
}
</style>
