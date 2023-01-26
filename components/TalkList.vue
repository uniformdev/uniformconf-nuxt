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
        <UniformSlot name="talks" v-slot="{ child, component }">
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <component :is="child" v-bind="{ component }" />
          </div>
        </UniformSlot>
      </div>
    </section>
  </fieldset>
</template>
