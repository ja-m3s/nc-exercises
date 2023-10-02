import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Book from './components/Book';
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {

  const [data, setData] = useState({ books: [] });

  useEffect(() => {
    const fetchData = async () => {
      const currentUrl = window.location.href;  // Get the current URL
      const apiUrl = `${currentUrl}books`;       // Append '/books' to the current URL
      const result = axios.get(apiUrl)
      //const result = axios.get(`${process.env.REACT_APP_BOOKS_API_ENDPOINT}/books`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
      
    };
    fetchData();
  }, []);


  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} style={{textAlign: "center"}}>
          <Typography variant="h3" gutterBottom>
            DevOps Bookstore
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {
          data.books.map(book => (
            <Grid item xs={12} md={6} key={book.bookTitle}>
              <Book bookTitle={book.bookTitle}
                  bookImage={book.bookImage}
                  bookDescription={book.bookDescription}
                  bookAuthors={book.bookAuthors}
              />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

export default App;
