import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Autoaqua">
    <Container maxW="container.lg" mb={8}>
      <Title>
        Autoaqua <Badge>2021</Badge>
      </Title>
      <P>
        A landing page I quickly threw together for a plastic packaging
        manufacturer to showcase their PET bottle catalogue. Fun fact: Both the
        pink 250ml plastic bottle and the blowmould pictured in the last image
        (rendered in Blender) were designed by myself, first in Blender then
        Fusion360 for CAD and CAM, after which I also did the actual aluminium
        machining on my 90&apos;s retrofitted Modig CNC milling center.
      </P>
      <List ml={4} my={4} mb={8}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://autoaqua.ro/">
            https://www.autoaqua.ro/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web (+ CNC 😎 )</span>
        </ListItem>
        <ListItem>
          <Meta>App Stack</Meta>
          <span>Next.js, ChakraUI</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/aq_01.png" alt="Autoaqua" />
      <WorkImage src="/images/works/aq_02.png" alt="Autoaqua" />
      <WorkImage src="/images/works/aq_03.jpg" alt="Autoaqua" />
    </Container>
  </Layout>
)

export default Work
