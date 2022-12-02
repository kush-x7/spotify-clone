import Image from 'next/image';

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
import { MdHome, MdSearch, MdLibraryAdd , MdLibraryMusic, MdFavorite} from "react-icons/md";
const Sidebar = () => {
  return (
   <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
    {/* Box just for giving padding on Y axis */}
    <Box paddingY="20px"  paddingLeft="24px">

    {/* 1-> Logo box */}
    {/* width="120px" marginBottom="20px" paddingX="20"  */}
        <Box marginBottom="20px">
          <Image  src="/logo.svg" alt="logo" height={"60"} width={"120"}/>
        </Box>
    </Box>
   </Box>
  );
};

export default Sidebar;
