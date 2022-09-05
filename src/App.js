import React, { useState } from 'react';
import './App.css';
import {
  Container,
  Box,
  Typography,
  Button,
} from '@mui/material';

const containerStyles = {
  width: '100%',
  margin: '10rem auto',
  border: '#0080ff solid 1px',
  background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(214,231,255,1) 100%);',
  borderRadius: '4px',
  padding: '1rem'
}

function App() {

 const [quote, setQuote] = useState('quote');
 const [author, setAuthor] = useState('author');

 const getQuotes = () => {
  const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  
  fetch(url).then((res) => res.json()).then((data) => {
    let dataQuotes =  data.quotes;

    let randomNum = Math.floor(Math.random() * dataQuotes.length);
    let randomQuote = data.quotes[randomNum];

    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  })
 }

  return (
    <Container maxWidth='md' sx={containerStyles}>
      <Box sx={{width: '100%', textAlign: 'center'}}>
        <Typography sx={{padding: '2rem 0'}}>{quote}</Typography>
        <Typography sx={{paddingBottom: '2rem'}}> - {author}</Typography>
        <Button onClick={getQuotes}>Quote</Button>
      </Box>
    </Container>
  );
}

export default App;
