<template>
  <ul
    class="list-reset lg:flex justify-end flex-1 items-center space-x-2 lg:mr-4"
  >
    <li>
      <NuxtLink
        href="/"
        class="inline-block py-2 px-4 text-black font-bold no-underline"
      >
        Home
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        href="/developers"
        class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
      >
        For Developers
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        href="/marketers"
        class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
      >
        For Marketers
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        href="/registration"
        class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
      >
        Registration
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        href="/?utm_campaign=unfrmconf"
        class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
      >
        Campaign
      </NuxtLink>
    </li>
  </ul>
</template>
