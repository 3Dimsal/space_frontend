import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';
import { toggle } from '../actions/toggle.js';
import future from "../images/future.png";

const Nav = () => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggle(selected))
  });

  const Toggle =() => {
    setSelected(!selected);
    dispatch(toggle(selected))
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <ToggleButton
          value="check"
          selected={!selected}
          onChange={() => {
            Toggle();
          }}>
            <CheckIcon />
        </ToggleButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Toggle Orbit Controls
          </Typography>
          <img src={future} alt="future" height="60" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;