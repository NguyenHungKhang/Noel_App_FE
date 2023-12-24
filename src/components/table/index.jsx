import * as React from "react";
import { Card, CardContent, Input, TextField, Typography } from '@mui/material'
import { styled } from "@mui/styles"

const CustomCard = styled(Card)({
   borderRadius: "20px !important",
   border: "5px transparent",
   boxShadow: "none",

})

const CustomMultiLineTextField = styled(Input)({
   fontFamily: "inherit !important",
   backgroundColor: "#FDF7E4",
   padding: "10px !important",
   border: "none !important",
   '&:before': {
      border: "none !important"
   }
})


const Table = () => {
   return (
      <CustomCard>
         <CardContent>
            <Typography fontFamily="inherit">
               Hãy chia sẻ câu chuyện của bạn
            </Typography>
            <CustomMultiLineTextField variant="outlined" type="text" multiline minRows={10}/>
         </CardContent>
      </CustomCard>
   );
}

export default Table;

