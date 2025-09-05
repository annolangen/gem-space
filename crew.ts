import { html } from "lit-html";
import data from "./starter-code/data.json";

export const crew = (crewMemberName) => {
  const currentCrewMember =
    data.crew.find((c) => c.name === crewMemberName) || data.crew[0];

  return html`
    <div class="grid h-full items-center gap-8 lg:grid-cols-2">
      <div
        class="order-2 px-6 pt-32 text-center lg:order-1 lg:px-24 lg:text-left"
      >
        <h2
          class="font-family-barlow-condensed text-xl tracking-widest text-light-blue uppercase md:text-2xl"
        >
          <b>02</b> Meet your crew
        </h2>
        <h3
          class="my-4 font-family-bellefair text-4xl text-white/50 uppercase md:text-5xl"
        >
          ${currentCrewMember.role}
        </h3>
        <h1 class="my-4 font-family-bellefair text-5xl uppercase md:text-6xl">
          ${currentCrewMember.name}
        </h1>
        <p
          class="font-family-barlow text-base leading-relaxed text-light-blue md:text-lg"
        >
          ${currentCrewMember.bio}
        </p>
        <nav class="my-8 flex justify-center space-x-4 lg:justify-start">
          ${data.crew.map(
            (c) => html`
              <a
                href=${`#crew/${c.name}`}
                class=${`w-4 h-4 rounded-full ${currentCrewMember.name === c.name ? "bg-white" : "bg-white/25"}`}
              ></a>
            `,
          )}
        </nav>
      </div>
      <div class="order-1 flex items-center justify-center lg:order-2">
        <img
          src=${currentCrewMember.images.webp}
          alt=${currentCrewMember.name}
          class="w-3/4 md:w-1/2 lg:w-full"
        />
      </div>
    </div>
  `;
};
