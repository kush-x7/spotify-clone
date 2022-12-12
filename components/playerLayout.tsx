import { Box } from "@chakra-ui/layout";
import Sidebar from "./sidebar";

// Here we are dividing are layout into 3 parts
// 1-> Sidebar || 2-> content || 3-> bottom music box
const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      {/* container for sidebar */}
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children} CONTENT
      </Box>
      <Box position="absolute" left="0" bottom="0">
        {" "}
        player
      </Box>
    </Box>
  );
};
export default PlayerLayout;
