<template>
  <div class="flex flex-col justify-between min-h-screen">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import "./assets/main.css";
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
window.scrollToEl = function (id) {
  const element = document.getElementById(id);
  if (element) {
    const offsetTop = element.offsetTop - (window.innerWidth > 600 ? 75 : 100);
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

window.isVisible = function (el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
</script>
