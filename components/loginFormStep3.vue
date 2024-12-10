<script setup>
    const form = inject('form')
    const step = inject('step')

    function handleNextStep() {
        if (form.validateForm3()) {
            step.value = 4
        } else {
            alert('Veuillez remplir tous les champs.')
        }
    }


</script>

<template>
    <div class="flex flex-col w-min bg-gray-100">
        STEP 3 {{ form }}

        <input type="text" name="username" id="username" class="bg-blue-100" v-model="form.values.username">

        <button @click="handleNextStep()">Next</button>
    </div>
</template>