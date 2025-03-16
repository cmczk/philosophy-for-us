<script>
  import DropdownMenu from "./DropdownMenu.svelte";
  import { clickOutside } from "./scripts/click-outside";

  let isMainMenuOpen = $state(false);
  let isAboutMenuOpen = $state(false);

  const handleClickOutsideMenu = () => (isMainMenuOpen = false);
</script>

<nav class="header-navbar flex h-full items-center justify-between">
  <a class="header-logo hidden" href="/">Philosophy for Us</a>
  <div class="relative flex flex-col" use:clickOutside onoutsideclick={handleClickOutsideMenu}>
    <button
      class="navbar-menu-button hidden cursor-pointer"
      type="button"
      aria-label="Открыть меню"
      onclick={() => (isMainMenuOpen = !isMainMenuOpen)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="28px"
        viewBox="0 -960 960 960"
        width="28px"
        fill="#000000"
        ><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg
      >
    </button>

    <ul
      class="navbar-menu-list absolute top-full right-0 h-auto w-60 transition-opacity duration-300 {isMainMenuOpen
        ? 'pointer-events-auto opacity-100'
        : 'pointer-events-none opacity-0'}"
    >
      <li class="navbar-menu-item"><a class="navbar-menu-link" href="#top">Статьи</a></li>
      <li class="navbar-menu-item"><a class="navbar-menu-link" href="#top">Переводы</a></li>
      <li class="navbar-menu-item"><a class="navbar-menu-link" href="#top">Конспекты</a></li>
      <li class="navbar-menu-item">
        <a class="navbar-menu-link" href="/flashcards">Карточки</a>
      </li>
      <li class="navbar-menu-item relative">
        <button
          class="navbar-menu-about-button flex h-full w-full cursor-pointer items-center text-left"
          type="button"
          onclick={() => (isAboutMenuOpen = !isAboutMenuOpen)}
          >О проекте
          <svg
            class="transition-transform duration-300 {isAboutMenuOpen ? '-rotate-180' : 'rotate-0'}"
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
        <ul
          class="menu-about-list absolute top-full left-0 h-0 w-0 bg-[gainsboro] opacity-0 transition-all duration-300 {isAboutMenuOpen
            ? 'h-auto w-full opacity-100'
            : ''}"
        >
          <li class="about-menu-item"><a class="about-menu-link" href="#top">Кто мы?</a></li>
          <li class="about-menu-item">
            <a class="about-menu-link" href="/about/how-to-join">Как присоединиться?</a>
          </li>
          <li class="about-menu-item">
            <a class="about-menu-link" href="/about/rules">Правила</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>

<style>
  .navbar-menu-list {
    background-color: gainsboro;
  }

  .navbar-menu-item,
  .navbar-menu-link {
    display: block;
    width: 100%;
    height: 100%;
  }

  .navbar-menu-link,
  .navbar-menu-about-button {
    padding-block: 7%;
    padding-inline: 20%;
    text-transform: uppercase;
  }

  .navbar-menu-link:hover,
  .navbar-menu-about-button:hover,
  .about-menu-link:hover {
    background-color: aliceblue;
  }

  .navbar-menu-about-button {
    text-transform: uppercase;
  }

  .about-menu-link {
    display: block;
    padding-block: 7%;
    padding-left: 10%;
    font-size: 18px;
  }

  @media (max-width: 975px) {
    .header-logo,
    .navbar-menu-button {
      display: block;
    }
  }
</style>
