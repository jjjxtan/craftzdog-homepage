import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container, Image, useColorModeValue } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Justin's homepage" />
        <meta name="author" content="Justin Stan" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Justin Stan" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Justin Stan - Home</title>
      </Head>

      <Image
        w="full"
        height="100%"
        position="absolute"
        opacity="0.3"
        src="/images/grid.svg"
        alt=""
      />

      <NavBar path={router.asPath} />

      <iframe
        w="full"
        src="/spline/index.html"
        style={{ position: 'absolute' }}
        width="100%"
        height="800"
      />

      <Container maxW="container.md" pt={720}>
        <Box>{children}</Box>

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
