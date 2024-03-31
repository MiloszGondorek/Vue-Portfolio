<template>
  <div class="w-full bg-[#1C1C1C] pt-[50px] pb-0 lg:pb-[50px]">
    <div class="limit lg:w-4/5 mx-auto">
      <h1
        class="gradientText text-[2.1875em] w-4/5 lg:w-fit mx-auto lg:mx-0 showText"
      >
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
        <form
          id="mailForm"
          class="flex flex-col gap-4 min-w-[50%] w-4/5 lg:w-fit mx-auto lg:mx-0"
        >
          <div class="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              class="sm:w-1/2 formInput opacity-0"
            />
            <input
              type="text"
              placeholder="Phone"
              class="sm:w-1/2 formInput opacity-0"
              name="phone"
              v-model="phoneNumber"
              @input="validateInput"
            />
          </div>
          <input
            type="text"
            placeholder="E-mail"
            class="formInput opacity-0"
            name="mail"
          />
          <textarea
            placeholder="Message"
            class="my-[10px] min-h-[50px] formInput opacity-0"
            name="message"
          ></textarea>
          <label class="flex gap-x-[10px] cursor-pointer">
            <div class="my-auto w-[15px] h-[15px] relative">
              <input type="checkbox" id="policy" class="hidden" name="terms" />
              <img
                :src="require('@/assets/checkbox.png')"
                alt=""
                id="policyImg"
                class="absolute top-1/2 left-0 -translate-y-1/2"
              />
            </div>
            <p class="select-none">
              I agree to the
              <a
                href="/policy.html"
                target="_blank"
                class="cursor-pointer text-[#359E65] font-[500] opacity-80 hover:opacity-100"
                >privacy policy</a
              >
            </p>
          </label>
          <p id="error" class="hidden">123</p>
          <ButtonVue msg="Send message" link="asd" class="ml-auto" />
        </form>
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
  data() {
    return {
      phoneNumber: "",
    };
  },
  mounted() {
    window.addEventListener("load", function () {
      document
        .getElementById("mailForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const formData = new FormData(this);

          fetch("mail.php", {
            method: "POST",
            body: formData,
          })
            .then((response) => response.text())
            .then((data) => {
              const error = document.getElementById("error");
              error.classList.remove("hidden");
              if (data == "null") {
                const form = document.getElementById("mailForm");
                Array.from(form.querySelectorAll("input,textarea")).forEach(
                  (element) => {
                    element.value = "";
                  }
                );

                error.classList.remove("error");
                error.classList.add("correct");
                error.innerHTML = "Email has been sent";
              } else {
                error.classList.remove("correct");
                error.classList.add("error");
                error.innerHTML = data;
              }
            });
        });

      const policy = this.document.getElementById("policy");
      policy.addEventListener("change", function (e) {
        document.getElementById("policyImg").src = policy.checked
          ? require("@/assets/checkbox_selected.png")
          : require("@/assets/checkbox.png");
      });
    });

    const checkVisible = () => {
      const t = isVisible(document.getElementById("mailForm"));
      if (t) {
        const info = document.getElementsByClassName("contactInfo");
        for (var i = 0; i < info.length; i++) {
          (function (index) {
            sleep(200 * index).then(() => {
              info[index].classList.add("showText");
            });
          })(i);
        }
        const input = document.getElementsByClassName("formInput");
        for (var i = 0; i < input.length; i++) {
          (function (index) {
            sleep(200 * index).then(() => {
              input[index].classList.add("showAnim");
            });
          })(i);
        }
        window.removeEventListener("scroll", checkVisible);
      }
    };
    window.addEventListener("scroll", checkVisible);
  },
  methods: {
    validateInput() {
      this.phoneNumber = this.phoneNumber.replace(/[^\d\s-]/g, "");

      this.phoneNumber = this.phoneNumber.replace(/-+/g, "-");

      this.phoneNumber = this.phoneNumber.replace(/\s+/g, " ");

      if (this.phoneNumber.length > 11) {
        this.phoneNumber = this.phoneNumber.slice(0, 11);
      }
    },
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

.correct {
  color: #359e65;
}
.error {
  color: #bd2b2b;
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
