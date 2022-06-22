<script lang="ts" setup>
import type { ComponentInstance } from '@uniformdev/canvas';

defineProps<{
  title: string;
  description: string;
  audience: string;
  component: ComponentInstance;
}>();
</script>

<template>
  <div
    class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow space-y-2 pt-2"
    :key="audience"
  >
    <div
      class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden"
    >
      <div class="mt-3 mb-3 flex items-center justify-start">
        <span
          :class="
            audience === 'Developers'
              ? 'ml-6 px-6 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'
              : 'ml-6 px-6 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800'
          "
        >
          {{ audience }}
        </span>
      </div>
    </div>
    <a href="#" class="flex flex-wrap no-underline hover:no-underline">
      <div class="w-full font-bold text-xl text-gray-800 px-6" v-text="title" />
    </a>
    <div class="text-gray-800 px-6 pb-6 text-sm" v-text="description" />
  </div>
</template>
