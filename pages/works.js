import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
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

import carbonfootprint1 from '../public/images/works/CarbonFootprint.png'
import safespot1 from '../public/images/works/SafeSpot1.png'
import findspot from '../public/images/works/findspot.jpeg'
import kNight from '../public/images/works/kNight.png'
import td from '../public/images/works/td.png'

// import signify from '../public/images/works/SignifyThumbnail.png'
import nest from '../public/images/works/nest.png'
import rbc1 from '../public/images/works/rbc.png'
import flutterdev1 from '../public/images/works/Flutter2.png'



const Works = () => (
  <Layout title="Works">
    <Container>
        <Heading as="h3" variant="section-title" fontSize={20} mb={4} marginTop={5}>
        Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="" title="Cloud Engineer Co-op" thumbnail={td}>
          Worked as a Cloud Engineer for TD. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="" title="Software Engineer Co-op" thumbnail={rbc1}>
          Worked as a Software Engineer for RBC Carribean. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="" title="ML Engineer" thumbnail={nest}>
          Building ML models using deep learning for mining engineer to help them better predict where to dig the next bore hole. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="" title="Lead Developer" thumbnail={flutterdev1}>
          Leading teams of software engineers to build a mental health application for Flutter Dev Organization x Harvard.

          </WorkGridItem>
        </Section>
        </SimpleGrid>


      <Heading as="h3" variant="section-title" fontSize={20} mb={4} marginTop={5}>
        Projects
        </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="kNight" title="kNight" thumbnail={kNight}>
          kNight utilizes camera vision technology and machine learning to enhance safety and security during nighttime activities. Its intelligent features provide real-time alerts and assistance, empowering users to navigate and engage in nighttime activities with confidence.

          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="findspot" title="FindSpot" thumbnail={findspot}>
          FindSpot attempts to offer accessible indoor navigation for individuals with accessibility needs. FindSpot enables users to effortlessly navigate within indoor spaces, filling a crucial gap in current solutions.

          </WorkGridItem>
        </Section>
        {/* <Section>
          <WorkGridItem id="signify" title="Signify" thumbnail={signify}>
          Signify is a revolutionary camera vision-based app that uses machine 
          learning and cloud computing to help bridge the communication gap between
          the deaf community and hearing individuals.
          </WorkGridItem>
        </Section> */}
        <Section>
          <WorkGridItem id="safespot" title="SafeSpot" thumbnail={safespot1}>
          SafeSpot app aims to provide real-time monitoring and alert system to 
          detect any signs of injury or danger for vulnerable individuals, using 
          cloud-based machine learning algorithms and computer vision techniques.
          </WorkGridItem>
        </Section>
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

      <Section delay={0.6}>
          <WorkGridItem id="morningoshowcase" thumbnail={morningShowcase} title="Morningo Showcase">
            Developed a Prototype Showcase Website that is being hosted on 
            the decentralized blockcahin for an innovative Startup called Morningo.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="carboncam" title="CarbonCam" thumbnail={carbonfootprint1}>
          CarbonCam allows users to find the amount of time it takes for materials
          to decompose, simply by allowing users to take pictures of objects.
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
