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
  <Layout title="FindSpot">
    <Container>
      <Title>
        FindSpot <Badge>2022 - Current</Badge>
      </Title>
      <P>
      🌐 Excited to share the journey of creating FindSpot, an innovative solution born out of empathy for individuals with accessibility needs in indoor spaces. Our team developed a React Native application that offers clear and accessible indoor navigation, addressing a significant gap in current solutions.
      </P>
      <P>
      🚀 What FindSpot Does:
      Enables quick navigation within the E7 building, providing a simple interface for users to select a room and find the shortest obstacle-free path using their phone's location.
      </P>
      <P>
      🔧 How We Built It:
      Front-end developed in React Native, while Python and relevant libraries were employed for the routing algorithm. Overcoming challenges in integrating the algorithm with the React Native application was a key accomplishment.
      </P>
      <P>
      🤔 Challenges Faced and Lessons Learned:
      Routing posed a significant challenge, prompting us to learn the importance of meticulous planning. Despite the hurdles, we're proud of successfully implementing the routing algorithm and overcoming React Native's nuances.
      </P>
      <P>
      🏆 Accomplishments:
      The implementation of the routing algorithm stands out as a major achievement, demonstrating our ability to balance GUI and functionality. Overcoming React Native's challenges further showcases our team's resilience and problem-solving skills.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Hackathon</Meta>
          <span>Hack the North 2023</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>JavaScript, Python</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>React Native CLI, Python libraries</span>
        </ListItem>
        <ListItem>
          <Meta>Video</Meta>
          <Link href="https://youtu.be/xXantGenhA0">
            Video<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/findspot.jpeg" alt="FindSpot" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/xXantGenhA0"
          title="FindSpot Demo"
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
