<script setup>
    const form = inject('form')
    const step = inject('step')

    function handleNextStep() {
        if (form.validateForm2()) {
            step.value = 3
        } else {
            alert('Veuillez remplir tous les champs.')
        }
    }


</script>

<template>
    <div class="flex flex-col w-min bg-gray-100">
        STEP 2 {{ form }}

        <input type="text" name="firstname" id="firstname" class="bg-blue-100" v-model="form.values.name">
        <input type="number" name="age" id="age" class="bg-blue-100" v-model="form.values.age">

        <button @click="handleNextStep()">Next</button>
    </div>
</template>