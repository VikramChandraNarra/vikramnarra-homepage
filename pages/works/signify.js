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
  <Layout title="Signify">
    <Container>
      <Title>
        Signify <Badge>2022 - Current</Badge>
      </Title>
      <P>
        The app aims to address the communication gap between deaf and hearing individuals by providing real-time sign language translation, breaking down barriers and fostering inclusivity.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href= "https://signifyapp.com">
            Signify Website <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web, Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>Python, JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Flask, TensorFlow, React, React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Code</Meta>
          <Link href="https://github.com/signifyapp">
            GitHub<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/signify.png" alt="Signify" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
