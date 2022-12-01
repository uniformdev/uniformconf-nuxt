<script lang="ts" setup>
import { resolveRenderer } from '../components/componentMapping';

const route = useRoute();
const slug = `/${route.params.slug ?? ''}`;

const { composition, error } = await useUniformComposition({ slug });
</script>

<template>
  <main>
    <Head>
      <Title>{{ composition?._name }}</Title>
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
    <div v-else>Couldn't fetch the composition: {{ error }}</div>
  </main>
</template>
