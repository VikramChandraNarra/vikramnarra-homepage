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
    <Layout title="HealthCan">
      <Container>
        <Title>
          Morning Showcase <Badge>2022 - Current</Badge>
        </Title>
        <P>
          Learned how to host an application on the blockchain, and integrate beautiful and interactive animations to a showcase website. 
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href= "https://solitary-voice-8333.on.fleek.co">
              Morningo Showcase Prototype <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website (Reactive)</span>
          </ListItem>
          <ListItem>
            <Meta>Languages</Meta>
            <span>HTML, CSS, JavaScript, React</span>
          </ListItem>
          <ListItem>
            <Meta>Tools</Meta>
            <span>Solitary, MetaMask</span>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/VikramChandraNarra/MorningoShowcase">
              GitHub<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/morningo.png" alt="Inkdrop" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  