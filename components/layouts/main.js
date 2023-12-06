import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

{
  /*
import dynamic from 'next/dynamic'
import VoxelDogLoader from '../voxel-dog-loader'
const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})
*/
}

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
        position="fixed"
        opacity="0.3"
      />

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Box
          w="full"
          style={{ width: '100%', display: 'flex', height: '70vh' }}
          height={{ sm: '55vh !important' }}
        >
          <iframe
            src="/spline/index.html"
            style={{ marginLeft: 'auto', marginRight: 'auto', display: 'flex' }}
            height="100%"
          />
        </Box>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
