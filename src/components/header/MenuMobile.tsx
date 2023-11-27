import { useState } from "react";
import { routes } from "./routes";
import { defaultLang, languages } from "../../i18n/ui";
import { getLangFromUrl } from "../../i18n/utils";

const MenuMobile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [hidding, setHidding] = useState<boolean>(false);

  const handleToggleMenu = () => {
    if (open) {
      setHidding(true);
      setTimeout(() => {
        setOpen(false);
        setHidding(false);
      }, 450);
    } else {
      setOpen(true);
    }
  };

  const handleRedirect = (link: string) => {
    setOpen(false);
    window.location.replace(link);
  };

  const curLang = getLangFromUrl(new URL(window.location.href));

  return (
    <div className="relative flex sm:hidden items-center">
      {open ? (
        <div
          className={`${
            hidding ? "animate-hideBG" : "animate-appearBG"
          }  bg-creame dark:bg-black fixed w-full inset-0 bg-opacity-95 backdrop-blur-md p-5 flex flex-col items-center justify-center`}
        >
          <div className="flex flex-col text-4xl font-normal text-center gap-4">
            {routes.map((route, key) => (
              <div key={key} className="overflow-hidden">
                <button
                  onClick={() => handleRedirect(route.link)}
                  disabled={document?.location?.pathname === route.link}
                  className={`${
                    hidding
                      ? "animate-slideDownButton"
                      : "animate-slideUpButton"
                  } translate-y-9 ${
                    document?.location?.pathname === route.link
                      ? "opacity-30"
                      : ``
                  }`}
                >
                  {route.name}
                </button>
              </div>
            ))}
          </div>

          {
            <ul className="absolute bottom-10 text-center text-sm font-medium flex flex-col gap-1 text-gray-400">
              {
                Object.entries(languages).map(([lang, label], i) => <li key={lang} className={` px-4 py-1 rounded-lg ${curLang == lang ? 'text-white bg-slate-900' : ''}`}>
                  <a 
                  target="_self"
                  aria-label={label}
                  href={lang != defaultLang ? `/${lang}/` : "/"}>{label}</a>
                </li>)
              }
            </ul>
          }

        </div>
      ) : (
        ""
      )}
      
      <div
        title="open menu"
        className={`block md:hidden w-5 h-[10px] relative group`}
        onClick={handleToggleMenu}
      >
        <div
          className={`w-full h-[2px] bg-black dark:bg-white rounded-full absolute top-0 ${
            hidding
              ? "animate-closeLineTop"
              : open
              ? "animate-openLineTop"
              : "animate-none"
          }`}
        ></div>
        <div
          className={`w-full h-[2px] bg-black dark:bg-white rounded-full right-0 absolute top-full ${
            hidding
              ? "animate-closeLineBottom"
              : open
              ? "animate-openLineBottom"
              : "animate-none"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default MenuMobile;
