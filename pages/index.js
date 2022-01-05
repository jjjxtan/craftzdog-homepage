import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container maxW="container.lg" pb={6}>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Justin Stan
          </Heading>
          <p>Mobile Artisan ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/justin.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Justin is a freelance developer based in Romania with a passion for
          building handheld experiences. He has a knack for all things mobile,
          from planning and designing all the way to solving real-life problems
          with code. When not online, he&apos;s either causing vehicular mayhem
          somewhere or cleaning his records.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in Iasi, Romania.
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Completed the Bachelor&apos;s Program in Computer Science at AIC
          University of Iași, RO
        </BioSection>
        <BioSection>
          <BioYear>2015 - 2017</BioYear>
          Freelance work
        </BioSection>
        <BioSection>
          <BioYear>2017 - 2018</BioYear>
          Android Developer at Skout Deals
        </BioSection>
        <BioSection>
          <BioYear>2018 - 2021</BioYear>
          Lead Android Developer at{' '}
          <Link href="https://www.zyper.com/" target="_blank">
            Zyper
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2021 - present</BioYear>
          Freelance work
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Motorsports,{' '}
          <Link
            href="https://www.youtube.com/playlist?list=PLzffyP7DXvQat5zFGFDF5cFSFluif7AHL"
            target="_blank"
          >
            Music
          </Link>
           &nbsp;& Vinyl, Reading Sci-Fi, Playing Guitar, Compose
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/jjjxtan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @jjjxtan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/_u/jjjstan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @jjjstan
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
