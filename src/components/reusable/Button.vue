<template>
  <a :href="link">
    <button class="bg-[#359E65] py-[12px] px-[35px] rounded-[3px] w-full">
      <p class="text-[#F0F0F0] text-[1em]">{{ msg }}</p>
    </button>
  </a>
</template>

<script>
export default {
  name: "ButtonVue",
  props: {
    link: String,
    msg: String,
  },
};
</script>

<style scoped>
button {
  box-shadow: 0px 0px 9px 4px rgba(53, 158, 101, 0.25);
}
</style>
