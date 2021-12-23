import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbZyper from '../public/images/works/zyper_eyecatch.png'
import thumbIridisfera from '../public/images/works/iridisfera_eyecatch.png'
import thumbBanquet from '../public/images/works/banquet_eyecatch.png'
import thumbSkout from '../public/images/works/skoutdeals_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="zyper" title="Zyper" thumbnail={thumbZyper}>
            Community app for a marketing platform
          </WorkGridItem>
        </Section>
        <Section>
        <WorkGridItem
            id="banquet"
            title="Banquet"
            thumbnail={thumbBanquet}
          >
            Food delivery app for local chefs &amp; foodie start-ups
        </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="iridisfera"
            title="Iridisfera"
            thumbnail={thumbIridisfera}
          >
            Wide-gamut wallpaper app for Android
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="skoutdeals" thumbnail={thumbSkout} title="SkoutDeals">
            Location-based app that helps people find nearby deals, sales and coupons
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {
      /*
      <Section delay={0.3}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Older work
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      */
      }

    </Container>
  </Layout>
)

export default Works
