<script lang="ts" setup>
import { resolveRenderer } from '../components/componentMapping';

const route = useRoute();

const fullSlug = `/${route.params.slug ?? ''}`;
const { $useComposition } = useNuxtApp();

const { data, pending, error } = await $useComposition({ slug: fullSlug });

const composition = computed(() => data.value?.composition);
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
