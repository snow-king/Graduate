<template>
  <Transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
      leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
      <div v-show="showing" class="z-30 fixed inset-0 transition-opacity">
        <div  class="absolute inset-0 bg-black opacity-50 " tabindex="0" @click="$emit('close')"></div>
      </div>
    </Transition>
  <Transition name="fade" >
   <div v-show="showing" class="fixed inset-0 w-full h-screen flex items-center justify-center z-50 0">
      <div class="relative w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 opacity-1" >
        <button aria-label="close" class="absolute top-0 right-0 text-xl text-gray my-2 mx-4" @click="$emit('close')">
        close
        </button>
        <slot></slot>
      </div> 
    </div>
  </Transition>
</template>

<script setup lang="ts">import { watch } from 'vue';

const props = defineProps({
  showing: {
    required: true,
    type: Boolean
  }
})
const emit = defineEmits(['close'])

</script>

<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>