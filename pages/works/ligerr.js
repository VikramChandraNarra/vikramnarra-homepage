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
          Ligerr <Badge>2021</Badge>
        </Title>
        <P>
        Developed the game logic of an Indian inspired game utilizing FEN algorithms. I plan on fully implementing this project to be scaled online by the end of 2023.
        You can learn more about my game in the REAME.md file in the below source code.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Browser</span>
          </ListItem>
          <ListItem>
            <Meta>Languages</Meta>
            <span>HTML, CSS, JavaScript</span>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/VikramChandraNarra/Ligerr">
              GitHub<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/ligerrBoard.png" alt="Inkdrop" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  