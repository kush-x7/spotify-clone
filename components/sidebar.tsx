import Image from "next/image";

import {
  Box,
  List,
  ListIcon,
  ListItem,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import SidebarList from "./sidebarList";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorite ",
  },
];

const Sidebar = () => {
  return (
    <Box
      width="100%"
      // At bottom we have music container whose height is 100px so for that we are using cal method
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      {/* Box just for giving padding*/}
      <Box paddingY="20px" paddingLeft="24px" height="100%">
        {/* 1-> Logo box */}
        <Box marginBottom="20px">
          <Image src="/logo.svg" alt="logo" height={"60"} width={"120"} />
        </Box>

        {/* 2-> First list item [Home Search Your Library]*/}
        <SidebarList listItemObjects={navMenu} />

        <Divider bg="gray.800" marginY="20px" />

        {/* 3 -> Second list item [Home Search Your Library]  */}
        <SidebarList listItemObjects={musicMenu} />

        <Box height="61%" overflowY="auto" paddingY="20px">
          {new Array(50).fill(1).map((value, index) => (
            <h1 key="index">{index}</h1>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
