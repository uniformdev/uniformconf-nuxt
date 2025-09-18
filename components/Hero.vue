<script lang="ts" setup>
import { type AssetParamValueItem } from '@uniformdev/canvas';
import { getUniformAsset } from '~/lib/assetUtil';

const props = defineProps<{
  title: string;
  text: string;
  buttonText?: string;
  buttonLink?: string;
  image?: AssetParamValueItem[];
}>();

const heroImage = computed(() =>
  getUniformAsset(props.image as AssetParamValueItem[]),
);
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
          <UniformText
            parameterId="title"
            as="h1"
            class="my-4 text-5xl font-bold leading-tight"
            placeholder="Insert a title"
          />
          <UniformText
            parameterId="title"
            as="p"
            class="leading-normal text-2xl mb-8"
            placeholder="Insert text"
          />
          <NuxtLink
            v-if="buttonText"
            :to="buttonLink ? buttonLink : '#'"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          >
            <UniformText
              parameterId="buttonText"
              placeholder="Insert button text"
            />
          </NuxtLink>
        </div>
        <div class="w-full md:w-3/5 py-6 text-center">
          <img
            v-if="image"
            :key="heroImage?.url"
            class="w-full md:w-4/5 z-50 min-h-500 max-h-500"
            :height="560"
            :width="560"
            :src="heroImage?.url"
            :alt="heroImage?.title"
          />
        </div>
      </div>
    </div>
    <Splitter />
  </div>
</template>
