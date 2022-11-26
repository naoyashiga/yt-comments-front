import Link from "next/link";

export const Table = () => {
  return (
    <div className="container mx-auto max-w-3xl px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                  >
                    Created at
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 bg-white  px-5 py-3 text-left  text-sm font-normal uppercase text-gray-800"
                  >
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Link href="#" className="relative block">
                          <img
                            alt="profil"
                            src="/images/person/8.jpg"
                            className="mx-auto h-10 w-10 rounded-full object-cover "
                          />
                        </Link>
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap text-gray-900">
                          Jean marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">Admin</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      12/09/2020
                    </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      ></span>
                      <span className="relative">active</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Link href="#" className="relative block">
                          <img
                            alt="profil"
                            src="/images/person/9.jpg"
                            className="mx-auto h-10 w-10 rounded-full object-cover "
                          />
                        </Link>
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap text-gray-900">
                          Marcus coco
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">Designer</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      01/10/2012
                    </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      ></span>
                      <span className="relative">active</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Link href="#" className="relative block">
                          <img
                            alt="profil"
                            src="/images/person/10.jpg"
                            className="mx-auto h-10 w-10 rounded-full object-cover "
                          />
                        </Link>
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap text-gray-900">
                          Ecric marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      Developer
                    </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      02/10/2018
                    </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      ></span>
                      <span className="relative">active</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Link href="#" className="relative block">
                          <img
                            alt="profil"
                            src="/images/person/6.jpg"
                            className="mx-auto h-10 w-10 rounded-full object-cover "
                          />
                        </Link>
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap text-gray-900">
                          Julien Huger
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">User</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      23/09/2010
                    </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      ></span>
                      <span className="relative">active</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
