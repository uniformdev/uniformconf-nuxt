<script lang="ts" setup>
// TODO: Add the scrolling logic
const isScrolled = true;

// TODO:
const setSubmenuVisible = (visible: boolean) => {};
const submenuVisible = false;
</script>
<template>
  <nav
    id="header"
    :class="
      isScrolled
        ? 'fixed w-full z-30 top-0 text-white bg-white shadow'
        : 'fixed w-full z-30 top-0 text-white'
    "
  >
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
        <NuxtLink
          href="/"
          :class="
            isScrolled
              ? 'no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-gray-800'
              : 'no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-white'
          "
        >
          <Logo />
        </NuxtLink>
      </div>
      <div class="block lg:hidden pr-4">
        <button
          id="nav-toggle"
          @click="() => setSubmenuVisible(!submenuVisible)"
          class="flex items-center p-1 text-orange-800 hover:text-gray-900"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        id="nav-content"
        :class="`w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20 ${
          submenuVisible ? 'bg-gray-100' : 'hidden bg-white'
        }  ${isScrolled ? 'bg-white' : 'bg-gray-100'}`"
      >
        <NavMenu />
        <!-- <ActionLink
            :isScrolled="isScrolled"
            @click="async () => {{
              await context.forget(true);
              document.cookie =
                "unfrmconf_registered=; Path=/; samesite=lax; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            }}}}
            label="Forget me"
            icon="<LockIcon />}}
          /> -->
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>
