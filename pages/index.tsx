import { Footer } from "components/layouts/Footer/Footer";
import { Nav } from "components/layouts/Nav/Nav";

export default function Home() {
  return (
    <div className="pt-5">
      <Nav></Nav>

      <h1 className="text-3xl font-semibold underline">Hello world!aahoge</h1>
      <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-100 hover:bg-sky-800 sm:px-8 sm:py-3">
        sample button
      </button>
      <Footer></Footer>
    </div>
  );
}
