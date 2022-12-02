import Image from "next/image";
import Link from "next/link";

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
  MdLibraryAdd,
  MdLibraryMusic,
  MdFavorite,
} from "react-icons/md";

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
      <Box paddingY="20px" paddingLeft="24px">
        {/* 1-> Logo box */}
        <Box marginBottom="20px">
          <Image src="/logo.svg" alt="logo" height={"60"} width={"120"} />
        </Box>

        {/* 2-> For Nav Content */}
        <Box marginBottom="20px">
          {/* Spacing between list element [spacing] */}
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                {/* Link box will make the whole element clickable */}
                <LinkBox>
                  {/* passHref means passing the link to child */}
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
