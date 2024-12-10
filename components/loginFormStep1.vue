<script setup>
    const form = inject('form')
    const step = inject('step')

    function handleNextStep() {
        if (form.validateForm1()) {
            step.value = 2 // Passer à l'étape 2
        } else {
            alert('Veuillez remplir tous les champs.')
        }
    }


</script>

<template>
    <div class="flex flex-col w-min bg-gray-100">
        STEP 1 {{ form }}

        <input type="text" name="email" id="email" class="bg-blue-100" v-model="form.values.email">
        <input type="password" name="password" id="password" class="bg-blue-100" v-model="form.values.password">

        <button @click="handleNextStep()">Next</button>
    </div>
</template>