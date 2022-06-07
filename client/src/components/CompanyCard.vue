<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import type { CompanyDto } from '@/dto';
import type { PropType } from 'vue';

const porps = defineProps({
    companyName: {
        required: true,
        type: String
    }
})
const updateCompany = () =>{
    
}
</script>

<style scoped>

</style>