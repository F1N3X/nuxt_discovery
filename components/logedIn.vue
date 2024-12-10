<script setup>
    const form = inject('form')
</script>

<template>
    <div>
        <header class="w-100 bg-gray-500 text-white">
            Profile
        </header>
        <div>
            <h1>Profile</h1>
            <p>Name : {{ form.values.name }}</p>
            <p>Age: {{ form.values.age }}</p>
            <p>Email: {{ form.values.email }}</p>
            <p>Username: {{ form.values.username }}</p>
        </div>
    </div>
</template>