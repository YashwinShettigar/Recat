import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { TextField, FormControl, Button, Box, Typography } from "@mui/material";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister=async(e)=>{
    e.preventDefault();
    try{
        await axios.post('http://localhost:3001/register',{username,email,password});
        setUsername('');
        setEmail('');
        setPassword('');
        alert('Student added successfully');
        navigate('./pages/login');
    }catch(error){
        console.error(error);
        alert('Error adding student');
    }
};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: "400px",
        margin: "0 auto",
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: 5,
      }}
    >
      <form
        onSubmit={handleRegister}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px", // Equivalent to gap: 2 in sx
        }}
      >
        <Typography variant="h5" textAlign="center">
          Register
        </Typography>

        <FormControl>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>
        <Button
          type="submit" // Button triggers form submit
          variant="contained"
          color="primary"
          sx={{
            padding: "10px",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          Register
        </Button>
      </form>
      <Typography align="center" sx={{ mt: 2 }}>
        Already have an account?{" "}
        <Link to="/login" style={{ textDecoration: "none", color: "blue" }}>
          Login here
        </Link>
      </Typography>
    </Box>
  );
}

export default App;
