import {
  Card,
  CardBody,
  Text,
  CardHeader,
  Image,
  Heading,
} from "@chakra-ui/react";

const ChakraCard = () => {
  return (
    <>
      <Card maxW="sm" shadow="10px 10px 30px #afafaf">
        <CardHeader>
          <Image
            src="https://w0.peakpx.com/wallpaper/270/518/HD-wallpaper-the-wall-brick-light-night-outside-thumbnail.jpg"
            alt="card image wall"
            borderRadius="lg"
            width="100%"
            height="200px"
            objectFit="cover"
          />
        </CardHeader>
        <CardBody>
          <Heading size="md" color="#ff33dd" textAlign="start">
            REACT GRAPHQL DEVELOP FOR ANY DEVELOPMENT
          </Heading>
          <Text textAlign="start" size="sm">
            Lorem ipsum dolor sit amet con
          </Text>
        </CardBody>
      </Card>
    </>
  );
};

export default ChakraCard;
