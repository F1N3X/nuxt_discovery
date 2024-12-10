<script setup>
    const articles = await queryContent("articles").find()
</script>

<template>
    <NuxtLayout name="blog">
        <div>
            <div v-for="article in articles" :key="article.slug">
                <NuxtLink 
                    :to="`/blog/${article._path.split('/').pop()}`"
                    class="text-blue-500 hover:text-blue-700 hover:underline"
                    :key="article._path"
                >
                    {{ article.title }}
                </NuxtLink>
            </div>
        </div>
    </NuxtLayout>
</template>