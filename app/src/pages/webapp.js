import '../App.css';
import React, { useState } from 'react'
import LogoHeader from '../components/LogoHeader.js'
import Links from '../components/NavLinks.js'
import Viewer from '../components/Viewer.js'
import { AppShell, Navbar, Header, Burger, MediaQuery, useMantineTheme } from '@mantine/core';

export default function WebApp() {
  const [ opened, setOpened ] = useState(false)
  const [ settings, setSettings ] = useState(JSON.parse(localStorage.getItem('values')))
  const theme = useMantineTheme();
  let viewer = <Viewer settings={settings} />
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar height={600} p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ base: 300 }} className="dark:bg-gray-700">
          <Links settings={settings} setSettings={setSettings} setOpened={setOpened} />
        </Navbar>
      }
      header={
        <Header height={60} p="xs" className="dark:bg-gray-600">
          <div className="flex flex-row items-center">
            <MediaQuery largerThan="sm" styles={{display: "none"}}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <LogoHeader />
          </div>
        </Header>
      }
      className="dark:bg-gray-800 dark:text-white h-full">
        {viewer}
    </AppShell>
  );
}