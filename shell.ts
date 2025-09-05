import { html } from "lit-html";

const bgClasses = {
  "": "bg-page-home",
  destination: "bg-page-destination",
  crew: "bg-page-crew",
  technology: "bg-page-technology",
};

const toggleMenu = () => {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.classList.toggle("hidden");
  }
};

export const shell = (page, path) => html`
  <div
    class="${bgClasses[
      path
    ]} flex h-screen flex-col bg-cover bg-center font-sans text-white"
  >
    <header
      class="flex items-center justify-between p-6 md:p-0 md:pt-10 md:pl-6"
    >
      <div class="flex-shrink-0">
        <img src="assets/shared/logo.svg" alt="Logo" class="h-10 w-10" />
      </div>

      <hr class="z-10 -mr-8 ml-12 hidden flex-grow border-white/25 lg:block" />

      <nav
        class="relative hidden h-24 items-center space-x-8 bg-white/5 px-12 text-lg text-white backdrop-blur-xl md:flex"
      >
        <a
          href="#"
          class="${path === ""
            ? "border-white"
            : "border-transparent"} border-b-4 pb-8 hover:border-white/50"
          ><b>00</b> HOME</a
        >
        <a
          href="#destination"
          class="${path.startsWith("destination")
            ? "border-white"
            : "border-transparent"} border-b-4 pb-8 hover:border-white/50"
          ><b>01</b> DESTINATION</a
        >
        <a
          href="#crew"
          class="${path.startsWith("crew")
            ? "border-white"
            : "border-transparent"} border-b-4 pb-8 hover:border-white/50"
          ><b>02</b> CREW</a
        >
        <a
          href="#technology"
          class="${path.startsWith("technology")
            ? "border-white"
            : "border-transparent"} border-b-4 pb-8 hover:border-white/50"
          ><b>03</b> TECHNOLOGY</a
        >
      </nav>
      <div class="md:hidden">
        <button @click=${toggleMenu}>
          <img src="assets/shared/icon-hamburger.svg" alt="Menu" />
        </button>
      </div>
    </header>
    <div
      id="mobile-menu"
      class="absolute top-0 right-0 hidden h-full w-64 bg-white/5 font-family-barlow-condensed text-xl tracking-widest text-white backdrop-blur-xl"
    >
      <button @click=${toggleMenu} class="absolute top-8 right-6">
        <img src="assets/shared/icon-close.svg" alt="Close" />
      </button>
      <nav class="mt-32 ml-8 flex flex-col space-y-8">
        <a href="#"><b>00</b> HOME</a>
        <a href="#destination"><b>01</b> DESTINATION</a>
        <a href="#crew"><b>02</b> CREW</a>
        <a href="#technology"><b>03</b> TECHNOLOGY</a>
      </nav>
    </div>
    <main class="flex-grow">${page}</main>
  </div>
`;
