<script lang="ts" setup>
import type { ComponentInstance } from '@uniformdev/canvas';

defineProps<{
  title: string;
  component: ComponentInstance;
}>();
</script>

<template>
  <fieldset>
    <section class="bg-white border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1
          class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
          v-text="title"
        />
        <div class="grid grid-cols-1 gap-12 mt-8 px-6 lg:grid-cols-3">
          <SlotContent slotName="talks" />
        </div>
      </div>
    </section>
  </fieldset>
</template>
