<script setup>
    const todo = useTodo()
</script>

<template>
    <div>
        <Todo :todo="todo"/>
    </div>
</template>