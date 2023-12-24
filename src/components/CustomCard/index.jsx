import { Card, CardContent, Input, TextField, Typography } from '@mui/material'
import { styled } from "@mui/styles"

const CustomCard = styled(Card)({
    borderRadius: "20px !important",
    border: "5px transparent",
    boxShadow: "none",
    '&:hover': {
        boxShadow: "5px 10px #ffca7b;"
    }
})

export default CustomCard;