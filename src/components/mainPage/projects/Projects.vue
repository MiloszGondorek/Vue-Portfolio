<template>
  <div class="py-[70px] md:py-[120px] relative">
    <h1
      class="gradientText text-[2.1875em] w-fit mx-auto showText"
      id="projectsH"
    >
      Moje projekty
    </h1>
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
      <div
        class="grid sm:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[20px]"
        id="projectsContainer"
      >
        <Project
          :img="require('@/assets/portfolio/sushi.png')"
          header="Sushi bar"
          link="https://zen-sushi-nine.vercel.app"
        />
        <Project
          :img="require('@/assets/portfolio/gym.png')"
          header="Siłownia"
          link="https://fit-fusion-neon.vercel.app"
        />
        <Project
          :img="require('@/assets/portfolio/vivida.png')"
          header="Sklep jubilerski"
          link="https://vivida.vercel.app"
        />
        <Project
          :img="require('@/assets/portfolio/guitar.png')"
          header="Wytwórnia muzyczna"
          link="https://music-label-ten.vercel.app"
        />
      </div>
      <ButtonVue
        class="block w-fit min-w-[calc(50%)] sm:min-w-[calc(25%-10px)] lg:min-w-[calc(12.5%-20px)] ml-auto mt-[20px]"
        msg="Mój github"
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
  mounted() {
    const checkVisible = () => {
      const t = isVisible(document.getElementById("projectsH"));
      if (t) {
        const childs = document.getElementById("projectsContainer").children;
        for (var i = 0; i < childs.length; i++) {
          (function (index) {
            sleep(200 * index).then(() => {
              childs[index].classList.add("showAnim");
            });
          })(i);
        }
        window.removeEventListener("scroll", checkVisible);
      }
    };
    window.addEventListener("scroll", checkVisible);
  },
};
</script>
