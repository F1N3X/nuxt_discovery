<script setup>
    const form = useLoginForm()
    provide('form', form)

    const step = ref(1)
</script>

<template>
    <LoginFormStep1 v-if="step == 1" />
    <LoginFormStep2 v-else-if="step == 2" />
    <LoginFormStep3 v-else-if="step == 3" />
</template>