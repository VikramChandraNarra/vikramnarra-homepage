import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
// import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoMail, IoCall} from 'react-icons/io5'
import Image from 'next/image'
import Typed from 'react-typed'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        marginTop={5}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
          <Typed
              strings={["print(\"Hello World!\");", "System.out.println(\"Hello World!\");", "System.Console.WriteLine(\"Hello World\");", "println('Hello World');", "console.log(\"Hello World\");", "echo \"Hello World\""]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
  
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Vikram Narra
          </Heading>
          <p>
            <Link>
            <Typed
                strings={["Full Stack Developer 👨‍💻", "ML Engineer 🧠", "iOS Developer ", "Android Developer 📱", "SV4 Prospectors @ Hatchery 🤔"]}
                typeSpeed={80}
                backSpeed={30}
                loop
              />
            </Link>

          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/IMG_1198.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>

        <Paragraph>
          Vikram is a <Link>Computer Science Specialist
          Software Engineering Stream </Link> 
          student at <Link> University of Toronto</Link>
          . With a huge passion for building 
          Full Stack Applications and ML Models that Drives Efficiency, Automation, and Deeper Insights into Our World 

        </Paragraph>
        <Paragraph>
          In his spare time he loves to network and connect with other innovative tech enthusiasts 
          and spends most of his time immersing himself into the future of tech. 
        </Paragraph>
          



          {/* Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          <NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>Inkdrop</Link>
          </NextLink>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <NextLink href="https://www.youtube.com/devaslife" passHref>
            <Link target="_blank">Dev as Life</Link>
          </NextLink>
          &quot; has more than 100k subscribers. */}
        <Box align="center" my={4}>
          <NextLink href="https://drive.google.com/uc?export=download&id=1F1DG_sbfhwyByMh4c83kuUjSIO7f_yVp" download passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Resume
            </Button>
          </NextLink>
        </Box>


      </Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          What I am currently learning
        </Heading>
        <Box delay={0.6} marginLeft={5}>
          <ul>
            <li>Blockchain Security ⛓️</li>
            <li>Web 3.0 Deployment 👛</li>
            <li>Deep Learning 🧠</li>
            <li>Quantum Neural Networks 🌲</li>
          </ul>
        </Box>

      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          What I finished learning
        </Heading>
        <Box delay={0.6} marginLeft={5}>
          <ul>
            <li>Computer Vision and CNNs</li>
            <li>React Native</li>
            <li>Flutter</li>
            <li>Solidity</li>
          </ul>
        </Box>

      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contacts
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/VikramChandraNarra" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @VikramChandraNarra
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/vikramnarra13" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @vikramnarra13
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/vikram-narra-9515101b7/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Vikram Narra
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:vchandra.narra@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMail />}
              >
                vchandra.narra@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="tel:+1403-667-  3563">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoCall />}
              >
                +1 (403) 667 3563
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
