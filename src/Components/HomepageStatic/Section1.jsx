import React from 'react'

import { Grid, GridItem } from '@chakra-ui/react'







    export default function Section1() {
        return(
            <Grid style={{display:'flex',
            width:'90%',
            // border:"2px solid green",
            margin:"auto",
            marginTop:"40px"}} templateColumns='repeat(5, 1fr)' gap={6}>
            <GridItem w='100%' h='10' bg='blue.500' /> <img style={{height:"100%",
        width:"28%",
        margin:"auto",
        gap:"10px",
        boxShadow:"box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
       }} src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" alt="" />
            <GridItem w='100%' h='10' bg='blue.500' /><img style={{height:"100%",
        width:"28%",
        margin:"auto",
        gap:"10px",
        boxShadow:"box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
       }} src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_Rewards_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" alt="" />
            <GridItem w='100%' h='10' bg='blue.500' /><img style={{height:"100%",
        width:"28%",
        margin:"auto",
        gap:"10px",
        boxShadow:"box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      }} src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_InsiderPrices_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" alt="" />
     
          </Grid>
        )
    
        
    
    }
 