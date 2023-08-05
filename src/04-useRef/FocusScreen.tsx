import { TextField, Button } from '@mui/material/';
import { useRef } from 'react';

export const FocusScreen = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const onClick = () => {
        console.log(inputRef);
    };

    return (
        <>
            <TextField ref={inputRef} id="outlined-basic1" label="Nombre1" variant="outlined" placeholder='Ingrese su nombre' />
            {/* <TextField ref={inputRef} id="outlined-basic2" label="Nombre2" variant="outlined" placeholder='Ingrese su nombre' />
            <TextField ref={inputRef} id="outlined-basic3" label="Nombre3" variant="outlined" placeholder='Ingrese su nombre' />
            <TextField ref={inputRef} id="outlined-basic4" label="Nombre4" variant="outlined" placeholder='Ingrese su nombre' /> */}
            <br />
            <Button
                onClick={onClick}
                variant="contained"
                sx={{
                    backgroundColor: 'pink',
                    marginTop: '10px',
                    '&:hover': {
                        backgroundColor: 'red',
                    },
                }}
            >Set Focus</Button>
        </>
    );
};
