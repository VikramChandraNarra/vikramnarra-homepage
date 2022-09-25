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
          3D Mesh Converter <Badge>2022</Badge>
        </Title>
        <P>
        Convert between OBJ, PLY, OFF mesh formats while performing rotations. <br></br>
        - Utilized Regex Patterns to detect a specific pattern in data. <br></br>
        - Used interfaces, and abstract inheritance. <br></br>
        - Used Linear Algebra and rotational algebra to transform objects. 

        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Eclipse</span>
          </ListItem>
          <ListItem>
            <Meta>Languages</Meta>
            <span>Java</span>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link href="https://github.com/VikramChandraNarra/3D-Mesh-Coverter">
              GitHub<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/threeimage.jpeg" alt="Three" />

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  