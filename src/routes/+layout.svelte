<script>
  import '@unocss/reset/tailwind-compat.css'
  import 'uno.css'
</script>

<div class='w-300 m-auto'>
  <header class='flex justify-between my-4'>
    <img class="w-10 h-10" src='./favicon.png' alt='zhifan' />
    <div>navigations</div>
  </header>
  <slot />
</div>


<svelte:head>
  <title>Zhifan</title>
  <style>
    body {
        background: mediumslateblue;
    }
  </style>
</svelte:head>


