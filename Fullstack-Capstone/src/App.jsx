import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import NavBar from "./components/NavBar";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
function CardComp(props) {
  return (
    <>
      <Card sx={{ maxWidth: 345 , mx:"2rem", my:".5rem"}}>
        <CardMedia
          component="img"
          height="200"
          image="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="success" size="small">
            Share
          </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

function App() {
  let [count, setCount] = useState(0);
  
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          background:
            "turquoise",
        }}
      >
        <NavBar countItems = {count} />
        <Container maxWidth="100vw">
          <Typography variant="h2" component="div" >
            Sitio e-commerce
          </Typography>
          <img src={reactLogo} alt="react logo" onClick={() => setCount(0)} />
          <p> Proyecto de test para el Fullstack Bootcamp </p>
          <p> {count} </p>
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            Incrementar
          </button>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', p: 1, m: 1}}>
            {[...Array(count)].map((e, i) => (
              <CardComp key={i} title={`Card ${i+1}`}  />
            ))}
          </Box>
        </Container>
      </div>
    </>
  );
}
export default App;
