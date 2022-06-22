<script lang="ts" setup>
import type { ComponentInstance } from '@uniformdev/canvas';

const props = defineProps<{
  title: string;
  text: string;
  image: string;
  component: ComponentInstance;
}>();

const flexDirection = computed(() =>
  props.component.variant === 'whyattendleft' ? 'row' : 'row-reverse',
);
</script>

<template>
  <section class="bg-white border-b py-8">
    <div
      class="container mx-auto flex flex-wrap pt-4 pb-12"
      :style="{ flexDirection }"
    >
      <div v-if="image" class="w-1/2">
        <img :src="image" :alt="title" width="400" height="400" class="p-10" />
      </div>
      <div class="w-1/2">
        <div class="p-10">
          <h2
            class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800"
            v-text="title"
          />
          <hr />
          <p class="text-gray-800 p-10 whitespace-pre-line" v-text="text" />
        </div>
      </div>
    </div>
  </section>
</template>
