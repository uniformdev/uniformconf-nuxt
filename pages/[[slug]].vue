<script lang="ts" setup>
import doEnhance from '~~/lib/uniform';
import { resolveRenderer } from '../components/componentMapping';

const route = useRoute();
const slug = `/${route.params.slug ?? ''}`;

const { composition: compositionData, error } = await useUniformComposition({
  slug,
});

const enhancedComposition = await doEnhance(compositionData.value);
//console.log(JSON.stringify(enhancedComposition));


</script>

<template>
  <main>
    <Head>
      <Title>{{ enhancedComposition?._name }}</Title>
    </Head>
    <Composition
      v-if="enhancedComposition"
      :data="enhancedComposition"
      :resolve-renderer="resolveRenderer"
    >
      <SlotContent name="header" />
      <SlotContent name="content" />
      <SlotContent name="footer" />
    </Composition>
    <div v-else>Couldn't fetch the composition: {{ error }}</div>
  </main>
</template>
