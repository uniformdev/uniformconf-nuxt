<script lang="ts" setup>
const navMenuItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'For Developers',
    href: '/developers',
  },
  {
    label: 'For Marketers',
    href: '/marketers',
  },
  {
    label: 'Registration',
    href: '/registration',
  },
  {
    label: 'Campaign',
    href: '/?utm_campaign=unfrmconf',
    isRedirect: true,
  },
];
</script>
<template>
  <ul
    class="list-reset lg:flex justify-end flex-1 items-center space-x-2 lg:mr-4"
  >
    <li v-for="navMenuItem in navMenuItems" :key="navMenuItem.href">
      <NuxtLink
        :to="navMenuItem.href"
        class="inline-block py-2 px-4 text-black no-underline hover:text-underline"
        :active-class="!navMenuItem.isRedirect ? 'thicker-text' : ''"
      >
        {{ navMenuItem.label }}
      </NuxtLink>
    </li>
  </ul>
</template>
