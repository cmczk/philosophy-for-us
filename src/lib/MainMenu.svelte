<script>
  import { clickOutside } from "./scripts/click-outside";

  let isMenuOpen = $state(false);

  const handleClickOutsideMenu = () => (isMenuOpen = false);
</script>

<div class="relative flex flex-col" use:clickOutside onoutsideclick={handleClickOutsideMenu}>
  <button
    class="navbar-menu-button hidden cursor-pointer"
    type="button"
    aria-label="Открыть меню"
    onclick={() => (isMenuOpen = !isMenuOpen)}
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
    class="navbar-menu-list absolute flex h-0 w-0 flex-col items-start justify-start overflow-hidden transition-all duration-300 {isMenuOpen
      ? 'top-full right-0 h-auto w-50'
      : ''}"
  >
    <li class="navbar-menu-item"><a class="navbar-menu-link" href="#top">Статьи</a></li>
    <li class="navbar-menu-item"><a class="navbar-menu-link" href="#top">Переводы</a></li>
    <li class="navbar-menu-item"><a class="navbar-menu-link" href="#top">Конспекты</a></li>
    <li class="navbar-menu-item">
      <a class="navbar-menu-link" href="/flashcards">Карточки</a>
    </li>
    <!-- <li class="navbar-menu-item relative">
    <DropdownMenu />
  </li> -->
  </ul>
</div>

<style>
  .navbar-menu-list {
    background-color: gray;
  }

  .navbar-menu-item,
  .navbar-menu-link {
    display: block;
    width: 100%;
    height: 100%;
  }

  .navbar-menu-link {
    padding-block: 7%;
    padding-inline: 20%;
  }

  .navbar-menu-link:hover {
    background-color: darkred;
  }

  @media (max-width: 975px) {
    .navbar-menu-button {
      display: block;
    }
  }
</style>
