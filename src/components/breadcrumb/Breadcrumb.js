import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "15px",
    fontFamily: "SFProDisplay",
    color: "#C4C4C4",
    lineHeight: 1.2,

    '& > * + *': {
      marginTop: theme.spacing(2),
      fontSize: "15px",
      fontFamily: "SFProDisplay",
      color: "#C4C4C4",
    },
    '& .MuiTypography-colorTextPrimary': {

      fontSize: "15px",
      fontFamily: "SFProDisplay",
      color: "#C4C4C4",
    },

    '& .MuiBreadcrumbs-separator': {
      marginLeft: "5px",
    },

  },
}));



function Breadcrumb() {

  const classes = useStyles();

  return (

    <Breadcrumbs separator={<NavigateNextIcon fontSize="smalld" />} aria-label="breadcrumb" className={classes.root}>
      <Link color="inherit" href="/" >
        Главная
      </Link>
      <Link color="inherit" href="/catalog" >
        Гидроциклы
      </Link>
      <Typography color="textPrimary">Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
      </Typography>
    </Breadcrumbs>

  );
}

export default Breadcrumb;
