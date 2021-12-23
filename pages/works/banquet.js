import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Iridisfera">
    <Container maxW="container.lg" mb={8}>
      <Title>
        Iridisfera <Badge>2021</Badge>
      </Title>
      <P>
        A collection of wide-gamut wallpapers for Android, built swiftly with Jetpack Compose (and its landing page).
      </P>
      <List ml={4} my={4} mb={8}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.iridisfera.app/">
            https://www.iridisfera.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android, Web</span>
        </ListItem>
        <ListItem>
          <Meta>App Stack</Meta>
          <span>Dagger-Hilt, RoomDB, Jetpack Compose</span>
        </ListItem>
        <ListItem>
          <Meta>Web Stack</Meta>
          <span>Bootstrap, Masonry</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://play.google.com/store/apps/details?id=app.iridisfera">
            Iridisfera on Play Store
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/iridisfera_02.png" alt="Iridisfera" />
      <WorkImage src="/images/works/iridisfera_01.png" alt="Iridisfera" />
    </Container>
  </Layout>
)

export default Work
