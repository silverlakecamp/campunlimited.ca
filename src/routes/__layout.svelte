<script>
  import "../styles/app.postcss";
  import "../styles/globals.css";
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&display=swap" rel="stylesheet">
</svelte:head>

<main class="flex flex-col justify-between h-screen text-white">
  <Header />
  <slot />
  <Footer />
</main>
