<script>
  import { clickOutside } from "./scripts/click-outside";

  let isMenuOpen = $state(false);

  const handleClickOutsideMenu = () => (isMenuOpen = false);
</script>

<div class="about-container h-full">
  <button
    class="navbar-menu-button flex h-full cursor-pointer items-center justify-center"
    type="button"
    onclick={() => (isMenuOpen = !isMenuOpen)}
    use:clickOutside
    onoutsideclick={handleClickOutsideMenu}
    >О проекте
    <svg
      class="pt-0.5 transition-transform duration-300 {isMenuOpen ? '-rotate-180' : 'rotate-0'}"
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
    class="about-menu transition-opacity duration-300 {isMenuOpen
      ? 'pointer-events-auto bg-[gainsboro] opacity-100'
      : 'pointer-events-none opacity-0'}"
  >
    <li>
      <a class="about-menu-link hover:bg-[aliceblue]" href="/about/about-us">Кто мы?</a>
    </li>
    <li>
      <a class="about-menu-link hover:bg-[aliceblue]" href="/about/how-to-join"
        >Как присоединиться?</a
      >
    </li>
    <li>
      <a class="about-menu-link hover:bg-[aliceblue]" href="/about/rules">Правила</a>
    </li>
  </ul>
</div>

<style>
  .navbar-menu-button {
    text-transform: uppercase;
    font-weight: 700;
  }

  .about-menu {
    position: absolute;
    top: 90%;
    right: 0%;
    display: flex;
    flex-direction: column;
    width: 220px;
    height: auto;
  }

  .about-menu-link {
    display: block;
    white-space: nowrap;
    padding-block: 7%;
    padding-inline: 10%;
    font-size: 18px;
  }

  .navbar-menu-button:hover {
    color: #5f506b;
  }
</style>
