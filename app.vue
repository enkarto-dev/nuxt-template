<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { t } = useAppI18n("home.hero");
const title = t("title");
const description = t("description");
const image = "";
const url = "https://enkarto.com";
useSeoMeta({
  title,
  description,
  // Open Graph
  ogUrl: url,
  ogType: "website",
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  // Twitter
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCreator: "@enkarto",
  twitterCard: "summary_large_image",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>
