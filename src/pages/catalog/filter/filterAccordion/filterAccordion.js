import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    wrapper: {
        boxShadow: "none",
        position: 'static',
        
    },
    root: {
      flexDirection: 'row-reverse',
      padding: 0,
      minHeight: '30px',
      '& > .Mui-expanded': {
        padding: 0,
        paddingLeft: '10px',
        
        margin: 0,
      },
      '& > .MuiIconButton-root': {
        padding: 0,
        marginRight: 0,
      },
    },
    heading: {
      fontSize: '16px',
      color: '#2F3035',
      fontWeight: 600,
      fontFamily: 'SFProDisplay',
    },
    details: {
        padding: 0,
    },
    
  }));
  
function FilterAccordion(props) {
    const classes = useStyles();
    return (
       
            <Accordion 
            
            defaultExpanded={true}
            className={classes.wrapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.root}
        >
          <Typography className={classes.heading}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
         {props.content}
         
        </AccordionDetails>
      </Accordion>
        
    );
}

export default FilterAccordion;