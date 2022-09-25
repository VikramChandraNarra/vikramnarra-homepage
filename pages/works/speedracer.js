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
          Speed Racer Game <Badge>2022</Badge>
        </Title>
        <P>
          Wrote a 2000 line program in assembly to create a Car Racing Game 😊.
          <br></br>
          <Link>Takeaways:</Link><br></br>
          - Stack Managment <br></br>
          - Memory Register Management <br></br>
          - Processes and Functions Managment

        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Video</Meta>
            <Link href= "https://utoronto.zoom.us/rec/share/kiiCnSr4y-OG0aPMo7XsE2IDNsvFuO6H2dRO5JqOthPdA9GpVaLx9wKfGFMSMJFy.aXV8IMLZCZ93Yt4L?startTime=1660270206000">
              SpeedRacer Demo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Mars</span>
          </ListItem>
          <ListItem>
            <Meta>Languages</Meta>
            <span>Assembly</span>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/VikramChandraNarra/Speed-Racer-Game-with-Assembly">
              GitHub<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/assembly.png" alt="Assembly" />

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  