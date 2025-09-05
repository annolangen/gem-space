import { render } from "lit-html";
import { shell } from "./shell";
import { home } from "./home";
import { destination } from "./destination";
import { crew } from "./crew";
import { technology } from "./technology";

const routes = {
  "": home,
  destination: param => destination(param),
  crew: param => crew(param),
  technology: param => technology(param),
};

const renderBody = () => {
  const [path, param] = window.location.hash.slice(1).split("/");
  const page = routes[path] || home;
  render(
    shell(page(param ? decodeURIComponent(param) : undefined), path),
    document.body
  );
};

window.onhashchange = renderBody;
renderBody();
