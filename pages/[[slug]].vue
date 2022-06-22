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
      :composition="composition"
      :resolveRenderer="resolveRenderer"
    >
      <SlotContent slotName="header" />
      <SlotContent slotName="content" />
      <SlotContent slotName="footer" />
    </Composition>
    <div v-else-if="pending">Loading...</div>
    <div v-else="error">Couldn't fetch the composition: {{ error }}</div>
  </main>
</template>
