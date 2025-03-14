<script>
  import "../app.css";
  import DropdownMenu from "$lib/DropdownMenu.svelte";
  let { children } = $props();

  let isMenuOpen = $state(false);
</script>

<div class="page">
  <header class="header h-[70px] py-5">
    <nav class="header-navbar flex items-center justify-between">
      <a class="header-logo" href="/">Philosophy for Us</a>
      <ul class="navbar-menu-list flex items-center justify-between gap-x-10">
        <li><a class="navbar-menu-link" href="#top">Статьи</a></li>
        <li><a class="navbar-menu-link" href="#top">Переводы</a></li>
        <li><a class="navbar-menu-link" href="#top">Конспекты</a></li>
        <li><a class="navbar-menu-link" href="/flashcards">Карточки</a></li>
        <li class="relative">
          <DropdownMenu />
        </li>
      </ul>
      <ul class="header-navbar-contacts flex items-center justify-between gap-x-5">
        <li><a href="#top">Telegram</a></li>
        <li><a href="#top">Email</a></li>
      </ul>
    </nav>
  </header>
  <main class="main">
    {@render children()}
  </main>
  <footer class="footer">
    <div class="flex items-center justify-center">
      <p>Philosophy for Us</p>
    </div>
  </footer>
</div>

<style>
  .page {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .main {
    flex: 1;
    max-width: var(--container-width);
    margin: 0 auto;
  }

  .header {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .navbar-menu-link {
    text-transform: uppercase;
    font-weight: 700;
  }
</style>
