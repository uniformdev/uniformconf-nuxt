<script lang="ts" setup>
import type { ComponentInstance } from '@uniformdev/canvas';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';

const props = defineProps<{
  images: Array<{ src: string }>;
  title?: string;
  component: ComponentInstance;
}>();

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'uniformdev',
  },
});

const imageThumbnails: Array<CloudinaryImage> = computed(() =>
  props.images.map((image) => {
    const cldImage = cloudinary.image(image.src).setDeliveryType('fetch');
    cldImage.resize(scale().width(400));
    return cldImage;
  }),
);
</script>

<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <div class="p-10">
        <h2
          class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800"
        >
          {{ title }}
        </h2>
        <div
          class="mx-auto max-w-7xl overflow-hidden py-16 px-4 sm:py-24 sm:px-6 lg:px-8"
        >
          <div
            class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8"
          >
            <div
              v-for="image in imageThumbnails"
              :key="image.toURL()"
              class="group text-sm"
            >
              <div
                class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75"
              >
                <img
                  :src="image.toURL()"
                  class="h-full w-full object-cover object-center"
                  height="300px"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- <h2
          class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800"
        >
          {{ JSON.stringify(images) }}
        </h2> -->
      </div>
    </div>
  </section>
</template>
