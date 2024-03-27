<template>
  <div class="py-[120px]">
    <h1 class="gradientText text-[2.1875em] w-fit mx-auto">My projects</h1>
    <div class="w-5/6 max-w-[1500px] mx-auto">
      <div class="grid grid-cols-4 gap-x-[20px] mt-[20px]">
        <Project
          :img="require('@/assets/portfolio/portfolio1.png')"
          header="Boxing club"
        />
        <Project
          :img="require('@/assets/portfolio/portfolio2.png')"
          header="Boxing club"
        />
        <Project
          :img="require('@/assets/portfolio/portfolio3.png')"
          header="Boxing club"
        />
        <Project
          :img="require('@/assets/portfolio/portfolio1.png')"
          header="Boxing club"
        />
      </div>
      <ButtonVue
        class="block w-fit ml-auto mt-[20px]"
        msg="My github"
        link="https://github.com/MiloszGondorek"
        target="_blank"
      />
    </div>
  </div>
</template>

<script>
import Project from "./ProjectComponent.vue";
import ButtonVue from "@/components/reusable/Button.vue";

export default {
  name: "Projects",
  components: {
    Project,
    ButtonVue,
  },
};
</script>
