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
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const SidebarList = ({ listItemObjects }) => {
  return (
    <List spacing={2}>
      {/* Spacing between list element [spacing] */}
      {listItemObjects.map((menu) => (
        <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
          {/* Link box will make the whole element clickable */}
          <LinkBox>
            {/* passHref means passing the link to child */}
            <Link href={menu.route} passHref>
              <LinkOverlay>
                <ListIcon as={menu.icon} color="white" marginRight="20px" />
                {menu.name}
              </LinkOverlay>
            </Link>
          </LinkBox>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarList;
