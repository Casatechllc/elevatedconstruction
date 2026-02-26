<template>
  <div>
    <ClientOnly>
      <AppNavbar />
    </ClientOnly>

    <main>
      <NuxtPage />
      <AppFooter />
    </main>
  </div>
</template>

<style>
/* Global transitions or base styles */
body {
  font-family: 'Inter', sans-serif;
  color: #333;
}
</style>