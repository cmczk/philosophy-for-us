<script>
  import "../app.css";
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
        <li>
          <button class="navbar-menu-button flex cursor-pointer items-center" type="button"
            >О проекте
            <svg
              class="pt-0.5"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                fill="#000000"
              />
            </svg>
          </button>
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

  .navbar-menu-link,
  .navbar-menu-button {
    text-transform: uppercase;
    font-weight: 700;
  }
</style>
