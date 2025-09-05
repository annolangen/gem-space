import { html } from "lit-html";

export const home = () => html`
  <div
    class="grid h-full items-center gap-8 px-6 text-center lg:grid-cols-2 lg:px-24 lg:text-left"
  >
    <div>
      <h2
        class="font-family-barlow-condensed text-xl tracking-widest text-light-blue md:text-2xl"
      >
        SO, YOU WANT TO TRAVEL TO
      </h2>
      <h1 class="my-4 font-family-bellefair text-8xl md:text-9xl">SPACE</h1>
      <p
        class="font-family-barlow text-base leading-relaxed text-white md:text-lg"
      >
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <div class="group flex items-center justify-center">
      <div
        class="absolute h-64 w-64 rounded-full bg-white/10 transition-transform group-hover:scale-150"
      ></div>
      <a
        href="#destination"
        class="z-10 flex h-48 w-48 items-center justify-center rounded-full bg-white font-family-bellefair text-2xl tracking-widest text-dark-blue uppercase md:h-64 md:w-64 md:text-3xl"
        >Explore</a
      >
    </div>
  </div>
`;
