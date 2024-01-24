import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React, { useState } from 'react'
import PopularInsights from './Insight Tab Components/PopularInsights';

const tabStyle = {
    fontWeight: '800',
    fontSize: '20px',
    textTransform: 'none',
    opacity: '70%',
    '&.Mui-selected': {
        color: '#3153CD',
    },
};

const InsightTabs = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" TabIndicatorProps={{
                        style: {
                            height: 7,
                            backgroundColor: '#3153CD'
                        },
                    }}>
                        <Tab sx={tabStyle} label="Popular" value="1" />
                        <Tab sx={tabStyle} label="Engineering" value="2" />
                        <Tab sx={tabStyle} label="Estimation" value="3" />
                        <Tab sx={tabStyle} label="Electrical" value="4" />
                        <Tab sx={tabStyle} label="Marketing" value="5" />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{ padding: '0' }}><PopularInsights></PopularInsights></TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
                <TabPanel value="4">Item Four</TabPanel>
                <TabPanel value="5">Item Five</TabPanel>
            </TabContext>
        </Box>
    )
}

export default InsightTabs