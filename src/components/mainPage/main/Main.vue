<template>
  <div class="md:h-[100vh] md:grid grid-rows-3">
    <div class="row-span-2 flex flex-col justify-center min-h-[60vh] relative">
      <div class="w-4/5 limit mx-auto h-full flex">
        <div class="left w-full max-w-fit my-auto">
          <div class="limit mx-auto">
            <p class="text-[1.25em] text-[#359E65] font-[500]">
              Hello Im Miłosz
            </p>
            <h1 class="text-[3.125em]">WEB DEVELOPER</h1>
            <div class="flex my-[24px]">
              <div class="w-[2px] bg-[#BDBDBD]"></div>
              <p class="text-[#BDBDBD] ml-[6px] font-light">
                Hi my name is Milosz.<br />
                I’m freelancer and full-stack<br />
                web developer from Poland
              </p>
            </div>
            <ButtonVue
              msg="ABOUT ME"
              class="ml-auto block w-fit"
              onclick="scrollToEl('about')"
            />
          </div>
        </div>
        <div class="hidden md:block right w-full">
          <div class="relative w-full h-full">
            <img
              src="@/assets/me.png"
              alt=""
              class="absolute object-scale-down left-0 xl:left-[unset] right-[unset] xl:right-0 bottom-[-5px] max-h-[90%] max-w-[150%] min-h-[200px] lg:min-h-[50%] min-w-[50%] z-[-1]"
            />
          </div>
        </div>
      </div>
      <img
        src="@/assets/waves.png"
        class="absolute left-0 bottom-[30px] -z-10"
        alt=""
      />
      <div
        class="absolute right-0 sm:right-[35%] md:right-[50%] sm:translate-x-1/2 top-0 sm:top-[-50px] w-[30vw] min-w-[150px] max-w-[300px] rotate-12"
      >
        <img src="@/assets/hexes.png" class="animImg2 animLong" alt="" />
      </div>
    </div>
    <div class="w-full relative flex flex-col justify-center">
      <div
        class="w-4/5 md:w-11/12 lg:w-4/5 mx-auto limit flex flex-col md:flex-row justify-between gap-y-[30px]"
        on-scroll="isVisible()"
        id="mainInfo"
      >
        <Info
          title="Website design"
          desc="Responsive and Mobile-Friendly Website Design"
          dark="true"
          :img="require('@/assets/person.png')"
        />
        <Info
          title="Technical support"
          desc="Responsive and Mobile-Friendly Website Design"
          :img="require('@/assets/person2.png')"
        />
        <Info
          title="CMS"
          desc="Responsive and Mobile-Friendly Website Design"
          dark="true"
          :img="require('@/assets/person.png')"
        />
      </div>
      <div
        class="bg absolute right-0 w-3/4 md:w-1/2 bg-[#1C1C1C] h-full top-0 z-[-2]"
      ></div>
      <img
        src="@/assets/circles.png"
        class="animImg absolute right-0 top-[30px] z-[-1] h-[20vw] max-h-[80%] min-h-[150px]"
        alt=""
      />
      <div
        class="absolute left-0 -translate-x-1/2 bottom-1/2 md:bottom-0 translate-y-1/2 z-[-1] h-[50vw] md:h-[20vw] max-h-[80%] min-h-[150px]"
      >
        <img src="@/assets/hexes.png" class="animImg2 animLong" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Info from "./Info.vue";
import ButtonVue from "../../reusable/Button.vue";

export default {
  name: "Main",
  components: {
    Info,
    ButtonVue,
  },
  mounted() {
    const checkVisible = () => {
      const t = isVisible(document.getElementById("mainInfo"));
      if (t) {
        const childs = document.getElementById("mainInfo").children;
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
