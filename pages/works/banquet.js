import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Banquet">
    <Container maxW="container.lg" mb={8}>
      <Title>
        Banquet <Badge>2021</Badge>
      </Title>
      <P>
        A food ordering and delivery app for local chefs &amp; foodie start-ups.
      </P>
      <List ml={4} my={4} mb={8}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.banqueteats.com/">
            https://www.banqueteats.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>App Stack</Meta>
          <span>Dagger/Hilt, RoomDB</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://play.google.com/store/apps/details?id=com.banqueteats">
            Banquet on Play Store
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/banquet_01.png" alt="Banquet" />
    </Container>
  </Layout>
)

export default Work
