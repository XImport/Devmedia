<template>
  <div class="black">
    <div class="journey-line"></div>
    <div class="text-center bg-cus">
      <h1 class="white--text">{{ title }}</h1>
      <v-container>

      <v-card class="mx-auto" color="#26c6da" dark   height="100%" width="450px" >
        <v-card-title>
          <v-icon large left class="black--text"> mdi-twitter </v-icon>
          <span class="text-h6 font-weight-light black--text">Twitter</span>
        </v-card-title>

        <v-card-text class="text-h5 font-weight-bold black--text">
          "Turns out semicolon-less style is easier and safer in TS because most
          gotcha edge cases are type invalid as well."
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="black--text">Evan You</v-list-item-title>
            </v-list-item-content>

            <v-row align="center" justify="end">
              <v-icon class="mr-1 black--text"> mdi-heart </v-icon>
              <span class="subheading mr-2 black--text">256</span>
              <span class="mr-1">·</span>
              <v-icon class="mr-1 black--text"> mdi-share-variant </v-icon>
              <span class="subheading black--text">45</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Folow Us",
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
