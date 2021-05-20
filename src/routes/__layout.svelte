<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&display=swap" rel="stylesheet">
</svelte:head>

<script>
  import "./../styles/reset.css";
  import "./../styles/globals.css";
</script>

<div class="flex-layout">
  <slot></slot>
</div>

<style>
  .flex-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>