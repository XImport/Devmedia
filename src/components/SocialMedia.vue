<template>
  <div class="black">
    <div class="journey-line"></div>
    <div class="text-center bg-cus">
      <h1 class="white--text">{{ title }}</h1>
      <v-container>
        <div id="outer">
          <div class="inner" v-for="(tweet, index) in Tweets" :key="index">
            <v-card
              class="mx-auto my-2"
              color="#F7F5F5"
              dark
              height="100%"
              width="450px"
            >
              <v-card-title>
                <v-icon large left class="black--text"> mdi-twitter </v-icon>
                <span class="text-h6 font-weight-light black--text"
                  >Twitter</span
                >
              </v-card-title>

              <v-card-text class="text-h5 font-weight-bold black--text">
                {{ tweet.body }}
              </v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img class="elevation-6" alt="" :src="tweet.img"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="black--text">{{
                      tweet.user
                    }}</v-list-item-title>
                  </v-list-item-content>

                  <v-row align="center" justify="end">
                    <v-icon class="mr-1 black--text"> mdi-heart </v-icon>
                    <span class="subheading mr-2 black--text">{{
                      tweet.likes
                    }}</span>
                    <span class="mr-1">·</span>
                    <v-icon class="mr-1 black--text">
                      mdi-share-variant
                    </v-icon>
                    <span class="subheading black--text"
                      >{{ tweet.share }}
                    </span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Folow Us",
      Tweets: [
        {
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, ",
          user: "Learn More",
          likes: "250",
          share: "40",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQItbBk-6_jeKzt7VVOTJ4LWkXlj3YtwhLYIsrDmrQFaYlBopkKB4thzXqcwrzJH_kp1mw&usqp=CAU",
        },

        {
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, ",
          user: "Learn More",
          likes: "300",
          share: "10",
          img: "https://pngset.com/images/crew-cut-mark-zuckerberg-face-head-person-portrait-photography-transparent-png-57963.png",
        },
        {
          body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, ",
          user: "Learn More",
          likes: "100",
          share: "50",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWAD7aKJI-FBgeLggN2ucxe3PxthQl28RMw&usqp=CAU",
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
  transition: transform 0.2s; /* Animation */
}

.inner:hover {
  box-shadow: 5px 5px 12px 2px rgba(152, 87, 228, 0.57);
  transform: scale(
    1.05
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
card {
  transition: transform 0.2s; /* Animation */
}
card:hover {
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
