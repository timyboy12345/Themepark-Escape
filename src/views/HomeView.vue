<template>
  <div class="flex flex-row pb-8">
    <div class="lg:max-w-4xl xl:max-w-6xl flex-grow mx-4 lg:mx-auto mt-16">
      <div class="text-4xl font-bold mb-8 border-l-8 pl-4 border-white">Parkscape</div>

      <div class="mb-16 xl:-translate-x-12 relative">
        <div class="w-[50%] h-full translate-x-8 xl:-translate-x-16 translate-y-5 absolute bg-sky-100/5"></div>

        <p class="mb-24 mt-12 xl:-translate-x-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus leo lacus, ut pretium massa sagittis eget.
          Suspendisse porttitor porta hendrerit. Donec finibus ex neque, non placerat dolor iaculis egestas. Maecenas ut
          euismod quam.
        </p>
      </div>


      <p class="mb-24 max-w-4xl ml-auto xl:text-right">
        Aliquam pellentesque, leo nec finibus pretium, mauris enim sagittis arcu, lacinia luctus ex enim suscipit
        purus.
        Aenean mi diam, pellentesque nec porta quis, lacinia a orci. Nullam sagittis nibh a diam hendrerit, sed
        ultrices.
      </p>

      <div class="mb-16 xl:translate-x-12 relative">
        <div class="w-full xl:w-full h-full -translate-x-2 xl:-translate-x-5 translate-y-5 absolute bg-sky-100/5"></div>

        <p>Sed efficitur sollicitudin elit, ac facilisis ligula convallis vitae. Ut blandit enim velit, ut ultricies
          velit
          pharetra non. Sed magna orci, venenatis eget nisi eu, venenatis hendrerit metus. Duis odio sapien, placerat ut
          tempor eget, ultrices non mauris. Aliquam imperdiet ex ac sapien finibus, at faucibus nulla fringilla. Sed sit
          amet nisi nec tortor facilisis pharetra. Nulla quis viverra felis.
        </p>
      </div>

      <div class="flex flex-row justify-end">
        <default-button to="/map">
          <user-icon class="w-6 h-6 mr-2"/>
          Doorgaan
        </default-button>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultButton from "../components/DefaultButton.vue";
import {UserIcon} from "@heroicons/vue/outline"

export default {
  components: {DefaultButton, UserIcon}
}
</script>
