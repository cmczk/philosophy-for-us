<script>
  import "../app.css";
  import DropdownMenu from "$lib/DropdownMenu.svelte";
  import MainMenu from "$lib/MainMenu.svelte";

  let { children } = $props();
  let isMenuOpen = $state(false);
</script>

<div class="page">
  <header class="header h-[70px]">
    <nav class="header-navbar flex h-full items-center justify-between">
      <a class="header-logo" href="/">Philosophy for Us</a>
      <ul class="navbar-menu-list flex h-full items-center justify-between gap-x-10">
        <li class="navbar-menu-item"><a class="navbar-menu-link" href="#top">Статьи</a></li>
        <li class="navbar-menu-item"><a class="navbar-menu-link" href="#top">Переводы</a></li>
        <li class="navbar-menu-item"><a class="navbar-menu-link" href="#top">Конспекты</a></li>
        <li class="navbar-menu-item">
          <a class="navbar-menu-link" href="/flashcards">Карточки</a>
        </li>
        <li class="navbar-menu-item relative">
          <DropdownMenu />
        </li>
      </ul>
      <ul class="header-navbar-contacts flex items-center justify-between gap-x-5">
        <li>
          <a href="#top" aria-label="Написать в Телеграме"
            ><svg
              width="22px"
              height="22px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g><g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
                  fill="#0F0F0F"
                ></path>
              </g></svg
            ></a
          >
        </li>
        <li>
          <a href="mailto:philosophy_for_us@gmail.com" aria-label="Написать на электронную почту">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
              ><path
                d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
              /></svg
            >
          </a>
        </li>
      </ul>
      <MainMenu />
    </nav>
  </header>
  <main class="main">
    {@render children()}
  </main>
  <footer class="footer flex h-[70px] items-center justify-center">
    <div class="flex items-center justify-center">
      <p>&#169; 2025 Philosophy for Us</p>
    </div>
  </footer>
</div>

<style>
  .page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main {
    flex: 1;
    max-width: var(--container-width);
    margin: 0 auto;
  }

  .header {
    width: 100%;
    max-width: 1200px;
    padding-inline: clamp(22px, 5%, 44px);
    margin-inline: auto;
  }

  .navbar-menu-item {
    height: 100%;
  }

  .navbar-menu-link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-transform: uppercase;
    font-weight: 700;
  }

  .navbar-menu-link:hover {
    color: #5f506b;
  }

  @media (max-width: 975px) {
    .navbar-menu-list,
    .header-navbar-contacts {
      display: none;
    }
  }
</style>
