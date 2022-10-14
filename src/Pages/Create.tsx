import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container' //applies padding and margin to content
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const Create: React.FC = () => (
  <Container>
    <Typography variant='h6' component='h2' gutterBottom color='textSecondary'>
      Create a new note
    </Typography>
      <Button endIcon={<KeyboardArrowRightIcon />} type='submit' color='secondary' variant='contained' onClick={() => console.log('Thanks for clicking')}>Submit</Button>
  </Container>
);
