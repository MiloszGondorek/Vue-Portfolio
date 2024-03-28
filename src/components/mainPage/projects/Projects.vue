<template>
  <div class="py-[70px] md:py-[120px] relative">
    <h1 class="gradientText text-[2.1875em] w-fit mx-auto">My projects</h1>
    <div class="absolute top-0 left-0 h-full w-full -z-10">
      <img
        src="@/assets/light.png"
        class="h-full absolute left-0 top-0"
        alt=""
      />
      <img
        src="@/assets/light.png"
        class="h-full absolute right-0 top-0 rotate-180"
        alt=""
      />
    </div>
    <div class="w-5/6 max-w-[1500px] mx-auto">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[20px]">
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
        class="block w-fit min-w-[calc(50%)] sm:min-w-[calc(25%-10px)] lg:min-w-[calc(12.5%-20px)] ml-auto mt-[20px]"
        msg="My github"
        link="https://github.com/MiloszGondorek"
        target="_blank"
      />
    </div>
    <div
      class="absolute left-0 top-1/2 -translate-y-1/2 z-[-1] h-[20vw] max-h-[40%] min-h-[150px] max-w-[unset]"
    >
      <img src="@/assets/circle.png" class="animImg animLong" alt="" />
    </div>
    <img
      src="@/assets/hex.png"
      class="animImg animLong hidden md:block absolute left-1/4 bottom-[10%] z-[-1] h-[10vw] max-h-[80%] min-h-[150px]"
      alt=""
    />
    <img
      src="@/assets/triangle.png"
      class="animImg animBack absolute right-1/4 bottom-[10%] z-[-1] h-[15vw] max-h-[80%] min-h-[150px]"
      alt=""
    />
    <img
      src="@/assets/hex.png"
      class="animImg animBack hidden md:block absolute right-[10%] top-[10%] z-[-1] h-[6vw] max-h-[80%] min-h-[150px]"
      alt=""
    />
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
