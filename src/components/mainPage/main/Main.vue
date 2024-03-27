<template>
  <div class="h-[calc(100vh-70px)] mt-[70px] grid grid-rows-3">
    <div class="row-span-2 w-4/5 limit mx-auto flex">
      <div class="left w-full max-w-fit my-auto">
        <div class="limit mx-auto">
          <p class="text-[1.25em] text-[#359E65]">Hello Im Miłosz</p>
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
            @click="scrollToElement('about')"
          ></ButtonVue>
        </div>
      </div>
      <div class="right w-full">
        <div class="block relative w-full h-full overflow-hidden">
          <img
            src="@/assets/me2.png"
            alt=""
            class="absolute object-scale-down right-0 bottom-[-5px] h-[90%]"
          />
        </div>
      </div>
    </div>
    <div class="w-full relative flex flex-col justify-center">
      <div class="w-4/5 mx-auto limit flex justify-between">
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
        class="bg absolute right-0 w-1/2 bg-[#1C1C1C] h-full top-0 z-[-1]"
      ></div>
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
  methods: {
    scrollToElement(id) {
      var element = document.getElementById(id);
      if (element) {
        var offsetTop = element.offsetTop - 75;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>
