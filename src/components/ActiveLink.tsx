import { Typography } from '@material-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { MouseEventHandler, PropsWithChildren } from 'react'
import { theme } from '../utils/theme'

// for active links used in NavBar component
export default function ActiveLink({ children, href }: PropsWithChildren<{href: string}>) {
    const router = useRouter()
    const style = {
      marginLeft: '1rem',
      color: router.pathname === href ? theme.palette.primary.main : theme.palette.secondary.main,
    }
  
    const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
      e.preventDefault()
      router.push(href)
    }
  
    return (
      <Link href={href}>
        <a onClick={handleClick} style={style}>
          <Typography variant="h6">{children}</Typography>
        </a>
      </Link>
    )
  }