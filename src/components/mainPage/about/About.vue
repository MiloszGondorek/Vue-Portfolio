<template>
  <div class="w-full relative flex min-h-[500px]" id="about">
    <div
      class="relative w-1/2 max-w-[min(600px,calc(40vw))] ml-auto"
      ref="hContainer"
    >
      <img
        src="@/assets/me3.png"
        alt=""
        class="hidden lg:block max-w-[75%] h-[95%] object-scale-down absolute top-1/2 -translate-y-1/2"
      />
      <h1
        class="absolute w-fit text-[80px] about-h top-1/2 right-0"
        ref="h1Text"
      >
        ABOUT ME
      </h1>
    </div>
    <div
      class="bg-[#1C1C1C] w-1/2 min-h-[100%] right-0 top-0 flex flex-col justify-center pl-[50px] pr-[100px] py-[30px] gap-[16px]"
    >
      <h1 class="text-[1.375em]">Programming</h1>
      <p>
        I am a programmer specializing in HTML, CSS, PHP, JS, C#. I will be an
        employee who organizes his own work very well, but also knows how to
        cooperate with a team. I approach solving the tasks entrusted to me
        creatively. I have good communication skills. I would like to use my
        skills at work and thus increase my knowledge and familiarity with
        programming.
      </p>
      <h1 class="text-[1.375em] mt-[30px]">Free time</h1>
      <p>
        I have been training boxing for three years, I love outdoor activities,
        I often ride a bike, which helps me relieve stress. In addition, I am a
        programmer who constantly develops my skills in creating websites.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const h1Element = this.$refs.h1Text;
    const hContainer = this.$refs.hContainer;

    const updateDivSize = () => {
      if (h1Element !== undefined && hContainer !== undefined) {
        const h1Width = h1Element.offsetWidth;
        const h1Height = h1Element.offsetHeight;

        h1Element.style.transform =
          "rotate(" +
          -90 +
          `deg) translateX(-50%) translateY(calc(${h1Width}px - 100%))`;

        hContainer.style.minHeight = h1Width + "px";
      }
    };
    window.addEventListener("load", updateDivSize);
    window.addEventListener("resize", updateDivSize);
  },
};
</script>

<style scoped>
.about-h {
  transform-origin: left top;
  text-wrap: nowrap;
  margin: 0;
  letter-spacing: 0.24rem;
}
p {
  text-align: justify;
}
</style>
