<template>
  <div
    class="opacity-0 flex w-full md:w-[calc((100%/3)-8px)] bg-[#292929] md:max-w-[300px] py-[30px] px-[30px] rounded-[5px] flex-col gap-[15px]"
    v-bind:class="dark ? 'dark' : 'color !bg-[#359E65]'"
  >
    <img
      :src="img"
      alt=""
      class="w-[60px] h-[60px] object-scale-down mx-auto md:mx-0"
    />
    <h1 class="text-[1.25em] w-fit mx-auto md:mx-0">{{ title }}</h1>
    <p class="text-[1em] w-fit mx-auto md:mx-0 text-center md:text-left">
      {{ desc }}
    </p>
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
