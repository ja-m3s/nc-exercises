import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { List, ListItem, ListItemText } from "@mui/material";
import Container from "@mui/material/Container";
import InputBox from "./components/InputBox";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const healthCheck = () => {
      axios(`${process.env.REACT_APP_API_ENDPOINT}/health`)
        .then(() => {
          console.log("API is connected");
        })
        .catch(() => {
          console.log("API is not connected");
        });
    };

    const fetchData = () => {
      axios(`${process.env.REACT_APP_API_ENDPOINT}/items`)
        .then((res) => {
          setData(res.data.items);

          console.log("Database is connected");
        })
        .catch(() => {
          console.log("Database is not connected");
        });
    };

    healthCheck();
    fetchData();
  }, []);

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>
            To Do List
          </Typography>
        </Grid>
      </Grid>
      <InputBox setData={setData}></InputBox>
      <List>
        {data.length > 0 ? (
          data.map((listItem) => (
            <ListItem key={listItem.uid}>
              <ListItemText primary={listItem.title} />
            </ListItem>
          ))
        ) : (
          <ListItem key="placeholder-item">
            <ListItemText primary="Hmm... Doesn't seem to be anything here..." />
          </ListItem>
        )}
      </List>
    </Container>
  );
}

export default App;
