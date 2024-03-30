<template>
  <a
    class="relative aspect-[1.2] lg:aspect-[0.8] opacity-0"
    href="https://google.com"
    target="_blank"
  >
    <div
      class="absolute overflow-hidden container rounded-[6px] cursor-pointer"
    >
      <h1
        class="absolute w-fit max-w-[90%] left-1/2 -translate-x-1/2 bottom-[30px] z-[5] text-[1.125em]"
      >
        {{ header }}
      </h1>
      <img
        :src="img"
        alt=""
        class="block h-full object-cover"
        draggable="false"
      />
      <div class="bg h-1/2 w-full absolute bottom-0 left-0"></div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Project",
  props: {
    header: String,
    img: String,
  },
  components: {},
};
</script>

<style scoped>
.container {
  box-shadow: 0px 0px 16px 0px rgba(118, 118, 118, 0.13);
  left: 50%;
  top: 50%;
  height: 100%;
  width: 100%;
  transition: height 0.3s, width 0.3s, box-shadow 0.3s;
  transform: translate(-50%, -50%);
}
.container:hover {
  height: 105%;
  width: 105%;
  z-index: 5;
  box-shadow: 0px 0px 16px 0px #46bd7d40;
}
.bg {
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(41, 53, 86, 0) 100%
  );
}
</style>
