<script setup>
    const props = defineProps({
        todo : {type: Object, required: true}
    })
</script>

<template>
    <div class="flex flex-col gap-3 max-w-xl mx-auto">
        <AddTask :todo="todo"/>
        <Task 
            v-for="task in props.todo.task" 
            :key="task.id" 
            :task="task"
            :todo="todo"
        />
    </div>
</template>