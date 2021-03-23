import { Box } from '@material-ui/core'
import React, { ReactNode } from 'react'
import NavBar from './NavBar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Weather Pro' }: Props) => (
  <div>
    <NavBar />
    <Box p={{xs:1, sm:2, md:3}} pt={1} mt="64px">
      {children}
    </Box>
  </div>
)

export default Layout
