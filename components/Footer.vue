<template>
  <footer class="bg-white">
    <div class="mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-4">
        <div class="flex-1 mb-6">
          <NuxtLink
            to="/"
            class="text-orange-600 no-underline hover:no-underline"
          >
            <Logo />
          </NuxtLink>
        </div>
        <p class="text-gray-900 text-right flex-1 leading-8">
          Uniform starter kit for Nuxt.js © {{ new Date().getFullYear() }}
        </p>
      </div>
    </div>
  </footer>
</template>
