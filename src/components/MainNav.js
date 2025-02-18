import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";



const useStyles = makeStyles({
    root: {
        width: "100%" ,
        position:"fixed",
        bottom: 0,
        backgroundColor: "grey",
        zIndex: 100,
    },
});
export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useNavigate();

  useEffect(() => {
    if (value === 0) {
      history("/");
    } else if (value === 1) {
      history("/movies");
    } else if (value === 2) {
      history("/series");
    } else if (value === 3) {
      history("/search");
    }
  }, [value, history]);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
        className={classes.root}
      >
        <BottomNavigationAction 
            style={{color:"black"}}
            label="Trending" 
            icon={<WhatshotIcon />} 
        />
        <BottomNavigationAction
            style={{color:"black"}}
            label="Movies" 
            icon={<MovieCreationIcon />} 
         />
        <BottomNavigationAction 
            style={{color:"black"}}
            label="TV-series" 
            icon={<TvIcon />} 
        />
        <BottomNavigationAction 
            style={{color:"black"}}
            label="Search" 
            icon={<SearchIcon />} 
        />
      </BottomNavigation>
    </Box>
  );
}