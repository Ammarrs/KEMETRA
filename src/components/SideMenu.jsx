import React from "react";
import { Button, Drawer } from "@heroui/react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Timeline from "./../pages/Admin/Timeline";
import Profile from "./Profile";

function SideMenu() {
  const links = [
    { id: 1, linkName: "Home", linkPath: "/" },
    { id: 2, linkName: "Explore Map", linkPath: "/map" },
    { id: 3, linkName: "Timeline", linkPath: "/timeline" },
    { id: 4, linkName: "Stories", linkPath: "/stories" },
  ];
  return (
    <Drawer>
      <Button className="border rounded bg-transparent py-1 px-2">
        <CiMenuFries className="font-bold text-lg" />
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="right">
          <Drawer.Dialog>
            <Drawer.Header>
              <Button slot="close" className="self-end bg-primary">
                <IoClose />
              </Button>
              <Drawer.Heading className="text-3xl">Main Menu</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body className="flex flex-col gap-2 px-5 py-3">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              <Link to="/map" onClick={() => setIsOpen(false)}>
                Explore Map
              </Link>

              <Link to="/timeline" onClick={() => setIsOpen(false)}>
                Timeline
              </Link>

              <Link to="/stories" onClick={() => setIsOpen(false)}>
                Stories
              </Link>

              <Link to="/settings" onClick={() => setIsOpen(false)}>
                Settings
              </Link>
            </Drawer.Body>
            <Drawer.Footer>
              <div className="w-full pb-5">
                <Profile/>
              </div>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}

export default SideMenu;
