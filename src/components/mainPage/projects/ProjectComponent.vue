<template>
  <a
    class="relative aspect-[1.2] lg:aspect-[0.8] opacity-0"
    :href="link"
    target="_blank"
  >
    <div
      class="absolute overflow-clip container rounded-[0px] cursor-pointer bg-black p-0"
    >
      <div class="bg min-h-[50%] w-[100%] z-[5] absolute bottom-0"></div>
      <h1
        class="absolute w-fit max-w-[90%] left-1/2 -translate-x-1/2 bottom-[30px] z-[5] text-[1.125em]"
      >
        {{ header }}
      </h1>
      <img
        :src="img"
        alt=""
        class="block h-full object-cover absolute w-full"
        draggable="false"
      />
    </div>
  </a>
</template>

<script>
export default {
  name: "Project",
  props: {
    header: String,
    img: String,
    link: String,
  },
  components: {},
};
</script>

<style scoped>
.container {
  /* box-shadow: 0px 0px 16px 0px rgba(118, 118, 118, 0.13); */
  left: 50%;
  top: 50%;
  height: 100%;
  width: 100%;
  /* transition: height 0.3s, width 0.3s; */
  transform: translate(-50%, -50%);
}
.container:hover {
  height: 105%;
  width: 105%;
  z-index: 5;
  /* box-shadow: 0px 0px 16px 0px #46bd7d20; */
}
.bg {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  /* border-radius: 0px 0px 3px 3px; */
}
</style>
