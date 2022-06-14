<template>
    <div class="flex-col justify-center bg-white py-6">
        <div class="flex justify-around">
            <div class="flex pb-3">
                <span class="pr-2 pt-1 font-semibold ">Специальность</span>
                <SelectInput v-model:data="specialty" v-model:currentElement="currentSpecialty" class="z-10" />
            </div>
            <div class="flex">
                <span class="pr-2 pt-1 font-semibold ">Год обучения</span>
                <SelectInput v-model:data="years" v-model:currentElement="currentYear" class="z-10" />
            </div>

        </div>
        <hr class=" border-eveningSea m-2 shadow-md">
        <div class="flex flex-wrap mx-6 -z-50">
            <div class="m-4" v-for="graduate in currentList">
                <div
                    class="flex-col px-6 py-6 justify-center items-center bg-observatory border min-w-max border-gray rounded-md shadow-md">
                    <div class="flex bg-white p-2 rounded-md font-medium ">
                        {{ `${graduate.lastName}` }}
                        <br />
                        {{ `${graduate.name[0]}.${graduate.patronymic[0]}.` }}
                    </div>
                    <button @click="editGraduate(graduate)"
                        class="bg-corn hover:bg-California text-white font-bold py-2 px-4 mx-3 mt-5 rounded-md focus:outline-none hover:drop-shadow-inner-lg focus:border-black-1 drop-shadow-md">
                        изменить
                    </button>
                </div>
            </div>
            <div class="flex m-2 py-7 min-w-max justify-center rounded-md" v-if="(currentSpecialty && currentSpecialty)">
                <button @click="toggleModal"
                    class="bg-corn hover:bg-California text-white font-bold h-min  p-2 rounded-md focus:outline-none hover:drop-shadow-inner-lg focus:border-black-1 drop-shadow-md text-5xl">
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1229_4)">
                            <path
                                d="M25.4847 4.41574L19.4243 4.47301L19.5675 19.6249L4.4156 19.7681L4.47287 25.8284L19.6248 25.6853L19.768 40.8372L25.8283 40.7799L25.6851 25.628L40.837 25.4848L40.7798 19.4245L25.6279 19.5677L25.4847 4.41574Z"
                                fill="#FCFBFB" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1229_4">
                                <rect width="32" height="32" fill="white"
                                    transform="translate(0 22.8402) rotate(-45.5414)" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
            
        </div>
        <hr class=" border-eveningSea m-2 shadow-md" v-if="currentSpecialty && currentSpecialty">
        <div class="flex justify-center pt-4"  v-if="currentSpecialty && currentSpecialty">
            <button class="bg-corn text-white px-4 py-2  uppercase tracking-wide font-bold rounded-lg text-xl hover:bg-California"
                @click="save">
                сохранить
            </button>
        </div>
        <Transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100">
        <div class="flex justify-center pt-4" v-if="saveFlag">
                <span class="border-2 border-gray p-1 rounded-md">изменения сохранены</span>
         </div>
        </Transition>
    </div>
    <CardModal v-model:showing="modalShowing" @close="toggleModal">
        <h2 class="text-xl font-bold text-gray-900">Пожалуйста заполните все данные</h2>
        <div v-for="field in fields" class="flex justify-between my-4 ">
            <div class="mr-2 text-bold">
                {{ field.name }}

            </div>
            <div v-if="field.type == 'string'">
                <input
                    class="rounded-md border border-gray shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray focus:ring-California"
                    v-model="field.currentElement" />
            </div>
            <SelectInput v-if="field.type == 'list'" v-model:data="field.value"
                v-model:current-element="field.currentElement"></SelectInput>
            <div class="flex justify-center" v-if="field.type == 'toggle'">
                <div v-for="valueFilter in field.value">
                    <input class="form-radio  appearance-none rounded-full h-4 w-4 border border-gray 
              bg-white checked:bg-California checked:border-California focus:outline-none 
              transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left px-2 cursor-pointer"
                        type="radio" :value=valueFilter v-model=field.currentElement>
                    <label class="px-2 inline-block text-gray-800" for="inlineRadio10">{{ valueFilter }}</label>
                </div>
            </div>

        </div>
        <div class="flex justify-center">
            <button class="bg-corn text-white px-4 py-2  text-sm uppercase tracking-wide font-bold rounded-lg hover:bg-California"
                @click="addGraduate">
                подтвердить
            </button>
        </div>
    </CardModal>
</template>

<script lang="ts" setup>
import type { Graduate } from "@/dto/graduate.dto";
import { getGraduates, getGraduatesFields } from "@/services/graduate";
import { computed, ref } from "vue";
import SelectInput from "../SelectInput.vue";
import CardModal from '../CardModal.vue'
const graduates = ref<Array<Graduate>>([])

const updateGraduate = async () => {
    graduates.value = await getGraduates()
}
updateGraduate()

const saveFlag = ref(false)
const currentSpecialty = ref('')
const years = computed(()=>{
   return [...new Set(graduates.value.map((el)=> el.year))]
})
const currentYear = ref('')
const modalShowing = ref(false)

const specialty = computed(()=>{
   return [...graduates.value.map((el)=> el.specialty)]
})
const currentList = computed(()=>{
    return graduates.value.filter((el)=> el.specialty == currentSpecialty.value && el.year == currentYear.value)
})
function toggleModal() {
    modalShowing.value = !modalShowing.value
}
const fields = ref<Array<{ name: string, value: string | Array<string> | boolean, type: 'list' | 'string' | 'toggle', currentElement: String }>>()
const getFields = async () => {
    fields.value = await getGraduatesFields()
}
getFields()

console.log(fields)
const editGraduate = (graduate: Graduate) => {
    if (fields.value) {
        fields.value[0].currentElement = graduate.name
        fields.value[1].currentElement = graduate.lastName
        fields.value[2].currentElement = graduate.patronymic
        fields.value[3].currentElement = graduate.company
        fields.value[4].currentElement = graduate.position
        fields.value[5].currentElement = graduate.city
        fields.value[6].currentElement = graduate.army
        fields.value[7].currentElement = graduate.spec_work ? "Да" : "Нет"
        fields.value[8].currentElement = graduate.orphan ? "Да" : "Нет"
        fields.value[9].currentElement = graduate.invalid ? "Да" : "Нет"
    }
    toggleModal()
}
const save = ()=>{
    saveFlag.value = !saveFlag.value

    setTimeout(()=>{
        saveFlag.value = !saveFlag.value
    },5000)
}
const addGraduate = () => {
    if (fields.value) {
        if (graduates.value.filter((el) => el.name === fields.value[0].currentElement && el.lastName=== fields.value[1].currentElement && el.patronymic === fields.value[2].currentElement)) {
            graduates.value.map((el)=>{
                if (el.name === fields.value[0].currentElement && el.lastName=== fields.value[1].currentElement && el.patronymic === fields.value[2].currentElement){
                    el.name = fields.value[0].currentElement
                    el.lastName = fields.value[1].currentElement
                    el.patronymic= fields.value[2].currentElement
                    el.company = fields.value[3]?.currentElement
                    el.position = fields.value[4]?.currentElement
                    el.city = fields.value[5].currentElement
                    el.army= fields.value[6].currentElement
                    el.spec_work= fields.value[7].currentElement == "Да"
                    el.orphan=fields.value[8].currentElement == "Да"
                    el.invalid= fields.value[9].currentElement == "Да"
                }
            })
        } else {
            let graduate: Graduate = {
                name: fields.value[0].currentElement,
                lastName: fields.value[1].currentElement,
                patronymic: fields.value[2].currentElement,
                company: fields.value[3]?.currentElement,
                position: fields.value[4]?.currentElement,
                city: fields.value[5].currentElement,
                army: fields.value[6].currentElement,
                spec_work: fields.value[7].currentElement == "Да",
                orphan: fields.value[8].currentElement == "Да",
                invalid: fields.value[9].currentElement == "Да",
            }
            graduates.value.push(graduate)
            
            getFields()
        }
        getFields()
        toggleModal()
    }
}
// TODO: добавление выпускника на сервер -> обновление данных ->

</script>

<style scoped>
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