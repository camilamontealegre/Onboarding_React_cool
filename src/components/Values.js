import React from 'react';
import './Values.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import manifesto from './manifesto.jpg';
import FooterButtons from './FooterButtons';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Values() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const history = useHistory()

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="agrupa-todo">
      <div className={classes.root}>
        <h2 className="title-values">Globant Values and FCI3</h2>
        <div className="box" >
        <div className="manifesto">
          <img src={manifesto} alt="Globant manifesto " className='manifesto'/> 
        </div>
      <div className="accordion-2">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
          <Typography className={classes.heading}>Excellence in your work</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <p>Focused, Commited</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Act Ethically</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
          <p>Integrity</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
          <Typography className={classes.heading}>Constantly Innovate</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <p>Fast Learner, Clear Thinker, Innovative</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
          <Typography className={classes.heading}>Think Big</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <p> Innovative</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel4bh-header"
          >
          <Typography className={classes.heading}>Team Player</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <p> Flexible, Collaborative, Inclusive</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography className={classes.heading}>Have Fun</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <p>Inclusive</p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
        </div>
        <FooterButtons 
          OnPrevious={()=>{
            history.push("/triforce")
            }}
          OnNext={()=>{
            history.push("/keypeople")
          }}
        />
     </div>
    </div>
  );
}