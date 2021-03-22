import Link from 'next/link'
import Layout from '../src/components/Layout'

const AboutPage = () => (
  <Layout title="About Page">
    <h1>About</h1>
    <p>WeatherPro</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
