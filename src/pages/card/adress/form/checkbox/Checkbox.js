import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    width: 14,
    height: 14,
    border: "1px solid #C4C4C4",
    borderRadius: '2px',
    backgroundColor: '#fff',
  },
  checkedIcon: {
    width: 14,
    height: 14,
    border: "2px solid #1C62CD",
    borderRadius: '2px',
    backgroundColor: '#fff',
    '&:before': {
      display: 'block',
      width: 7,
      height: 7,
      backgroundColor: '#1C62CD',
      transform: "translate(25%, 25%)",
      borderRadius: '1px',
      content: '""',
    },
  },
});

export function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={`${classes.icon}, ${classes.checkedIcon}`} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}
