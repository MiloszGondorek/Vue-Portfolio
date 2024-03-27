<template>
  <div
    class="w-[calc((100%/3)-8px)] bg-[#1F1F1F] max-w-[300px] py-[30px] px-[15px] rounded-[5px] flex flex-col gap-[15px]"
    v-bind:class="dark ? 'dark' : 'color bg-[#359E65]'"
  >
    <img :src="img" alt="" class="w-[60px] h-[60px] object-scale-down" />
    <h1 class="text-[1.25em]">{{ title }}</h1>
    <p class="text-[1em]">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: "Info",
  abs: "@",
  props: {
    title: String,
    desc: String,
    dark: Boolean,
    img: String,
  },
};
</script>

<style scoped>
.dark {
  box-shadow: -5px 5px 18px 3px #81818112;
}
.dark h1 {
  color: #bdbdbd;
}
.color {
  box-shadow: -5px 5px 18px 3px #359e6512;
}

.color h1,
.color p {
  color: #d1d1d1;
}
</style>
