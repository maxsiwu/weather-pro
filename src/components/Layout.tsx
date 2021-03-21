import { Box } from '@material-ui/core'
import React, { ReactNode } from 'react'
import NavBar from './NavBar/NavBar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Weather Pro' }: Props) => (
  <div>
    <NavBar />
    <Box p={3} pt={1} mt="64px">
      {children}
    </Box>
  </div>
)

export default Layout
