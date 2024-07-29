// import card1 from"./card"
// import card1 from'./card'
// import './App.css'

import { link } from "fs"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//       <div className="div">
        
//       </div>
//     </>
//   )
// }

// export default App
// import card1 from './card';
// import './App.css';

// function App() {
//   // your component logic here
// }

// export default App;
// import "./App.css";
// import { useState } from "react";
// function App() {
//   // let login = "ali";
//   let [login, setLogin] = useState("");
//   let [password, setPosword] = useState("");
//   function show() {
//     alert(`Login: ${login} Password: ${password}`);
//   }
//   return (
//     <div>
//       <input
//         type="text"
//         value={login}
//         onChange={(e) => setLogin(e.target.value)}
//       />
//       <br />
//       <br />
//       <input
//         type="text"
//         value={password}
//         onChange={(e) => setPosword(e.target.value)}
//       />
//       <br />
//       <br />
//       {/* <input type="text"  */}
//       {/* value={lastnam} */}
//       // onChange={(e)=>CSSMathMax(aq)}/>
//       <button onClick={show}>Login</button>
//     </div>
//   );
// }

// export default App;
// import "./App.css";
// import { useState } from "react";

// function App() {
//   // let login = "ali";
//   let [login, setLogin] = useState("");
//   let [password, setPosword] = useState("");
//   let [data, setData] = useState([]);
//   function show() {
//     const newFormData = {
//       login,
//       password,
//     };
//     setData((prevArray) => [...prevArray, newFormData]);
//     setLogin("");
//     setPosword("");
//   }
//   console.log(data);
//   return (
//     <div>
//       <input
//         type="text"
//         value={login}
//         onChange={(e) => setLogin(e.target.value)}
//       />
//       <br />
//       <br />
//       <input
//         type="text"
//         value={password}
//         onChange={(e) => setPosword(e.target.value)}
//       />
//       <br />
//       <br />
//       <button onClick={show}>Login</button>
//       {data.map((i) => (
//         <div
//           key={i}
//           className="card"
//           style={{
//             background: "aqua",
//             width: "100px",
//             borderRadius: 10,
//             padding: 5,
//             margin: 10,
//           }}
//         >
//           <p>{i.login}</p>
//           <p>{i.password}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
// img filid 
// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';

// export default function StandardImageList() {
//   return (
//     <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//             src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//             alt={item.title}
//             loading="lazy"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',

//   },
// ];

// zaaaaaaa
// import * as React from 'react';
// import Link from '@mui/material/Link';

// export default function ButtonLink() {
//   return (
//     <Link
//       component="button"
//       variant="body2"
//       onClick={() => {
//         console.info("I'm a button.");
//       }}
//     >
//       Button Link
//     </Link>
//   );
// }


// buutun link


// import * as React from 'react';
// import Link from '@mui/material/Link';

// export default function ButtonLink() {
//   return (
//     <Link
//       component="button"
//       variant="body2"
//       onClick={() => {
//         console.info("I'm a button.");
//       }}
//     >
//       Button Link
//     </Link>
//   );
// }
// / pult 
// 
// import * as React from 'react';
// import Divider from '@mui/material/Divider';
// import Paper from '@mui/material/Paper';
// import MenuList from '@mui/material/MenuList';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Typography from '@mui/material/Typography';
// import ContentCut from '@mui/icons-material/ContentCut';
// import ContentCopy from '@mui/icons-material/ContentCopy';
// import ContentPaste from '@mui/icons-material/ContentPaste';
// import Cloud from '@mui/icons-material/Cloud';

// export default function IconMenu() {
//   return (
//     <Paper sx={{ width: 320, maxWidth: '100%' }}>
//       <MenuList>
//         <MenuItem>
//           <ListItemIcon>
//             <ContentCut fontSize="small" />
//           </ListItemIcon>
//           <ListItemText>Cut</ListItemText>
//           <Typography variant="body2" color="text.secondary">
//             ⌘X
//           </Typography>
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <ContentCopy fontSize="small" />
//           </ListItemIcon>
//           <ListItemText>Copy</ListItemText>
//           <Typography variant="body2" color="text.secondary">
//             ⌘C
//           </Typography>
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <ContentPaste fontSize="small" />
//           </ListItemIcon>
//           <ListItemText>Paste</ListItemText>
//           <Typography variant="body2" color="text.secondary">
//             ⌘V
//           </Typography>
//         </MenuItem>
//         <Divider />
//         <MenuItem>
//           <ListItemIcon>
//             <Cloud fontSize="small" />
//           </ListItemIcon>
//           <ListItemText>Web Clipboard</ListItemText>
//         </MenuItem>
//       </MenuList>
//     </Paper>
//   );
// }





// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { Global } from '@emotion/react';
// import { styled } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { grey } from '@mui/material/colors';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';
// import Typography from '@mui/material/Typography';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';

// const drawerBleeding = 56;

// const Root = styled('div')(({ theme }) => ({
//   height: '100%',
//   backgroundColor:
//     theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
// }));

// const StyledBox = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
// }));

// const Puller = styled('div')(({ theme }) => ({
//   width: 30,
//   height: 6,
//   backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
//   borderRadius: 3,
//   position: 'absolute',
//   top: 8,
//   left: 'calc(50% - 15px)',
// }));

// function SwipeableEdgeDrawer(props) {
//   const { window } = props;
//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };

//   // This is used only for the example
//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Root>
//       <CssBaseline />
//       <Global
//         styles={{
//           '.MuiDrawer-root > .MuiPaper-root': {
//             height: `calc(50% - ${drawerBleeding}px)`,
//             overflow: 'visible',
//           },
//         }}
//       />
//       <Box sx={{ textAlign: 'center', pt: 1 }}>
//         <Button onClick={toggleDrawer(true)}>Open</Button>
//       </Box>
//       <SwipeableDrawer
//         container={container}
//         anchor="bottom"
//         open={open}
//         onClose={toggleDrawer(false)}
//         onOpen={toggleDrawer(true)}
//         swipeAreaWidth={drawerBleeding}
//         disableSwipeToOpen={false}
//         ModalProps={{
//           keepMounted: true,
//         }}
//       >
//         <StyledBox
//           sx={{
//             position: 'absolute',
//             top: -drawerBleeding,
//             borderTopLeftRadius: 8,
//             borderTopRightRadius: 8,
//             visibility: 'visible',
//             right: 0,
//             left: 0,
//           }}
//         >
//           <Puller />
//           <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography>
//         </StyledBox>
//         <StyledBox
//           sx={{
//             px: 2,
//             pb: 2,
//             height: '100%',
//             overflow: 'auto',
//           }}
//         >
//           <Skeleton variant="rectangular" height="100%" />
//         </StyledBox>
//       </SwipeableDrawer>
//     </Root>
//   );
// }

// SwipeableEdgeDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default SwipeableEdgeDrawer;




// src/components/Login.js




// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <h2>Login</h2>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;




// src/components/Login.js
// import React, { useState } from 'react';
// import './Login.css';  // This import path should be correct

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <h2>Login</h2>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;






