<script>
  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'

  import Header from '$lib/components/Header.svelte'
</script>

<div class='w-150 md:w-180 lg:w-240 m-auto text-6'>
  <Header />
  <slot />
</div>


<svelte:head>
  <title>Zhifan</title>
  <style>
    body {
        background: aliceblue;
    }
  </style>
</svelte:head>


