import { Box, Container, Text, ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <div className="w-[100dvw] h-fit flex justify-center items-center">
        <Container centerContent>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="1rem 12rem"
            bg="white"
            width="12rem"
            margin="40px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
          >
            <Text fontSize="4xl" fontFamily="Work sans">
              ChatVerse
            </Text>
          </Box>
        </Container>
      </div>
    </ChakraProvider>
  );
}
