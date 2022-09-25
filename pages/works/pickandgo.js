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
          Pick&Go <Badge>2022</Badge>
        </Title>
        <P>
          An application that allows users to reserve and book venues. Other users can register a slot in those public venues and manage events.
          The application is focused around efficiency, simplicity, and built with easy-to-use UI.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href= "https://pickandgoapp.github.io/Pick-Go/index.html">
              Pick&Go Website <ExternalLinkIcon mx="2px" />
            </Link> 
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>Android</span>    
          </ListItem>
          
          <ListItem>
            <Meta>Languages</Meta>
            <span>Java, Kotlin</span>
          </ListItem>
          <ListItem>
            <Meta>Tools</Meta>
            <span>Firebase, Android Studio, Figma, Jira</span>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/VikramChandraNarra/PickupApp">
              GitHub<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/pickandgoweb.png" alt="Inkdrop" />

        <WorkImage src="/images/works/model1.png" alt="Inkdrop" />
        <WorkImage src="/images/works/model2.png" alt="Inkdrop" />
        {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-qBavwqc_mY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio> */}
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  