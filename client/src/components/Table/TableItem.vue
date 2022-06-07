<template>
  <Transition appear name="slide-dropdown">
    <tr class="bg-white " :class="[parity ? 'bg-white' : 'bg-edgewater',]">
      <td class="border-b border-edgewater  p-4 pl-8  ">
        {{ props.item.lastName + "." + props.item.name[0] + "." + props.item.patronymic[0] }}
      </td>
      <td class="border-b border-edgewater  p-4 pl-8">
        {{ props.item.group || "-" }}
      </td>
      <td class="border-b border-edgewater  p-4 pl-8">
        {{ props.item.company || "-" }}
      </td>
      <td class="border-b border-edgewater  p-4 pl-8">
        {{ props.item.position || "-" }}
      </td>
      <td class="border-b border-edgewater  p-4 pl-8">
        {{ props.item.position || "-" }}
      </td>
      <td class="border-b border-edgewater  p-4 pl-8">
        {{ props.item.city || "-" }}
      </td>
    </tr>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    value: {
      group: String,
      name: String,
      lastName: String,
      patronymic: String,
      company: String,
      position: String,
      city: String,
    },
    required: true
  },
  parity: Boolean,
})

</script>

<style lang="scss" scoped>
.slide-dropdown-enter-active {
    animation: translateX 0.5s;
}

.slide-dropdown-leave-active {
   animation: translateX 0.5s reverse;
}

@keyframes  translateX{
  0% {
    opacity: 0;
    border: 0;
    transform: translateX(60px);
  }
  
  80% {
    transform: translateX(-5px);
    border: 0;
  }

  100% {
    opacity: 1;
    border: 0;
    transform: translateX(0px);
  }
}
</style>