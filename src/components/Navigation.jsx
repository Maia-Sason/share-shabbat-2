import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "~/hooks/useAuth";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { links, logout } = useAuth();

  useEffect(() => {
    window.addEventListener("scroll", () => {});
  }, []);

  const handleLogout = () => {
    logout();
    setOpen(false);
  };

  return (
    <div className="fixed top-0 w-full z-10 ">
      <nav className="navbar bg-base-200">
        <Desktop
          toggle={() => setOpen(!open)}
          links={links}
          logout={handleLogout}
        />

        <Mobile toggle={() => setOpen(!open)} open={open} />
      </nav>
      <MobileMenu
        toggle={() => setOpen(!open)}
        links={links}
        open={open}
        logout={handleLogout}
      />
    </div>
  );
};

const Desktop = ({ links, logout, toggle }) => {
  return (
    <div className={`hidden md:flex justify-between w-2/3 m-auto`}>
      <Link href="/" passHref>
        <div className="btn btn-ghost normal-case text-xl w-1/2">
          ShareShabbat
        </div>
      </Link>
      <div className="flex">
        {links &&
          links.map((link) =>
            link.type === "button" ? (
              <button
                onClick={logout}
                className="btn btn-ghost normal-case text-xl"
              >
                {link.name}
              </button>
            ) : (
              <Link key="1" href={link.path} passHref>
                <div
                  onClick={toggle}
                  className="btn btn-ghost normal-case text-xl"
                >
                  {link.name}
                </div>
              </Link>
            )
          )}
      </div>
    </div>
  );
};

const Mobile = ({ toggle, open }) => {
  return (
    <div className="flex md:hidden justify-between w-full mx-auto">
      <div className="flex-none">
        <label tabIndex="0" className="btn btn-circle swap swap-rotate">
          <input type="checkbox" onChange={toggle} checked={open} />

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>

      <Link href="/" passHref>
        <div className="btn btn-ghost normal-case text-xl w-1/2">
          ShareShabbat
        </div>
      </Link>
    </div>
  );
};

const MobileMenu = ({ open, links, logout, toggle }) => {
  return (
    <div
      className={`p-5 bg-gradient-to-b from-primary to-secondary rounded-b-xl flex flex-col absolute w-screen h-[calc(100vh-64px)] top-[64px] z-10 md:hidden ease-in duration-100 origin-top ${
        open ? "scale-y-100" : "scale-y-0"
      }`}
    >
      {links &&
        links.map((link) =>
          link.type === "button" ? (
            <button
              onClick={logout}
              className={`btn justify-start btn-ghost normal-case text-lg ${
                open
                  ? "translate-y-0 opacity-1"
                  : "translate-y-[-30px] opacity-0"
              }`}
            >
              {link.name}
            </button>
          ) : (
            <Link key="1" onClick={toggle} href={link.path} passHref>
              <div
                onClick={toggle}
                className={`btn justify-start btn-ghost normal-case text-lg ${
                  open
                    ? "translate-y-0 opacity-1"
                    : "translate-y-[-30px] opacity-0"
                }`}
              >
                {link.name}
              </div>
            </Link>
          )
        )}
    </div>
  );
};

export default Navigation;
