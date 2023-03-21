import { Fragment } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import routes from "./routes";

const TabItemComponent = ({ title, path }) => {
  const { pathname } = useRouter()
  return (
    <li className="mr-2 border-b">
      <Link 
        href={path}
        className={[
          'flex text-gray-500 hover:text-gray-600 hover:bg-gray-50 py-4 px-4 text-sm font-medium text-center',
          pathname === path ? "text-primary active" : ""
        ].join('').trim()}
        >
        {title}
      </Link>
    </li>
  );
};

const SideMenu = () => {
  return (
    <aside>
      {routes.map((route, index) => (
        <Fragment key={index}>
          {Boolean(route.path)
            ? <Link href={route.path} className="flex flex-col border-gray-200 p-4 font-bold">
              {route.title}
            </Link>
            : <div className="flex flex-col border-gray-200 p-4 font-bold">{route.title}</div>}
          {Boolean(route.children) && <ul className="flex flex-col border-gray-200 mb-8">
            {route.children?.map(({ path, title }, index) => <TabItemComponent
              key={index}
              title={title}
              path={path}
            />
            )}
          </ul>}
        </Fragment>
      ))}
    </aside>
  )
}

export default SideMenu