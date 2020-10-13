import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ui from './ui.png';
import cope from './cope.png';
import project from './project.jpg';
import TabPanel from './TabPanel';
import './FourthPage.css';
import {useHistory} from 'react-router-dom';

export default function FourthPage(props) {
  const [value, setValue] = React.useState(0);
  const { Nombre } = props;
  const history = useHistory()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="triforce">
      <div className="header">
        <h2>This is the Triforce</h2>
        <p className="tagline">You are here, { Nombre } </p>
        <p className="description">The three aspects consist of the Studio, TDC and Accounts</p>
      </div>
      <div className="TabsBar"> 
        <AppBar position="static" className="AppBar">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Expertise"/>
            <Tab label="Site"/>
            <Tab label="Business"/>
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} className="TabPanel">
          <img src={cope} alt="people-growing" className='image-size'/> 
        </TabPanel>
        <TabPanel value={value} index={1} className="TabPanel">
          <img src={ui} alt="people-growing" className='image-size'/> 
        </TabPanel>
        <TabPanel value={value} index={2} className="TabPanel">
          <img src={project} alt="people-growing" className='image-size'/> 
        </TabPanel>
      </div>
      <div className="buttons">
          <button onClick={()=>{history.push("/third")}}>Previous</button>
          <button onClick={()=>{history.push("/values")}}>Next</button>
      </div>
    </div>
  );
}
