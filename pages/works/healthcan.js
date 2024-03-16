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
          HealthCan <Badge>2022</Badge>
        </Title>
        <P>
          An app that addresses the complication of Canadian healthcare,
          by uttlizing efficient bookings and centralization of all health data.
          Targeted towards improving efficiency in booking Health 
          appointments and having all of a user&apos;s health info in one place. 
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Video</Meta>
            <Link href= "https://www.youtube.com/watch?v=rkqStDlyGfs&feature=youtu.be&ab_channel=HarisMalik">
              HealthCan Demo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android/Browser</span>
          </ListItem>
          <ListItem>
            <Meta>Languages</Meta>
            <span>Java</span>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/VikramChandraNarra/Health-Canada-App">
              GitHub<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/healthcaninfo.png" alt="Inkdrop" />
        <WorkImage src="/images/works/healthcandemo.png" alt="Inkdrop" />
        <WorkImage src="/images/works/healthcanweb.png" alt="Inkdrop" />

        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/rkqStDlyGfs"
            title="HealthCan Demo"
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
  