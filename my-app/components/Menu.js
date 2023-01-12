import React from "react";
import { Menu, HamburgerIcon, Box, Pressable, Center, NativeBaseProvider } from "native-base";

function Example() {
  return <Box w="90%" alignItems="center">
      <Menu w="190" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>;
    }}>
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>LOG OUT </Menu.Item>
      
      </Menu>
    </Box>;
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };