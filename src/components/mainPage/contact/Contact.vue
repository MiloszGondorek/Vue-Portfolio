<template>
  <div class="w-full bg-[#1C1C1C] pt-[50px] pb-0 lg:pb-[50px]">
    <div class="limit lg:w-4/5 mx-auto">
      <h1 class="gradientText text-[2.1875em] w-4/5 lg:w-fit mx-auto lg:mx-0">
        Contact me
      </h1>
      <div
        class="flex flex-col-reverse lg:flex-row justify-between mt-[40px] lg:mb-[40px]"
      >
        <div
          class="flex flex-col gap-x-[20px] lg:gap-y-[40px] h-fit mt-[50px] lg:mt-0"
        >
          <ContactInfo
            text="m.gondorek.kontakt@gmail.com"
            :src="require('@/assets/MailColor.png')"
            class="bg-[#292929] lg:bg-transparent"
          />
          <ContactInfo
            text="+48 607 761 708"
            :src="require('@/assets/PhoneColor.png')"
          />
          <ContactInfo
            text="Miłosz Gondorek"
            :src="require('@/assets/linkedinColor.png')"
            class="bg-[#292929] lg:bg-transparent"
          />
        </div>
        <div
          class="flex flex-col gap-4 min-w-[50%] w-4/5 lg:w-fit mx-auto lg:mx-0"
        >
          <div class="flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="Name" class="sm:w-1/2" />
            <input type="text" placeholder="Phone" class="sm:w-1/2" />
          </div>
          <input type="text" placeholder="E-mail" />
          <textarea
            placeholder="Message"
            class="my-[10px] min-h-[50px]"
          ></textarea>
          <ButtonVue msg="Send message" link="asd" class="ml-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonVue from "@/components/reusable/Button.vue";
import ContactInfo from "./ContactInfo.vue";

export default {
  name: "Contact",
  components: {
    ButtonVue,
    ContactInfo,
  },
};
</script>

<style scoped>
img {
  margin: auto 0;
  width: 40px;
  height: 40px;
  object-fit: scale-down;
}

input::placeholder,
textarea::placeholder {
  color: #bdbdbd91;
  transition: color 0.5s;
}
input:focus,
input:focus::placeholder,
textarea:focus::placeholder,
textarea:focus {
  color: #d6d4d4;
}

input,
textarea {
  padding: 5px 10px;
  transition: color 2s;
}

input {
  background-color: transparent;
  border-bottom: 1px solid #bdbdbd;
  color: #bdbdbd;
  outline: none;
}

textarea {
  outline: none;
  background: transparent;
  border: 1px solid #bdbdbd;
  color: #bdbdbd;
  height: 100px;
}
</style>
