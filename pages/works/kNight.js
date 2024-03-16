import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="kNight">
    <Container>
      <Title>
        kNight <Badge>2022 - Current</Badge>
      </Title>
      <P>
        🌟 Thrilled to share the journey of developing kNight, an innovative project addressing safety concerns in the night by introducing a unique Uber-like application for drone protection. Recognizing the challenges posed by nighttime crimes due to insufficient supervision, our team created a solution that empowers individuals to book drones for added security.
      </P>
      <P>
        🚀 What kNight Does: Revolutionizes personal safety by allowing users to book drones that follow them during the night. This innovative application provides an extra layer of protection, particularly in areas prone to crime and low visibility.
      </P>
      <P>
        🔧 How We Built It: The development involved creating a user-friendly interface using modern technologies, ensuring a seamless booking process. The backend was carefully crafted to coordinate drone movements, offering a reliable and efficient protective service.
      </P>
      <P>
        🤔 Challenges Faced and Lessons Learned: Navigating the complexities of drone coordination and ensuring real-time tracking presented challenges. This experience taught us the importance of adaptability and effective problem-solving in the fast-paced world of app development.
      </P>
      <P>
        🏆 Accomplishments: Our team is particularly proud of successfully implementing a cutting-edge drone protection system. Balancing user experience with the intricacies of drone technology showcases our commitment to delivering a solution that prioritizes safety and peace of mind.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>EVolve Hackathon 2023</Meta>
          <span>2nd Place 🏆</span>
        </ListItem>
        <ListItem>
          <Meta>Video</Meta>
          <Link href="https://youtu.be/847EltfEy3Q?si=RDC4skhtUiDV9svA">
            kNight Video <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile Application (iOS & Android)</span>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>JavaScript, React Native, Node.js</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Google Maps API</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/knight.png" alt="kNight" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/847EltfEy3Q"
          title="kNight Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
