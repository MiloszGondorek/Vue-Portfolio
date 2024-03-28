<template>
  <div
    class="w-full relative flex flex-col sm:flex-row min-h-[500px] mt-[30px] sm:mt-0"
    id="about"
  >
    <div
      class="relative w-fit md:w-1/2 sm:max-w-[min(600px,calc(40vw))] mr-auto md:mr-0 ml-auto sm:ml-[10vw] md:ml-auto flex flex-col justify-center"
      ref="hContainer"
    >
      <img
        src="@/assets/me3.png"
        alt=""
        class="hidden md:block max-w-[90%] lg:max-w-[75%] max-h-[95%] object-scale-down lg:absolute lg:top-1/2 lg:-translate-y-1/2"
      />
      <h1
        class="block lg:absolute my-auto w-fit text-[3rem] sm:text-[4.5rem] md:text-[5rem] about-h top-1/2 right-0"
        ref="h1Text"
      >
        ABOUT ME
      </h1>
      <div
        class="absolute left-0 bottom-0 max-w-[unset] translate-y-[100%] z-[-1] h-[20vw] max-h-[min(80%,150px)] min-h-[80px]"
      >
        <img src="@/assets/triangle.png" class="animImg animBack" alt="" />
      </div>
    </div>
    <div
      class="bg-[#1C1C1C] w-full sm:w-3/4 md:w-1/2 min-h-[100%] right-0 top-0 flex flex-col justify-center pl-[50px] pr-[10vw] md:pr-[4.2vw] lg:pr-[100px] py-[30px] gap-[16px]"
    >
      <h1 class="text-[1.45em] font-[500] gradientText">Programming</h1>
      <p>
        I am a programmer specializing in HTML, CSS, PHP, JS, C#. I will be an
        employee who organizes his own work very well, but also knows how to
        cooperate with a team. I approach solving the tasks entrusted to me
        creatively. I have good communication skills. I would like to use my
        skills at work and thus increase my knowledge and familiarity with
        programming.
      </p>
      <h1 class="text-[1.45em] font-[500] mt-[30px] gradientText">Free time</h1>
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
        const rotate =
          (window.innerWidth < 768 || window.innerWidth > 1024) &&
          window.innerWidth > 500;

        if (rotate) {
          const y =
            window.innerWidth >= 768 ? `calc(${h1Width}px - 100%` : "0px";
          const x =
            window.innerWidth >= 768
              ? `-50%`
              : -0.5 * (h1Width + h1Height) + "px";
          const containerW =
            window.innerWidth > 768 ? `50%` : h1Element.offsetHeight + "px";

          h1Element.style.transform =
            "rotate(" + -90 + `deg) translateX(${x}) translateY(${y})`;
          hContainer.style.width = containerW;
        } else {
          h1Element.style.transform =
            "rotate(" + 0 + `deg) translateX(0) translateY(0)`;
          hContainer.style.width =
            window.innerWidth > 500 ? "50%" : "fit-content";
        }
        hContainer.style.minHeight =
          window.innerWidth > 500 ? h1Width + "px" : "auto";
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
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .about-h {
    text-wrap: wrap;
    text-align: center;
  }
}
p {
  text-align: justify;
}
</style>
