<template>
  <div
    class="contactInfo flex flex-col lg:flex-row py-[20px] lg:py-0 opacity-0"
  >
    <img :src="src" alt="" class="block w-[35px] lg:mr-[20px] self-center" />
    <p class="h-fit mt-[10px] lg:mt-auto my-auto text-[1.1em] self-center">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
  props: {
    text: String,
    src: String,
  },
};
</script>
