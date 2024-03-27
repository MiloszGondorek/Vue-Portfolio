<template>
  <div class="w-full bg-[#1C1C1C] py-[50px]">
    <div class="limit w-4/5 mx-auto">
      <h1 class="gradientText text-[2.1875em]">Contact me</h1>
      <div class="flex justify-between my-[40px]">
        <div class="grid info gap-x-[20px] gap-y-[40px] h-fit">
          <img src="@/assets/MailColor.png" alt="" />
          <p>m.gondorek.kontakt@gmail.com</p>

          <img src="@/assets/PhoneColor.png" alt="" />
          <p>+48 607 761 708</p>

          <img src="@/assets/linkedinColor.png" alt="" />
          <p>Miłosz Gondorek</p>
        </div>
        <div class="flex flex-col gap-4 min-w-[50%]">
          <div class="flex gap-4">
            <input type="text" placeholder="Name" class="w-1/2" />
            <input type="text" placeholder="Phone" class="w-1/2" />
          </div>
          <input type="text" placeholder="E-mail" />
          <textarea placeholder="Message" class="my-[10px]"></textarea>
          <ButtonVue msg="Send message" link="asd" class="ml-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonVue from "@/components/reusable/Button.vue";

export default {
  name: "Contact",
  components: {
    ButtonVue,
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
.info {
  grid-template-columns: auto auto;
}
.info p {
  margin: auto 0;
  font-size: 1em;
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
