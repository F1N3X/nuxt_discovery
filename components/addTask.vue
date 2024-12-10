<script setup>
    const props = defineProps({
        todo: {type: Object, required: true}
    })


    const errors = ref(null)


    const form = reactive({
        name: '',
    })

    const save = () => {
        if (!form.name) {
            errors.value = 'Task name is required'
            return
        }
        props.todo.addTask(form.name)
        form.name = ''
    }
</script>

<template>
    <form 
        class="border pl-5 rounded flex items-center gap-3"
        :class="errors ? 'border-red-500' : ''"
        @submit.prevent="save"
    >
        <input 
            type="text" 
            class="flex-1 outline-none" 
            placeholder="New task" 
            v-model="form.name" 
            @input="errors=''" 
        />

        <Button type="submit">
            <template #test>
                Add Task
            </template>
        </Button>
    </form>
</template>