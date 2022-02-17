<template>
  <component is="router-link" :to="to"
             class="flex flex-row items-center py-2 px-4 rounded shadow hover:bg-blue-200/10 border-blue-100 ring ring-transparent hover:ring-sky-100/20 border transition-all duration-200 text-white">
    <slot>
      ...
    </slot>
  </component>
</template>

<script>
export default {
  name: 'DefaultButton',
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>
