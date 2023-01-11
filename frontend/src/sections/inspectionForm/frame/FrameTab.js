import React, { useState } from 'react';
import { capitalCase } from 'change-case';
import { styled } from '@mui/material/styles';
import { Tabs, Tab, Box, Grid } from '@mui/material';
import Structural from './Structural';

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 8,
  width: '100%',
  display: 'flex',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(3),
  },
}));

function FrameTab(props) {
  const { subCurrentTabFrame, setSubCurrentTabFrame } = props;
  const handleChangeTab = (newValue) => {
    setSubCurrentTabFrame(newValue);
  };

  const PROFILE_TABS = [
    {
      value: 'structural',
      component: <Structural {...props} />,
    },
  ];

  return (
    <Grid container>
      <TabsWrapperStyle>
        <Tabs
          value={subCurrentTabFrame}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          disabled
          // onChange={(e, value) => handleChangeTab(value)}
        >
          {PROFILE_TABS.map((tab) => (
            <Tab disableRipple key={tab.value} value={tab.value} label={capitalCase(tab.value)} />
          ))}
        </Tabs>
      </TabsWrapperStyle>

      {PROFILE_TABS.map((tab) => {
        const isMatched = tab.value === subCurrentTabFrame;
        return (
          isMatched && (
            <Box sx={{ ml: 2, mr: 2, width: '100%' }} key={tab.value}>
              {tab.component}
            </Box>
          )
        );
      })}
    </Grid>
  );
}

export default FrameTab;
