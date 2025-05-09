'use client';
import { useTheme as themeContext } from '@/context/themeContext';
import { AccountTree, ContactEmergency, House, Info, MenuBook, StackedBarChart, Surfing } from '@mui/icons-material';
import { AppBar, Box, Button, Container, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { MenuIcon, Moon, Projector, Sun } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

interface Props{
  isAdmin?: boolean
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Navbar: FC<Props> = ({isAdmin}) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { changeTheme, theme } = themeContext();
  const muiTheme = useTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'))
  

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };


    const list = (anchor: Anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List >
          <Link href={'/'} style={{ textDecoration: 'none', color: 'inherit'}}>
            <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <House/>
                  </ListItemIcon>
                  <ListItemText primary={'Home'} />
                </ListItemButton>
            </ListItem>
            </Link>
            <Link href={'/projects'} style={{ textDecoration: 'none', color: 'inherit'}}>
              <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountTree/>
                    </ListItemIcon>
                    <ListItemText primary={'Projects'} />
                  </ListItemButton>
              </ListItem>
            </Link>
            <Link href={'/about'} style={{ textDecoration: 'none', color: 'inherit'}}>
              <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Info/>
                    </ListItemIcon>
                    <ListItemText primary={'About'} />
                  </ListItemButton>
              </ListItem>
            </Link>
            <Link href={'/contact'} style={{ textDecoration: 'none', color: 'inherit'}}>
              <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ContactEmergency/>
                    </ListItemIcon>
                    <ListItemText primary={'Contact'} />
                  </ListItemButton>
              </ListItem>
            </Link>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>
              <ListItemIcon>
                {
                  theme === 'light'
                  ? <Sun/>
                  : <Moon/>
                }
              </ListItemIcon>
              <ListItemText primary={'Toggle darkmode'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );


  if(isMobile) {
    return (
      <React.Fragment key={'top'}>
      <Button onClick={toggleDrawer('top', true)}>
        <MenuIcon size={40} style={{ margin: 10 }}/>
      </Button>
      <Drawer
        anchor={'top'}
        open={state['top']}
        onClose={toggleDrawer('top', false)}
      >
        {list('top')}
      </Drawer>
    </React.Fragment>
    )
  }


  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{marginTop: 1}}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h4" color="primary">
            Tim Smans {isAdmin && <strong>(Admin)</strong>}
          </Typography>
          <Stack direction="row" spacing={4} >
            <Link href="/">
              <Button color="primary" size='large' sx={{fontSize: 23}}>Home</Button>
            </Link>
            <Link href="/projects">
              <Button color="primary" size='large' sx={{fontSize: 23}}>Projects</Button>
            </Link>            
            <Link href="/about">
              <Button color="primary" size='large' sx={{fontSize: 23}}>About</Button>
            </Link>               
            <Link href="/contact">
              <Button color="primary" size='large' sx={{fontSize: 23}}>Contact</Button>
            </Link>             
            <Button color="primary" onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')} style={{marginLeft: '50px'}}>
                {
                  theme === 'light'
                  ? <Sun size={'30px'}/>
                  : <Moon/>
                }
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
