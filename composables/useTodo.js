export default function () {
    const task = reactive([])

    const addTask = (name) => {
        task.push({ id: generateId(), name, done: false })
    }

    const removeTask = (id) => {
        const indexToRemove = task.findIndex((task) => task.id === id)
        task.splice(indexToRemove, 1)
    }

    return {
        task,
        addTask,
        removeTask
    }
}