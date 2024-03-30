<template>
  <header class="w-full h-[80px] absolute left-0 top-0 z-[100]" ref="header">
    <div class="w-4/5 limit h-[70px] mx-auto flex justify-between">
      <a href="">
        <p
          class="my-auto text-[#359E65] text-[50px] hover:text-[#4d8867] transition"
        >
          M
        </p></a
      >
      <div class="hidden md:flex left my-auto gap-[40px]" ref="links">
        <p onclick="scrollToEl('main')" class="cursor-pointer">HOME</p>
        <p onclick="scrollToEl('about')" class="cursor-pointer">ABOUT</p>
        <p onclick="scrollToEl('projects')" class="cursor-pointer">PROJECTS</p>
        <p onclick="scrollToEl('contact')" class="cursor-pointer">CONTACT</p>
      </div>
      <img
        src="@/assets/mail.png"
        class="block md:hidden w-[30px] h-[30px] my-auto cursor-pointer opacity-80 hover:opacity-100"
        id="more"
        alt=""
        onclick="showHeader()"
      />
    </div>
  </header>
  <div
    class="hidden w-full fixed h-[80px] left-0 top-0 z-[-100] bg-[#111111] opacity-0"
    ref="fixedHeader"
  ></div>
  <div
    class="flex w-[60vw] fixed h-[100vh] right-0 top-0 z-[100] bg-[#111111] side translate-x-[100%]"
  >
    <div class="flex flex-col w-full" ref="links">
      <div class="h-[80px] flex flex-col ml-[30px]">
        <img
          src="@/assets/mail.png"
          class="block md:hidden w-[30px] h-[30px] my-auto cursor-pointer opacity-80 hover:opacity-100"
          id="more"
          alt=""
          onclick="hideHeader()"
        />
      </div>
      <p onclick="scrollToEl('main'), hideHeader()" class="cursor-pointer">
        HOME
      </p>
      <p onclick="scrollToEl('about'), hideHeader()" class="cursor-pointer">
        ABOUT
      </p>
      <p onclick="scrollToEl('projects'), hideHeader()" class="cursor-pointer">
        PROJECTS
      </p>
      <p onclick="scrollToEl('contact'), hideHeader()" class="cursor-pointer">
        CONTACT
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const fixedHeader = this.$refs.fixedHeader;
    const header = this.$refs.header;
    const clone = () => {
      fHeader();
      const child = header.children[0];
      fixedHeader.appendChild(child.cloneNode(true));
    };
    const fHeader = () => {
      if (window.scrollY > 300) {
        fixedHeader.classList.add("showHeader");
        fixedHeader.classList.remove("hideHeader");
        fixedHeader.classList.remove("hidden");
        fixedHeader.style.zIndex = 100;
      } else {
        fixedHeader.classList.add("hideHeader");
        fixedHeader.classList.remove("showHeader");
        sleep(400).then(() => {
          if (fixedHeader.classList.contains("hideHeader")) {
            fixedHeader.style.zIndex = -100;
          }
        });
      }
    };
    window.addEventListener("load", clone);
    window.addEventListener("scroll", fHeader);
    window.showHeader = function () {
      document.getElementsByClassName("side")[0].style.transform =
        "translateX(0%)";
    };
    window.hideHeader = function () {
      document.getElementsByClassName("side")[0].style.transform =
        "translateX(100%)";
    };
  },
};
</script>

<style scoped>
.left p {
  color: #bdbdbd;
  font-size: 0.875em;
  font-weight: normal;
}

.side p {
  padding: 20px 30px;
  transition: background-color 0.5s;
}

.side p:hover {
  background-color: #359e65;
}

.side {
  transition: transform 1s;
}
#more {
  transition: opacity 0.5s;
}

@keyframes showHeader {
  0% {
    opacity: 0%;
    transform: translateY(-50%);
  }
  100% {
    opacity: 100%;
    transform: translateY(0%);
  }
}
@keyframes hideHeader {
  0% {
    opacity: 100%;
    transform: translateY(0%);
  }
  100% {
    opacity: 0%;
    transform: translateY(-50%);
  }
}

.showHeader {
  opacity: 100%;
  animation-name: showText;
  animation-duration: 0.4s;
  animation-timing-function: linear;
}

.hideHeader {
  opacity: 0%;
  animation-name: hideHeader;
  animation-duration: 0.4s;
  animation-timing-function: linear;
}
</style>
