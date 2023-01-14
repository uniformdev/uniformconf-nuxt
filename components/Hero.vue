<script lang="ts" setup>
// TODO: Add component: ComponentInstance as a prop
defineProps<{
  content: {
    title: string;
    text: string;
    buttonText?: string;
    buttonLink?: string;
    image?: {
      url: string;
    };
  };
}>();
</script>

<template>
  <div>
    <div class="pt-24 text-white">
      <div
        class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <div
          class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500"
        >
          <p class="uppercase tracking-loose w-full">This is Uniform demo</p>
          <h1 class="my-4 text-5xl font-bold leading-tight">
            {{ content.title }}
          </h1>
          <p class="leading-normal text-2xl mb-8">{{ content.text }}</p>
          <NuxtLink
            v-if="content.buttonText"
            :to="content.buttonLink ? content.buttonLink : '#'"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          >
            {{ content.buttonText }}
          </NuxtLink>
        </div>
        <div class="w-full md:w-3/5 py-6 text-center">
          <img
            v-if="content.image?.url"
            :key="content.image?.url"
            class="w-full md:w-4/5 z-50 min-h-500 max-h-500"
            :height="560"
            :width="560"
            :src="content.image?.url"
            :alt="content.buttonText"
          />
        </div>
      </div>
    </div>
    <Splitter />
  </div>
</template>
