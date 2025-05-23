<script setup lang="ts">
const props = defineProps({
    id:{
        type: Number
    }
})
console.log({ id: props.id });

</script>

<template>
    <h1>Item # {{ id }}</h1>
</template>