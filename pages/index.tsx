import { List } from "components/elements/List/List";
import { Table } from "components/elements/Table/Table";
import { Footer } from "components/layouts/Footer/Footer";
import { Nav } from "components/layouts/Nav/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white shadow  dark:bg-gray-700 ">
      <Nav></Nav>

      <div className="container mx-auto flex w-full flex-col items-center justify-center">
        <div className="gap-8 md:flex">
          <div className="mb-8 text-center md:mb-0">
            <img
              className="mx-auto -mb-24 h-48 w-48 rounded-full"
              src="https://yt3.ggpht.com/ytc/AMLnZu_zf38Z8G8MnIkCirME-OWV-dJj6IlCaEa12AgDPg=s88-c-k-c0x00ffffff-no-rj"
              alt="ステハゲチャンネル二代目 SUTEHAGEch 2nd"
            />
            <div className="rounded-lg bg-white px-8 pt-32 pb-10 text-gray-400 shadow-lg">
              <h3 className="font-title mb-3 text-xl text-gray-800">
                ステハゲチャンネル二代目 SUTEHAGEch 2nd
              </h3>
              <p className="font-body">YouTuber</p>
              <p className="font-body mb-4 text-sm">
                【Twitter】@sutehageyoutube https://twitter.com/sutehageyoutube
                【Instagram】 https://www.instagram.com/sutehage555
                【LINEスタンプ】
                https://store.line.me/stickershop/product/9463240 【Contact】
                sutehageniconico2@yahoo.co.jp
              </p>
              <Link
                className="font-body text-blue-500 hover:text-gray-800"
                href="https://www.youtube.com/@sutehagech2nd489"
              >
                Jacky@poute.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex w-full flex-col items-center justify-center">
        <h1 className="text-3xl">視聴者コメント回数ランキング</h1>

        <List></List>
      </div>
      {/* <Table></Table> */}
      <Footer></Footer>
    </div>
  );
}
