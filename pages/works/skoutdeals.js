import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Skout Deals">
    <Container maxW="container.lg" mb={8}>
      <Title>
        Skout Deals <Badge>2017-2018</Badge>
      </Title>
      <P>
        A food ordering and delivery app for local chefs &amp; foodie start-ups.
      </P>
      <List ml={4} my={4} mb={8}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://web.archive.org/web/20181105073009/https://www.skoutdeals.com/">
            https://www.skoutdeals.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>App Stack</Meta>
          <span>Dagger2, RoomDB, Retrofit</span>
        </ListItem>
        <ListItem>
          <Meta>Twitter</Meta>
          <Link href="https://twitter.com/skoutdeals">
            Skout Deals on Twitter <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/skout_01.png" alt="SkoutDeals" />
    </Container>
  </Layout>
)

export default Work
