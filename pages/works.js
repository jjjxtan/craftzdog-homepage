import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbZyper from '../public/images/works/zyper_eyecatch.png'
import thumbIridisfera from '../public/images/works/iridisfera_eyecatch.png'
import thumbBanquet from '../public/images/works/banquet_eyecatch.png'
import thumbSkout from '../public/images/works/skoutdeals_eyecatch.png'
import thumbAutoaqua from '../public/images/works/autoaqua_eyecatch.png'
import thumbSecret from '../public/images/works/silentsecret_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container maxW="container.lg" mb={8}>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={8}>
        <Section>
          <WorkGridItem
            id="zyper"
            title="Zyper"
            thumbnail={thumbZyper}
            type="App & Design"
          >
            Community app for a marketing platform
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="banquet" title="Banquet" thumbnail={thumbBanquet}>
            Food delivery app for local chefs &amp; foodie start-ups
          </WorkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItem
            id="iridisfera"
            title="Iridisfera"
            thumbnail={thumbIridisfera}
          >
            Wide-gamut wallpaper app for Android
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="autoaqua"
            thumbnail={thumbAutoaqua}
            type="Landing"
            title="Autoaqua"
          >
            Landing for plastic packaging manufacturer
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
            id="skoutdeals"
            thumbnail={thumbSkout}
            title="SkoutDeals"
          >
            Location-based deal finding app
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.5}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Older work
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="silentsecret"
            title="Silent Secret"
            thumbnail={thumbSecret}
            type="App & Landing"
          >
            Anonymous sharing app for Android
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
