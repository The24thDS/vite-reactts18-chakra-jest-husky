import { useState } from 'react';

import { Box, Button, Flex, Image, Text, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import logo from './logo.svg';

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Flex
        as="header"
        direction="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        fontSize="3xl"
      >
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
        >
          <Image src={logo} alt="" h="40vmin" />
        </motion.div>
        <Text>Hello Vite + React + Typescript + Chakra UI!</Text>
        <Text>
          <Button
            colorScheme="blue"
            fontSize="xl"
            onClick={() => setCount((c) => c + 1)}
          >
            count is: {count}
          </Button>
        </Text>
        <Text>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </Text>
        <Text>
          <Link href="https://reactjs.org" isExternal color="#61dafb">
            Learn React
          </Link>
          {' | '}
          <Link
            href="https://vitejs.dev/guide/features.html"
            isExternal
            color="#61dafb"
          >
            Vite Docs
          </Link>
          {' | '}
          <Link
            href="https://www.typescriptlang.org/"
            isExternal
            color="#61dafb"
          >
            Typescript
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default App;
