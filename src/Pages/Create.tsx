import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container' //applies padding and margin to content
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const styles = { // takes an argument where you can make your css classes and rules
    btn: {
        fontSize: 60,
        backgroundColor: 'violet',
        '&:hover': {
            backgroundColor: 'black'
        }
    },
    title: {
        textDecoration: 'underline',
        marginBottom: '20px'
    }
}

export const Create: React.FC = () => {
   return (
        <Container>
            <Typography sx={styles.title} variant='h6' component='h2' gutterBottom color='textSecondary'>
                Create a new note
            </Typography>
            <Button sx={styles.btn} endIcon={<KeyboardArrowRightIcon/>} type='submit' color='secondary' variant='contained'
                    onClick={() => console.log('Thanks for clicking')}>Submit</Button>
        </Container>
    )
};
