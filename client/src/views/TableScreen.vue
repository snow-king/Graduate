<template>
  <div class="flex-col justify-between   min-h-screen bg-eveningSea">
    <Header />
    <div class="flex justify-center items-center ">
      <div class="flex flex-col item-content w-full max-w-screen-xl  ">
        <TableSearch v-model:filters="filters" v-model:inputValue="searchElement" />
        <div class="overflow-x-auto sm:-mx-4 lg:-mx-8">
          <div class=" inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow-sm overflow-hidden my-8">
              <table class="border-collapse w-full text-sm">
                <thead class=" bg-observatory shadow-eveningSea shadow-xl">
                  <tr>
                    <th scope="col" class="border-b text-white font-medium p-4 pl-8 pt-2 pb-3 text-left">
                      ФИО
                    </th>
                    <th scope="col" class="border-b text-white font-medium p-4 pl-8 pt-2 pb-3 text-left">
                      Группа
                    </th>
                    <th scope="col" class="border-b text-white font-medium p-4 pl-8 pt-2 pb-3 text-left">
                      Специальность
                    </th>
                    <th scope="col" class="border-b text-white font-medium p-4 pl-8 pt-2 pb-3 text-left">
                      Компания
                    </th>
                    <th scope="col" class="border-b text-white font-medium p-4 pl-8 pt-2 pb-3 text-left">
                      Должность
                    </th>
                    <th scope="col" class="border-b text-white font-medium p-4 pl-8 pt-2 pb-3 text-left">
                      Город
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <TableItem v-for="graduate of filteredList" v-bind:item="graduate" v-bind:parity="parity = !parity" />
                  <TableItem v-if="!filteredList.length" v-bind:item="emptyRow" v-bind:parity="true" />
                  <tr class="bg-observatory rounded-b-sm rounded-t-none">
                    <th colspan="6" class="rounded-t-none">
                      <div class="p-4 pl-8 pt-2 pb-3 flex justify-around">
                        <div>
                        prev
                        </div>
                        <div>
                        <p class="text-white">{{filteredList.length}}</p>
                        </div>
                        
                        <div>
                         <p class="text-white"> всего найдено - {{filteredList.length}}</p>
                      </div>
                      </div>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import type { Filter } from "@/dto";
import type { Graduate } from "@/dto/graduate.dto";
import { getGraduates } from "@/services/graduate";
import { computed, ref, watch } from "vue";
import Header from "../components/Header/Header.vue";
import TableItem from "../components/Table/TableItem.vue";
import TableSearch from "../components/Table/TableSearch.vue";
const filters = ref<Array<Filter>>([
  {
    id: "army",
    name: "В армии",
    list: ["да", "нет", "не важно"],
    type: "toggle",
    currentElement: "не важно"
  },
  {
    id: "spec_work",
    name: "Работает по специальности",
    list: ["да", "нет", "не важно"],
    type: "toggle",
    currentElement: "не важно"
  },
  {
    id: "city",
    name: "Город",
    list: ["Иркутск", "Новосибирск", "Москва"],
    currentElement: '',
    type: "list"
  },
  {
    id: "specialty",
    name: "Специальность",
    list: ["Программная инженерия", "Безопасность информации"],
    currentElement: '',
    type: "list"
  },
  {
    id: "company",
    name: "Место работы",
    list: ["ИВЦ", "НЕКИНЕМ"],
    currentElement: '',
    type: "list"
  }
])
const emptyRow = {
  name: " ",
  lastName: " ",
  patronymic: "-",
  company: "-",
  position: "-",
  city: "-",
}
const parity = ref(false)
const graduates = ref<Array<Graduate>>([])
const searchElement = ref('')

const updateGraduate = async () => {
  graduates.value = await getGraduates()
}
updateGraduate()
const filteredList = computed<Array<Object>>(() => {
  let checkList = (el: any) => {
    for (let i of filters.value) {
      if (i.type == "toggle") {
        switch (i.currentElement) {
          case "да":
            if (el[i.id] != true) {
              return false
            }
            break;
          case "нет":
            if (el[i.id] != false) {
              return false
            }
             break;
        }
      }
      if (i.type == "list"){
        if (i.currentElement){
          console.log(i.id)
          if (el[i.id] != i.currentElement) {
            return false
          }
        }
      }
    }
    return true
  }
  return graduates.value.filter((el: any) => {
    if (!checkList(el)) {
      return false
    }
    for (let i in el) {
      if (typeof el[i] === 'string') {
        if (el[i]?.includes(searchElement.value)) {
          return true
        }
      }
    }
  })
})
watch(filteredList, () => {
  parity.value = false
})
</script>

<style scoped lang="sass">
table 
  thead 
    th:first-child 
      border-radius: 10px 0 0 0
    th:last-child 
      border-radius: 0 10px 0 0
  tbody
    th:first-child 
      border-radius: 0 0 10px 10px
</style>