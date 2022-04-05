import { useState } from "react";
import Head from "next/head";
import ButtonList from "./tabs/ButtonList";
import AlertList from "./tabs/AlertList";
import TypographList from "./tabs/TypographList";
import ModalList from "./tabs/ModalList";
import RulesList from "./tabs/RulesList";

export default function Home() {
  const [active, setActive] = useState(5);
  const tabItems = [
    {
      id: 1,
      title: "Button",
      content: <ButtonList />,
      type: 'atom'
    },
    {
      id: 2,
      title: "Typograph",
      content: <TypographList />,
      type: 'atom'
    },
    {
      id: 3,
      title: "Alert",
      content: <AlertList />,
      type: 'atom'
    },
    {
      id: 4,
      title: "Modal",
      content: <ModalList />,
      type: 'molecule'
    },
    {
      id: 5,
      title: "Rules & Documentation",
      content: <RulesList />,
      type: 'docs'
    },
  ];

  const TabItemComponent = ({
    title = "",
    onItemClicked = () =>
      console.error("You passed no action to the component"),
    isActive = false,
  }) => {
    return (
      <li className="mr-2 border-b">
        <a
          href="#"
          className={`flex text-gray-500 hover:text-gray-600 hover:bg-gray-50 py-4 px-4 text-sm font-medium text-center ${isActive ? "text-primary active" : ""
            }`}
          onClick={onItemClicked}
        >
          {title}
        </a>
      </li>
    );
  };

  return (
    <div>
      <Head>
        <title>EDTS UI</title>
        <meta name="description" content="EDTS UI Framework" />
        <link rel="icon" href="/edts-ico.png" />
      </Head>
      <div className="grid-container">
        <aside>
          <div className="flex flex-col border-gray-200 p-4 font-bold">ATOMS</div>
          <ul className="flex flex-col border-gray-200 mb-8">
            {tabItems.filter(({ type }) => type === 'atom')
              .map(({ id, title }) => <TabItemComponent
                key={title}
                title={title}
                onItemClicked={() => setActive(id)}
                isActive={active === id}
              />
              )}
          </ul>
          <div className="flex flex-col border-gray-200 p-4 font-bold">MOLECULES</div>
          <ul className="flex flex-col border-gray-200 mb-8">
            {tabItems.filter(({ type }) => type === 'molecule')
              .map(({ id, title }) => <TabItemComponent
                key={title}
                title={title}
                onItemClicked={() => setActive(id)}
                isActive={active === id}
              />
              )}
          </ul>
          <div className="flex flex-col border-gray-200 p-4 font-bold">ORGANISMS</div>
          <ul className="flex flex-col border-gray-200 mb-8">
            {tabItems.filter(({ type }) => type === 'organism')
              .map(({ id, title }) => <TabItemComponent
                key={title}
                title={title}
                onItemClicked={() => setActive(id)}
                isActive={active === id}
              />
              )}
          </ul>
          <div className="flex flex-col border-gray-200 p-4 font-bold">RULES</div>
          <ul className="flex flex-col border-gray-200 mb-8">
            {tabItems.filter(({ type }) => type === 'docs')
              .map(({ id, title }) => <TabItemComponent
                key={title}
                title={title}
                onItemClicked={() => setActive(id)}
                isActive={active === id}
              />
              )}
          </ul>
        </aside>
        <main>
          {tabItems.map(({ id, content }) => {
            return active === id ? content : "";
          })}
        </main>
      </div>

      {/* <IcCancel />

      <Toggle />
      <input className="toggle" type="checkbox" /> */}
    </div>
  );
}
