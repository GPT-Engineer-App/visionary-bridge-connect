import React, { useState } from "react";
import { Box, Heading, Text, Image, Button, Grid, GridItem, Input, Textarea, Checkbox, CheckboxGroup, Stack, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@chakra-ui/react";
import { FaLightbulb } from "react-icons/fa";

const Index = () => {
  const [isInspired, setIsInspired] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [credentials, setCredentials] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure(); // For modal

  const handleInspiredClick = () => {
    setIsInspired(true);
  };

  const handleBoredClick = () => {
    window.location.href = "/projects";
  };

  const handleProfileImageUpload = (event) => {
    setProfileImage(event.target.files[0]);
  };

  const handleCredentialsChange = (event) => {
    setCredentials(event.target.value);
  };

  const handleProjectSubmit = () => {
    // TODO: Submit project details
    onOpen(); // Open the modal after submitting project
  };

  const categoryLinks = {
    "Technology & Innovation": "https://example.com/tech",
    "Health & Wellness": "https://example.com/health",
    // Add more category links as needed
  };

  return (
    <Box>
      {/* Header */}
      <Box bgImage="https://images.unsplash.com/photo-1526873064951-dde8217f21bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" textAlign="center" py={20}>
        <Heading as="h1" size="2xl" fontWeight="bold" color="blue.700" textShadow="2px 2px #000" mb={2}>
          Visionary Ideas
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Delivering ideas to the resources of those who can make it happen
        </Text>
      </Box>

      {/* Main content */}
      <Grid templateColumns="repeat(3, 1fr)" gap={8} p={8}>
        {}
        <GridItem>
          <Box textAlign="center" mb={8}>
            <Heading as="h2" size="2xl">
              CORE VALUES
            </Heading>
          </Box>
          <Stack spacing={6}>
            <Text fontSize="xl">
              <strong>Core Statement</strong>
              <br />• First and foremost, the future of our children relies on open source.
            </Text>
            <Text fontSize="lg">
              <strong>Visibility</strong>
              <br />• We strive to provide the means for your ideas to be seen by the right people.
            </Text>
            <Text fontSize="md">
              <strong>Accessibility</strong>
              <br />• Our platform is intuitive and easy to navigate, welcoming innovators from all backgrounds.
            </Text>
            <Text fontSize="md">
              <strong>Collaboration Tools</strong>
              <br />• Manage projects, share files, and communicate seamlessly with collaborators.
            </Text>
          </Stack>
        </GridItem>

        {/* Center column */}
        <GridItem>
          {!isInspired ? (
            <Stack spacing={8} align="center">
              <Button colorScheme="green" size="lg" onClick={handleInspiredClick}>
                Inspired? Submit Your Project
              </Button>
              <Button colorScheme="blue" size="lg" onClick={handleBoredClick}>
                Bored? Choose Your Project
              </Button>
            </Stack>
          ) : (
            <Box>
              <Heading size="lg" mb={4}>
                Submit Your Project
              </Heading>
              <Stack spacing={4}>
                <Input placeholder="Project Title" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
                <Textarea placeholder="Project Description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} />
                <Button leftIcon={<FaLightbulb />} colorScheme="yellow" onClick={handleProjectSubmit}>
                  Start the Project
                </Button>
              </Stack>
            </Box>
          )}
        </GridItem>

        {}
        <GridItem>
          <Stack spacing={6}>
            <Text fontSize="xl">
              <strong>No one special</strong>
              <br />• Indeed that is true. I want this to work for you, as much as I hope it works for me. My ideas might be irrelevant to most. But just like your ideas they are Priceless all the same. And I'm not wealthy but I love giving and helping and I know there are many who feel the same. Let's Learn and Grow and Collaborate Together.
            </Text>
            <Text fontSize="lg">
              <strong>Connections and Resources</strong>
              <br />• We are growing our list to provide investors, mentors, and industry experts to bring your ideas to life.
            </Text>
            <Text fontSize="md">
              <strong>Education and Guidance</strong>
              <br />• A lot of planning is underway to provide access to resources for business planning, market analysis, and more to increase your project's success in all fields.
            </Text>
          </Stack>
        </GridItem>
      </Grid>

      {/* Profile Creation Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Your Profile</ModalHeader>
          <ModalBody>
            <Stack spacing={4}>
              <Input type="file" accept="image/*" onChange={handleProfileImageUpload} />
              <Textarea placeholder="Your credentials and interests..." value={credentials} onChange={handleCredentialsChange} />
              <Box>
                <Heading size="md" mb={2}>
                  Your First Project
                </Heading>
                <Text fontWeight="bold">{projectTitle}</Text>
                <Text>{projectDescription}</Text>
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
