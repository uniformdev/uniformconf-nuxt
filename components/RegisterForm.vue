<script lang="ts" setup>
// TODO: Investigate the possibility of using Nuxt's useCookies
import { parse } from 'cookie';

const { context } = useNuxtApp().$useUniformContext();

// TODO: Add component: ComponentInstance as a prop
defineProps<{
  heading: string;
  registeredText: string;
  buttonText: string;
}>();

const registered = ref(
  typeof document !== 'undefined'
    ? !!document.cookie.match(/unfrmconf_registered/)
    : false,
);

const onRegister = () => {
  document.cookie = 'unfrmconf_registered=true; path=/; samesite=lax';
  context.update({
    cookies: parse(document.cookie),
  });
  registered.value = true;
};
</script>

<template>
  <div class="py-24">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <p class="uppercase tracking-loose w-full">Uniform conf</p>
        <h1
          v-if="registered"
          class="my-4 text-5xl font-bold leading-tight"
          v-text="'You are successfully registered.'"
        />
        <h1
          v-else
          class="my-4 text-5xl font-bold leading-tight"
          v-text="heading"
        />
        <form>
          <div v-if="registered">
            <p class="pb-16">{{ registeredText }}</p>
            <NuxtLink
              to="/"
              class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
            >
              Return Home
            </NuxtLink>
          </div>
          <button
            v-else
            type="button"
            @click="onRegister"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
          >
            {{ buttonText }}
          </button>
        </form>
      </div>
    </div>
  </div>
  <Splitter />
</template>
