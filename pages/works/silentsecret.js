import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Silent Secret">
    <Container maxW="container.lg" mb={8}>
      <Title>
        Silent Secret <Badge>2015</Badge>
      </Title>
      <P>
        An anonymous secret-sharing app specifically targeted towards teenagers.
      </P>
      <List ml={4} my={4} mb={8}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://web.archive.org/web/20160609135827/http://www.silentsecret.com/">
            https://www.silentsecret.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Media</Meta>
          <Link href="https://www.themix.org.uk/your-voices/submissions/silent-secret">
            Article on themix.org.uk <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ss_03.png" alt="SkoutDeals" />
      <WorkImage src="/images/works/ss_02.jpg" alt="SkoutDeals" />
    </Container>
  </Layout>
)

export default Work
