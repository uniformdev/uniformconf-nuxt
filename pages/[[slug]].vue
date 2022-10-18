<script lang="ts" setup>
import { resolveRenderer } from '../components/componentMapping';
import { useCompositionInstance } from '@uniformdev/canvas-vue';

const route = useRoute();

const fullSlug = `/${route.params.slug ?? ''}`;
const { $useComposition } = useNuxtApp();

const { data, pending, error } = await $useComposition({ slug: fullSlug });

const { composition } = useCompositionInstance({
  composition: data.value?.composition,
});
const pageTitle = computed(() => composition.value?._name);
</script>

<template>
  <main>
    <Head>
      <Title>{{ pageTitle }}</Title>
    </Head>

    <Composition
      v-if="composition"
      :data="composition"
      :resolve-renderer="resolveRenderer"
    >
      <SlotContent name="header" />
      <SlotContent name="content" />
      <SlotContent name="footer" />
    </Composition>
    <div v-else-if="pending">Loading...</div>
    <div v-else="error">Couldn't fetch the composition: {{ error }}</div>
  </main>
</template>
