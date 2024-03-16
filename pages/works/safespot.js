import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SafeSpot">
    <Container>
      <Title>
        SafeSpot <Badge>2022 - Current</Badge>
      </Title>
      <P>
        The SafeSpot app addresses the growing demand for real-time monitoring and alert systems in healthcare, particularly for vulnerable individuals like the elderly, disabled, and those requiring constant supervision.
      </P>
      <P>
        The app utilizes cloud-based machine learning algorithms and computer vision techniques to detect signs of danger or injury, triggering immediate alerts to designated emergency contacts.
      </P>
      <P>
        Developed using HTML, CSS, and ReactJs, SafeSpot also integrates live streaming capabilities using phones as cameras to ensure continuous monitoring.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>uOttaHacks 2023</Meta>
          <span>3nd Place 🏆</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web (Reactive)</span>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>HTML, CSS, ReactJs</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Computer Vision, Open CV, Numpy, Flask</span>
        </ListItem>
        <ListItem>
          <Meta>Code</Meta>
          <Link href="https://github.com/harismalik-1/SmapleRepo">
            GitHub<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://deluxe-twilight-ad230e.netlify.app/#">
            Website<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/SafeSpot1.png" alt="SafeSpot" />
      <WorkImage src="/images/works/SafeSpot2.png" alt="SafeSpot" />
      <WorkImage src="/images/works/SafeSpot3.png" alt="SafeSpot" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
