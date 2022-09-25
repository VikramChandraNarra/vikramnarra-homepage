import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


import healthCan from '../public/images/works/healthcanlogo.png'
import pickAndGo from '../public/images/works/pickAndGologo.png'
import arogiPic from '../public/images/works/arogi.png'
import morningShowcase from '../public/images/works/morningo.png'
import threeImage from '../public/images/works/threeimage.jpeg'
import assembly from '../public/images/works/assembly.png'
import ligerrBoard from '../public/images/works/ligerrBoard.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} marginTop={5}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="healthcan" title="HealthCan" thumbnail={healthCan}>
            An app that addresses the complication of Canadian healthcare,
            by utilizing efficient bookings and centralization of all health data.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="pickandgo"
            title="Pick&Go"
            thumbnail={pickAndGo}
          >
            An app that allows users to reserve and book venues, and allows other users to book and schedule for them.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="arogi"
            title="Arogi"
            thumbnail={arogiPic}
          >
            A Mental Health app that is focused around tracking a user&apos;s overall mental wellness,
            and recommending tasks to increase their standings. 
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.1}>
          <WorkGridItem id="ml" thumbnail={thumbMenkiki} title="Liscense Plate Recognition">
            An ML program
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      
      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Less Relevant Projects/Ongoing
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.6}>
          <WorkGridItem id="morningoshowcase" thumbnail={morningShowcase} title="Morningo Showcase">
            Developed a Prototype Showcase Website that is being hosted on 
            the decentralized blockcahin for an innovative Startup called Morningo.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="fileconverter" thumbnail={threeImage} title="3D File Converter">
          Convert between OBJ, PLY, OFF mesh formats while performing rotations.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="speedracer"
            thumbnail={assembly}
            title="Speed Racer"
          >
            Built a Car Racing game with Assembly
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="ligerr" thumbnail={ligerrBoard} title="Ligerr">
            Developed the game logic for an interactive brain game. 
            Will be developed into a full pledged website soon!
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
