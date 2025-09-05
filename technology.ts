import { html } from "lit-html";
import data from "./starter-code/data.json";

const techData = data.technology;

export const technology = (technologyName) => {
  const currentTechnology =
    techData.find((t) => t.name === technologyName) || techData[0];

  return html`
    <div class="grid h-full items-center gap-8 lg:grid-cols-2">
      <div
        class="order-2 px-6 pt-32 text-center lg:order-1 lg:px-24 lg:text-left"
      >
        <h2
          class="font-family-barlow-condensed text-xl tracking-widest text-light-blue uppercase md:text-2xl"
        >
          <b>03</b> Space launch 101
        </h2>
        <div class="flex flex-col items-center lg:flex-row">
          <nav
            class="my-8 flex justify-center space-x-4 lg:mr-8 lg:flex-col lg:justify-start lg:space-y-4 lg:space-x-0"
          >
            ${techData.map(
              (t, i) => html`
                <a
                  href=${`#technology/${t.name}`}
                  class=${`flex h-16 w-16 items-center justify-center rounded-full font-family-bellefair text-2xl ${currentTechnology.name === t.name ? "bg-white text-dark-blue" : "border border-white/25"}`}
                  >${i + 1}</a
                >
              `,
            )}
          </nav>
          <div>
            <h3
              class="my-4 font-family-barlow-condensed text-lg text-light-blue uppercase"
            >
              THE TERMINOLOGY…
            </h3>
            <h1
              class="my-4 font-family-bellefair text-5xl uppercase md:text-6xl"
            >
              ${currentTechnology.name}
            </h1>
            <p
              class="font-family-barlow text-base leading-relaxed text-light-blue md:text-lg"
            >
              ${currentTechnology.description}
            </p>
          </div>
        </div>
      </div>
      <div class="order-1 lg:order-2">
        <img
          src=${currentTechnology.images.portrait}
          alt=${currentTechnology.name}
          class="hidden w-full lg:block"
        />
        <img
          src=${currentTechnology.images.landscape}
          alt=${currentTechnology.name}
          class="w-full lg:hidden"
        />
      </div>
    </div>
  `;
};
