<script setup>
    const props = defineProps({
        task: {type: Object, required: true},
        todo: {type: Object, required: true},
    })
</script>

<template>
    <div class="border px-5 py-3 rounded flex items-center gap-3">

        <input type="checkbox" v-model="props.task.done" class="w-5 h-5"/>

        {{ props.task.name }}

        <span class="text-grey-500 hover:text-red-500 hover:underline cursor-pointer"
            @click="todo.removeTask(props.task.id)"
        >
            Delete
        </span>

    </div>
</template>