<script setup>
    const { params } = useRoute()
    const article = await queryContent(`articles/${params.article}`).findOne()
</script>

<template>
    <NuxtLayout name="blog">
        <div class="container">
        <h1>{{ article.title }}</h1>
        <p>{{ article.content }}</p>
        </div>
    </NuxtLayout>
</template>