import Link from "next/link";
import Image from "next/image";

export const List = () => {
  const items = [...Array(5)].map((v, index) => {
    return {
      rank: index + 1,
      name: `fake name:${index}`,
      imageSrc:
        "https://yt3.ggpht.com/ytc/AMLnZu96se9JtDlaK8AZSABvOuuNvmUhvlj-nlQHLYs4Xdq_0A=s88-c-k-c0x00ffffff-no-rj",
      commentCount: 1000 - index * 100,
    };
  });
  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-center">
      <ul className="flex flex-col">
        {items.map((item, index) => {
          return (
            <li key={index} className="mb-2 flex flex-row border-gray-400">
              <div className="flex flex-1 cursor-pointer select-none items-center rounded-md border bg-white p-4 shadow dark:bg-gray-800">
                <div className="mr-4 text-xs text-gray-600 dark:text-gray-200">
                  {item.rank}位
                </div>
                <div className="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                  <Link href="#" className="relative block">
                    <Image
                      alt="profil"
                      src={item.imageSrc}
                      className="mx-auto h-10 w-10 rounded-full object-cover "
                      width={40}
                      height={40}
                    />
                  </Link>
                </div>
                <div className="flex-1 pl-1 md:mr-16">
                  <div className="font-medium dark:text-white">{item.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-200">
                    コメント回数:{item.commentCount}回
                  </div>
                </div>
                {/* <button className="flex w-24 justify-end text-right">
                  <svg
                    width="12"
                    fill="currentColor"
                    height="12"
                    className="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button> */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
