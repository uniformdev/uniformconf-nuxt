<template>
  <UniformContextProvider :context="context">
    <NuxtPage />
  </UniformContextProvider>
</template>

<script setup lang="ts">
import { Context, ManifestV2 } from '@uniformdev/context';
import { UniformContextProvider } from '@uniformdev/context-vue';
import manifestJson from './context-manifest.json';

const context = new Context({
  defaultConsent: true,
  manifest: manifestJson as ManifestV2,
});
</script>
