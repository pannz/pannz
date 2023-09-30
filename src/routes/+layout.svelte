<script>
  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
  import '../styles/index.css'

  import Header from '$lib/components/Header.svelte'

</script>

<div class='w-screen h-screen'>
  <div class='w-150 md:w-180 lg:w-240 m-auto text-6'>
    <Header />
    <slot />
  </div>
</div>

<svelte:head>
  <title>Zhifan</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.7.0/style.min.css" />
</svelte:head>
