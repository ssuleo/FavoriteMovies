"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, Icon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const Links = ["Movies"];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.100", "gray.800"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate("/Movies");
  };

  return (
    <>
      <Box bg={useColorModeValue("gray")} px={4}>
        <Flex
          h={15}
          height={"100px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={600} alignItems={"center"}>
            <Image
              borderRadius="full"
              boxSize="90px"
              src="https://img.freepik.com/premium-vector/cinema-camera-roll-film-logo-design-template_527727-210.jpg"
            />
            <HStack
              as={"nav"}
              spacing={20}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link} padding="10px">
                  {link === "Homepage" ? (
                    <Link to="/">{link}</Link>
                  ) : (
                    <Link to={`/${link}`}>{link}</Link>
                  )}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex p={4} justify="flex-end" alignItems="center">
            <Link to="/SignIn">
              <IconButton
                size="md"
                icon={<Icon as={AiOutlineUser} />}
                backgroundColor="gray"
                aria-label="Hesap"
                variant="link"
                cursor="pointer"
                width="50px"
                height="50px"
                minW={1}
                margin="0 10px"
              />
            </Link>
            <Link to="/Favorite">
              <IconButton
                size="md"
                icon={<FaHeart />}
                backgroundColor="gray"
                aria-label="Kalp"
                variant="link"
                cursor="pointer"
                width="50px"
                height="50px"
                minW={1}
                margin="0 10px"
              />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
