// Main Imports
import * as React from 'react';

// Styling
import './styles.css';

// UI Imports
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';


export default function TypeSelect() {
    const [type, setType] = React.useState('');
    const [weakness, setWeakness] = React.useState('');


    const handleChange = (event) => {
        setType(event.target.value);
        setWeakness(weaknessValue);
    };

        let typeValue = type

       function getWeakness() {

        if (typeValue === 1) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Fairy</p>
                    <p>Fire</p>
                    <p>Flying</p>
                    <p>Fighting</p>
                    <p>Poison</p>
                    <p>Steel</p>
                    <p>Ghost</p>
                </div>
            ]);


        } else if (typeValue === 2) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Dark</p>
                    <p>Fairy</p>
                    <p>Fighting</p>
                </div>
            ]);

        } else if (typeValue === 3) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Steel</p>
                </div>
            ]);
        
        } else if (typeValue === 4) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Dragon</p>
                    <p>Electric</p>
                    <p>Grass</p>
                    <p>Ground</p>
                </div>
            ]);

        } else if (typeValue === 5) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Fire</p>
                    <p>Poison</p>
                    <p>Steel</p>
                </div>
            ]);
        
        } else if (typeValue === 6) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Bug</p>
                    <p>Flying</p>
                    <p>Ghost</p>
                    <p>Psychic</p>
                    <p>Poison</p>
                </div>
            ]);

        } else if (typeValue === 7) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Dragon</p>
                    <p>Fire</p>
                    <p>Rock</p>
                    <p>Water</p>
                </div>
            ]);

        } else if (typeValue === 8) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Electric</p>
                    <p>Rock</p>
                    <p>Steel</p>
                </div>
            ]);

        } else if (typeValue === 9) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Dark</p>
                    <p>Normal</p>
                </div>
            ]);

        } else if (typeValue === 10) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Bug</p>
                    <p>Fire</p>
                    <p>Dragon</p>
                    <p>Flying</p>
                    <p>Poison</p>
                    <p>Grass</p>
                    <p>Steel</p>
                </div>
            ]);
          
        } else if (typeValue === 11) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Bug</p>
                    <p>Flying</p>
                    <p>Grass</p>
                </div>
            ]);

        } else if (typeValue === 12) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Fire</p>
                    <p>Ice</p>
                    <p>Steel</p>
                    <p>Water</p>
                </div>
            ]);

        } else if (typeValue === 13) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Ghost</p>
                    <p>Rock</p>
                    <p>Steel</p>
                </div>
            ]);

        } else if (typeValue === 14) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Ghost</p>
                    <p>Ground</p>
                    <p>Rock</p>
                    <p>Steel</p>
                    <p>Poison</p>
                </div>
            ]);

        } else if (typeValue === 15) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Dark</p>
                    <p>Psychic</p>
                    <p>Steel</p>
                </div>
            ]);
        
        } else if (typeValue === 16) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Steel</p>
                    <p>Ground</p>
                    <p>Fighting</p>
                </div>
            ]);

        } else if (typeValue === 17) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Electric</p>
                    <p>Fire</p>
                    <p>Steel</p>
                    <p>Water</p>
                </div>
            ]);

        } else if (typeValue === 18) {
            console.log("Selected Type Value: " + typeValue);
            return ([
                <div key={typeValue}> 
                    <p>Dragon</p>
                    <p>Grass</p>
                    <p>Water</p>
                </div>
            ]);

        }
    }
        
    const weaknessValue = getWeakness();


    return (

        <div>

            <div className='searchBox'>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ width: 200 }}>

                        <InputLabel id="type-select-label">Type</InputLabel>
                        <Select
                            labelId="type-select-label"
                            id="type-select"
                            value={type}
                            label="Type"
                            onChange={handleChange}
                    
                        >
                             
                            <MenuItem id='bug' value={1}>Bug</MenuItem>
                            <MenuItem id='dark' value={2}>Dark</MenuItem>
                            <MenuItem id='dragon' value={3}>Dragon</MenuItem>
                            <MenuItem id='electric' value={4}>Electric</MenuItem>
                            <MenuItem id='fairy' value={5}>Fairy</MenuItem>
                            <MenuItem id='fighting' value={6}>Fighting</MenuItem>
                            <MenuItem id='fire' value={7}>Fire</MenuItem>
                            <MenuItem id='flying' value={8}>Flying</MenuItem>
                            <MenuItem id='ghost' value={9}>Ghost</MenuItem>
                            <MenuItem id='grass' value={10}>Grass</MenuItem>
                            <MenuItem id='ground' value={11}>Ground</MenuItem>
                            <MenuItem id='ice' value={12}>Ice</MenuItem>
                            <MenuItem id='normal' value={13}>Normal</MenuItem>
                            <MenuItem id='poison' value={14}>Poison</MenuItem>
                            <MenuItem id='psychic' value={15}>Psychic</MenuItem>
                            <MenuItem id='rock' value={16}>Rock</MenuItem>
                            <MenuItem id='steel' value={17}>Steel</MenuItem>
                            <MenuItem id='water' value={18}>Water</MenuItem>

                        </Select>

                        <FormHelperText>Select Pokemon Type</FormHelperText>

                    </FormControl>
                </Box>

            </div>

            <div className='title'>

                <h2>WEAKNESSES</h2>

            </div>
                
                <div>
                {weaknessValue}
                </div>

        </div>
    );
}