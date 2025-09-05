import { html } from "lit-html";
import data from "./starter-code/data.json";

export const destination = (destinationName) => {
  const currentDestination =
    data.destinations.find((d) => d.name === destinationName) ||
    data.destinations[0];

  return html`
    <div class="grid h-full items-center gap-8 lg:grid-cols-2">
      <div class="px-6 pt-32 text-center lg:px-24 lg:text-left">
        <h2
          class="font-family-barlow-condensed text-xl tracking-widest text-light-blue uppercase md:text-2xl"
        >
          <b>01</b> Pick your destination
        </h2>
        <img
          src=${currentDestination.images.webp}
          alt=${currentDestination.name}
          class="mx-auto my-8 w-1/2 md:w-3/4 lg:w-full"
        />
      </div>
      <div class="px-6 text-center lg:px-24 lg:text-left">
        <nav
          class="flex justify-center space-x-8 font-family-barlow-condensed tracking-widest text-light-blue lg:justify-start"
        >
          ${data.destinations.map(
            (d) => html`
              <a
                href=${`#destination/${d.name}`}
                class=${`uppercase pb-2 border-b-2 ${currentDestination.name === d.name ? "border-white text-white" : "border-transparent"}`}
                >${d.name}</a
              >
            `,
          )}
        </nav>
        <h1 class="my-4 font-family-bellefair text-8xl uppercase md:text-9xl">
          ${currentDestination.name}
        </h1>
        <p
          class="font-family-barlow text-base leading-relaxed text-light-blue md:text-lg"
        >
          ${currentDestination.description}
        </p>
        <hr class="my-8 border-white/25" />
        <div
          class="flex flex-col justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-16 lg:justify-start"
        >
          <div>
            <h3
              class="font-family-barlow-condensed tracking-widest text-light-blue"
            >
              AVG. DISTANCE
            </h3>
            <p class="font-family-bellefair text-3xl uppercase">
              ${currentDestination.distance}
            </p>
          </div>
          <div>
            <h3
              class="font-family-barlow-condensed tracking-widest text-light-blue"
            >
              EST. TRAVEL TIME
            </h3>
            <p class="font-family-bellefair text-3xl uppercase">
              ${currentDestination.travel}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
};
