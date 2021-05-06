<template>
  <nav id="header" class="w-full z-30 top-0 py-1">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3"
    >
      <label for="menu-toggle" class="cursor-pointer md:hidden block">
        <svg
          class="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div
        class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
        id="menu"
      >
        <nav>
          <ul
            class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0"
          >
            <li>
              <a
                class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                href="#"
                >Home</a
              >
            </li>
          </ul>
        </nav>
      </div>

      <div class="order-1 md:order-2">
        <a
          class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="fill-current text-gray-800 mr-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"
            />
          </svg>
          POKEMON
        </a>
      </div>

      <div class="order-2 md:order-3 flex items-center" id="nav-content">
        <a class="inline-block no-underline hover:text-black" href="#">
          <svg
            class="fill-current hover:text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <circle fill="none" cx="12" cy="7" r="3" />
            <path
              d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"
            />
          </svg>
        </a>
      </div>
    </div>
  </nav>
</template>

<style></style>
