import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="HealthCan">
      <Container>
        <Title>
          Arogi <Badge>2019</Badge>
        </Title>
        <P>
        Arogi aims to pinpoint the deficiencies of our mental health, clearly illustrates our mental health
        results with interactive graphs and charts, and provides a list of suggestions to improve the user’s mental health. 

        I profoundly believe that Arogi is the first step of my journey towards creating a new future where 
        mental health can be diagnosed, analyzed, and improved at the convenience of your palm.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Video</Meta>
            <Link href= "https://youtu.be/651_5sL-zKI">
              Arogi Demo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS</span>
          </ListItem>
          <ListItem>
            <Meta>What I used</Meta>
            <span>Swift, Objective-C, Python, SQL, Firebase</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/arogi.png" alt="Arogi" />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://youtu.be/651_5sL-zKI"
            title="YouTube video player"
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
  