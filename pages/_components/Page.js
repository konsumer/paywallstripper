import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap'

const ThemeSwitcher = ({ theme=(typeof localStorage !== 'undefined' ? localStorage.theme||'cosmo' : 'cosmo') }) => {
  const [ currentTheme, setCurrentTheme ] = useState(theme)
  const [ open, setOpen ] = useState(false)
  const toggleOpen = () => setOpen(o => !o)
  const setTheme = theme => {
    setCurrentTheme(theme)
    localStorage.theme = theme
  }
  return (
    <div>
      <Head>
        <link href={`https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/${currentTheme}/bootstrap.min.css`} rel="stylesheet" />
      </Head>
      <Dropdown isOpen={open} toggle={toggleOpen}>
        <DropdownToggle caret>
          {currentTheme}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => setTheme('cerulean')}>Cerulean</DropdownItem>
          <DropdownItem onClick={() => setTheme('cosmo')}>Cosmo</DropdownItem>
          <DropdownItem onClick={() => setTheme('cyborg')}>Cyborg</DropdownItem>
          <DropdownItem onClick={() => setTheme('darkly')}>Darkly</DropdownItem>
          <DropdownItem onClick={() => setTheme('flatly')}>Flatly</DropdownItem>
          <DropdownItem onClick={() => setTheme('journal')}>Journal</DropdownItem>
          <DropdownItem onClick={() => setTheme('litera')}>Litera</DropdownItem>
          <DropdownItem onClick={() => setTheme('lumen')}>Lumen</DropdownItem>
          <DropdownItem onClick={() => setTheme('lux')}>Lux</DropdownItem>
          <DropdownItem onClick={() => setTheme('materia')}>Materia</DropdownItem>
          <DropdownItem onClick={() => setTheme('minty')}>Minty</DropdownItem>
          <DropdownItem onClick={() => setTheme('pulse')}>Pulse</DropdownItem>
          <DropdownItem onClick={() => setTheme('sandstone')}>Sandstone</DropdownItem>
          <DropdownItem onClick={() => setTheme('simplex')}>Simplex</DropdownItem>
          <DropdownItem onClick={() => setTheme('sketchy')}>Sketchy</DropdownItem>
          <DropdownItem onClick={() => setTheme('slate')}>Slate</DropdownItem>
          <DropdownItem onClick={() => setTheme('solar')}>Solar</DropdownItem>
          <DropdownItem onClick={() => setTheme('spacelab')}>Spacelab</DropdownItem>
          <DropdownItem onClick={() => setTheme('superhero')}>Superhero</DropdownItem>
          <DropdownItem onClick={() => setTheme('united')}>United</DropdownItem>
          <DropdownItem onClick={() => setTheme('yeti')}>Yeti</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default ({ children }) => (
  <div>
    <Head>
      <title>Paywall Stripper</title>
    </Head>
    <Navbar color="primary" dark expand="md">
      <NavbarBrand className="display-3 mr-auto">
        <Link href='/'><a style={{ color: 'inherit', textDecoration: 'none' }}>Paywall Stripper</a></Link>
      </NavbarBrand>
      <NavbarText><ThemeSwitcher /></NavbarText>
    </Navbar>
    <div>
      {children}
    </div>
  </div>
)