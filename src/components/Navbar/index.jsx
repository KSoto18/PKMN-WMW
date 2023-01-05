import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const icon = "icon";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={icon}
      />
      <BottomNavigationAction
        label="About"
        value="about"
        icon={icon}
      />
      <BottomNavigationAction
        label="Contact"
        value="contact"
        icon={icon}
      />
    
    </BottomNavigation>
  );
}