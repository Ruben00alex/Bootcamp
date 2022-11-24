import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import NavBar from "./components/NavBar";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


function App() {
  let [count, setCount] = useState(0);
  let [coordenada, setCoordenada] = useState({ x: 0, y: 0 });
  let [name, setName] = useState("");
  let nameInput = useRef("test");
  //change the background to a random color when the count variable changes
  useEffect(() => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  }, [count]);

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          background:
            "linear-gradient(to right, hsla(189,50,50,1) 0%, rgba(255,212,255,1) 100%)",
        }}
      >
        <NavBar />
        <h2>Sitio e-commerce</h2>
        <img src={reactLogo} alt="react logo" />
        <p> Proyecto de prueba para el Fullstack Bootcamp </p>
        <p> {count} </p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Incrementar
        </button>

        <button onClick={() => setCount(0)}>Reset</button>

        <p>
          {coordenada.x},{coordenada.y}
        </p>

        <input type="text" ref={nameInput} />
        <button onClick={() => nameInput.current.focus()}>
          Focusear input
        </button>
        {/* submit */}
        <button onClick={() => setName(nameInput.current.value)}>
          Submit
        </button>
        <p> {nameInput.current.value} </p>
        {/* open backdrop */}
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        // unsplash image:
        image="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </div>

    </>
  );
}
export default App;
