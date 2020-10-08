import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ui from './ui.png';
import cope from './cope.png';
import project from './project.jpg';
import './FourthPage.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
      className="TabPanel"
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="triforce">
      <div>
        <h2>This is the Triforce</h2>
      </div>
        <div className="TabsBar"> 
          <AppBar position="static" className="AppBar">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Expertise"/>
              <Tab label="Site"/>
              <Tab label="Business"/>
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <img src={cope} alt="people-growing" className='image-size'/> 
          </TabPanel>
          <TabPanel value={value} index={1}>
            <img src={ui} alt="people-growing" className='image-size'/> 
          </TabPanel>
          <TabPanel value={value} index={2}>
            <img src={project} alt="people-growing" className='image-size'/> 
          </TabPanel>
      </div>
    </div>
    
  );
}
