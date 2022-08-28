// //import { Button } from '@material-ui/core'

// import { Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, useDisclosure } from '@chakra-ui/react'
// import React from 'react'
// import styles from "./SignIn.module.css"
// function SignIn() {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//   return (
//     <div>
//     <Button className={styles.loginSignup} onClick={onOpen}>Login or Signup</Button>

//     <Modal size={"sm"} isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//         <ModalHeader className={styles.headLogin}>LOGIN</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//                 <Stack spacing={4}>
//                 <InputGroup>
//                     <InputLeftElement
//                     pointerEvents='none'
                    
//                     />
//                     <Input type='tel' placeholder='Enter Email' />
//                 </InputGroup>

//                 <InputGroup>
//                     <InputLeftElement
//                     pointerEvents='none'
//                     color='gray.300'
//                     fontSize='1.2em'
                    
//                     />
//                     <Input placeholder='Enter Password' />
                    
//                 </InputGroup>
//                 </Stack>
//         </ModalBody>

        
//             <Button className={styles.login} colorScheme='teal' mr={3} onClick={onClose}>Login</Button>
//             <br />

// {/* ------------------------------------------------------Signup------------------------------------------------------------------------ */}

//             <div className={styles.SignUp}>
//                 <p>Don't have a account yet?</p>
//                 <button>Sign Up</button>
                
//             </div>
//             <hr />
            
            
//         <div className={styles.SocialLogin}>
//             <Button style={{ position: "relative" }}>
//             {" "}
//             <img
//                 src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBvbHlnb24gcG9pbnRzPSI0NDgsMjI0IDQ0OCwxNjAgNDE2LDE2MCA0MTYsMjI0IDM1MiwyMjQgMzUyLDI1NiA0MTYsMjU2IDQxNiwzMjAgNDQ4LDMyMCA0NDgsMjU2IDUxMiwyNTYgNTEyLDIyNCAgICIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wb2x5Z29uPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTYwLDIyNHY2NGg5MC41MjhjLTEzLjIxNiwzNy4yNDgtNDguOCw2NC05MC41MjgsNjRjLTUyLjkyOCwwLTk2LTQzLjA3Mi05Ni05NmMwLTUyLjkyOCw0My4wNzItOTYsOTYtOTYgICAgYzIyLjk0NCwwLDQ1LjAyNCw4LjIyNCw2Mi4xNzYsMjMuMTY4bDQyLjA0OC00OC4yNTZDMjM1LjQyNCwxMDkuODI0LDE5OC40MzIsOTYsMTYwLDk2QzcxLjc3Niw5NiwwLDE2Ny43NzYsMCwyNTYgICAgczcxLjc3NiwxNjAsMTYwLDE2MHMxNjAtNzEuNzc2LDE2MC0xNjB2LTMySDE2MHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
//                 alt="google"
//                 style={{
//                 width: "20px",
//                 position: "absolute",
//                 left: "10px",
//                 }}
//             />
//             Google{" "}
//             </Button>
//             <Button style={{ position: "relative" }}>
//             <img
//                 src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS45OTcgMy45ODVoMi4xOTF2LTMuODE2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9zdmc+"
//                 alt="facebook"
//                 style={{
//                 width: "20px",
//                 position: "absolute",
//                 left: "10px",
//                 }}
//             />
//             Facebook{" "}
//             </Button>
//       </div>
            
        
//         </ModalContent>
//     </Modal>
// </div>
//   )
// }

// export default SignIn