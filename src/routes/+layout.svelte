<script>
  import "../app.css";
  let { children } = $props();

  let isMenuOpen = $state(false);
</script>

<div class="page">
  <header class="header h-[70px] px-10 py-5">
    <nav class="header-navbar flex items-center justify-between">
      <a class="header-logo" href="#top">Philosophy for Us</a>
      <ul class="navbar-menu-list flex items-center justify-between gap-x-10">
        <li><a href="#top">Статьи</a></li>
        <li><a href="#top">Переводы</a></li>
        <li><a href="#top">Конспекты</a></li>
        <li><a href="#top">Карточки</a></li>
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
  }
</style>
