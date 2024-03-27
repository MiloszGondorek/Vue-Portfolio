<template>
  <Header />
  <MainPage />
  <Footer />
</template>

<script>
import "./assets/main.css";
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import MainPage from "./components/mainPage/MainPage.vue";

export default {
  name: "App",
  components: {
    Header,
    MainPage,
    Footer,
  },
};
</script>
