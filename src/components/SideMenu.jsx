import React, { useState } from "react";
import { Button, Drawer } from "@heroui/react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";

const links = [
  { id: 1, linkName: "Home", linkPath: "/", end: true },
  { id: 2, linkName: "Explore Map", linkPath: "/map" },
  { id: 3, linkName: "Timeline", linkPath: "/timeline" },
  { id: 4, linkName: "Stories", linkPath: "/stories" },
  { id: 5, linkName: "Settings", linkPath: "/settings" },
];

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button
        onPress={() => setIsOpen(true)}
        aria-label="Open menu"
        className="border rounded bg-transparent py-1 px-2"
      >
        <CiMenuFries className="font-bold text-lg" />
      </Button>

      <Drawer.Backdrop>
        <Drawer.Content placement="right">
          <Drawer.Dialog>
            <Drawer.Header>
              <Button slot="close" onPress={close} className="self-end bg-primary">
                <IoClose />
              </Button>
              <Drawer.Heading className="text-3xl">Main Menu</Drawer.Heading>
            </Drawer.Header>

            <Drawer.Body className="flex flex-col gap-2 px-5 py-3">
              {links.map(({ id, linkName, linkPath, end }) => (
                <NavLink
                  key={id}
                  to={linkPath}
                  end={end}
                  onClick={close}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 transition-colors ${
                      isActive ? "active font-semibold" : "hover:text-primary"
                    }`
                  }
                >
                  {linkName}
                </NavLink>
              ))}
            </Drawer.Body>

            <Drawer.Footer>
              <div className="w-full pb-5">
                <Profile onNavigate={close} />
              </div>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}

export default SideMenu;