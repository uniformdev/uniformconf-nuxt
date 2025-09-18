<script lang="ts" setup>
import { type AssetParamValueItem } from '@uniformdev/canvas';
import { getUniformAsset } from '~/lib/assetUtil';

const props = defineProps<{
  title: string;
  text: string;
  image: AssetParamValueItem[];
  component: {
    variant: string;
  };
}>();

const flexDirection = computed(() =>
  props.component.variant === 'whyattendleft' ? 'row' : 'row-reverse',
);

const heroImage = computed(() =>
  getUniformAsset(props.image as AssetParamValueItem[]),
);
</script>

<template>
  <section class="bg-white border-b py-8">
    <div
      class="container mx-auto flex flex-wrap pt-4 pb-12"
      :style="{ flexDirection }"
    >
      <div v-if="image" class="w-1/2">
        <img
          :src="heroImage?.url"
          :alt="heroImage?.title"
          :width="heroImage?.width"
          :height="heroImage?.height"
          class="p-10"
        />
      </div>
      <div class="w-1/2">
        <div class="p-10">
          <UniformText
            parameterId="title"
            as="h2"
            placeholder="Insert button title"
            class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800"
          />
          <hr />
          <UniformText
            parameterId="text"
            as="p"
            placeholder="Insert text"
            class="text-gray-800 p-10 whitespace-pre-line"
          />
        </div>
      </div>
    </div>
  </section>
</template>
