<template>
  <Main />
  <About />
  <Projects />
  <Contact />
</template>

<script>
import Main from "./main/Main.vue";
import About from "./about/About.vue";
import Projects from "./projects/Projects.vue";
import Contact from "./contact/Contact.vue";

export default {
  name: "MainPage",
  components: {
    Main,
    About,
    Projects,
    Contact,
  },
};
</script>
