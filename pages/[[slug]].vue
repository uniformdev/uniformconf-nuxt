<script lang="ts" setup>
import { CANVAS_PUBLISHED_STATE } from '@uniformdev/canvas';
import { Composition, SlotContent } from '@uniformdev/canvas-vue';
import { resolveRenderer } from '../components/componentMapping';

const route = useRoute();

const fullSlug = `/${route.params.slug ?? ''}`;

const { data, pending, error } = await useComposition({
  slug: fullSlug,
  state: CANVAS_PUBLISHED_STATE,
});
</script>

<template>
  <main>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Couldn't fetch the composition: {{ error }}</div>
    <Composition
      v-else-if="data"
      :composition="data"
      :resolveRenderer="resolveRenderer"
    >
      <SlotContent slotName="header" />
      <SlotContent slotName="content" />
      <SlotContent slotName="footer" />
    </Composition>
  </main>
</template>
