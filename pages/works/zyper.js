import { Container, Badge, Link, List, ListItem, Heading, Center, UnorderedList } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Zyper">
    <Container maxW="container.lg">
      <Title>
        Zyper <Badge>2017-2020</Badge>
      </Title>
      <P>
        Community app for a London-based marketing platform meant to connect brands with their &quot;superfans&quot;.
        The company was eventually acquired by Discord in December 2020.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.zyper.com/">
            https://www.zyper.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Hilt-Dagger, RoomDB, Jetpack Compose</span>
        </ListItem>
        <ListItem>
          <Meta>APIs</Meta>
          <span>Sendbird Chat, Mixpanel, SendGrid, AWS Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Twitter</Meta>
          <Link href="https://twitter.com/zyper_official">
            Zyper&apos;s Twitter profile
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}  mb={8}>
        <ListItem>
          <Link href="https://www.businessinsider.com/brands-turning-to-micro-influencers-instead-of-instagram-stars-2019-4">
            <Badge mr={2}>Business Insider</Badge>
            Brands turning to micro-influencers
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://abcnews.go.com/Technology/wireStory/tech-entrepreneur-connects-brands-top-fans-68388434">
            <Badge mr={2}>ABC News</Badge>
            Tech start-up connects brands with top fans
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/zyper_03.png" alt="Zyper" />
      <WorkImage src="/images/works/zyper_02.png" alt="Zyper" />
      <WorkImage src="/images/works/zyper_01.png" alt="Zyper" />
    </Container>
  </Layout>
)

export default Work
