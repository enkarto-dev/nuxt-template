<template>
  <!-- https://image.nuxt.com/usage/nuxt-img -->
  <NuxtImg
    :src="src"
    :alt="alt"
    format="webp"
    fit="cover"
    quality="90"
    blur="0"
    loading="lazy"
    v-bind="optionalAttrs"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt: string;

  // Provider specific modifiers
  modifiers?: any;

  // https://image.nuxt.com/usage/nuxt-img#width-height
  // Specify width/height of the image.
  width?: number;
  height?: number;

  // https://image.nuxt.com/usage/nuxt-img#sizes
  // Specify responsive sizes.
  sizes?: string;
}>();

const optionalAttrs = computed(() => ({
  ...(props.width && props.height
    ? { width: props.width, height: props.height }
    : {}),
  ...(props.sizes ? { sizes: props.sizes } : {}),
  ...(props.modifiers ? { modifiers: props.modifiers } : {}),
}));
</script>
