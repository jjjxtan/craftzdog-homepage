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

      <Box
        w="full"
        style={{
            height: '100%',
            width: '100%',
            backgroundRepeat: 'repeat-y',
            backgroundImage: 'url(/images/grid.svg)',
            backgroundSize: 'cover'
        }}
        position="absolute"
        opacity="0.3"
      />

      <NavBar path={router.asPath} />

      <iframe
        w="full"
        src="/spline/index.html"
        style={{ position: 'absolute', height: '75vh' }}
        width="100%"
      />

      <Container maxW="container.md" style={{ paddingTop: '70vh' }} >
        <Box>{children}</Box>

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
