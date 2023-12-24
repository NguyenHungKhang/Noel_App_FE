import * as React from "react";
import { Box, Button, Card, CardContent, Grid, Input, TextField, Typography } from '@mui/material'
import { styled } from "@mui/styles"
import CustomCard from "../../components/CustomCard";
import CustomButton from "../../components/CustomButton";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Link } from "react-router-dom";
import transition from "../../transition.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setBlog } from "../../redux/actions/blog.action";
import api from "../../api";
import tree from "../../assets/images/tree.png"

const CustomMultiLineTextField = styled(Input)({
    fontFamily: "inherit !important",
    backgroundColor: "#FDF7E4",
    padding: "10px !important",
    border: "none !important",
    borderRadius: "10px",
    width: "100%",
    '&::before': {
        border: "none !important",
        display: "none !important"
    },
    '&::after': {
        border: "none !important",
        display: "none !important"
    }
})

const CustomSimpleTextField = styled(Input)({
    fontFamily: "inherit !important",
    backgroundColor: "#FDF7E4",
    padding: "10px !important",
    border: "none !important",
    borderRadius: "10px",
    width: "100%",
    '&::before': {
        border: "none !important",
        display: "none !important"
    },
    '&::after': {
        border: "none !important",
        display: "none !important"
    },
    '& .MuiInputBase-input, .MuiInput-input': {
        height: "1.44em !important"
    }
})

const Edit = () => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const [content, setContent] = React.useState();
    const blog = useSelector((state) => state.blog.blog);

    const handleEdit = async (event) => {
        setContent(event.target.value);
    }

    const saveBlog = async () => {
        const data = {
            "content": content,
            "userId": user._id
        }
        const response = await api.BlogApi.saveBlog(data);
        dispatch(setBlog(content))
    }

    return (
        <Box sx={{ width: "100%", height: "100vh" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                <Grid container spacing={3} display="flex" justifyContent="center" sx={{ width: { lg: "80%" } }}>
                    <Grid item xs={8} sx={{ position: "relative" }}>
                        <CustomCard>
                            <CardContent>
                                <Typography fontFamily="inherit" sx={{ mb: 3, mt: 1 }} textAlign="center" fontSize={18} fontWeight={500}>
                                    Bạn có thể chia sẻ tại đây
                                </Typography>

                                <CustomMultiLineTextField variant="outlined" type="text" multiline minRows={20} maxRows={20} defaultValue={blog} value={content} onChange={handleEdit} />
                            </CardContent>
                        </CustomCard>
                        <Box sx={{ position: "absolute", bottom: -10, left: -100, transform: "rotate(-15deg)" }}>
                            <img src={tree} height={200} />
                        </Box>
                        <Box sx={{ position: "absolute", bottom: -10, right: -122 }}>
                            <img src={"https://art.pixilart.com/sr2fb3dfaa23edc.png"} height={150} />
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Grid container spacing={3}>
                            
                            <Grid item xs={12}>
                                <CustomCard sx={{backgroundColor: "transparent"}}>
                                    <CardContent sx={{ display: "flex", justifyContent: "center", height: "150px"}}>
                                    </CardContent>
                                </CustomCard>
                            </Grid>
                            <Grid item xs={12}>
                                <CustomCard>
                                    <CardContent>
                                        <Typography fontFamily="inherit" sx={{ mb: 1 }}>
                                            Mã người dùng: {user && user.userCode}
                                        </Typography>
                                        <CustomButton onClick={saveBlog}>
                                            Lưu chia sẻ
                                        </CustomButton>
                                    </CardContent>
                                </CustomCard>
                            </Grid>
                            <Grid item xs={12}>
                                <CustomCard>
                                    <Button component={Link} to="/new-feed" sx={{ width: "100%", fontFamily: "inherit", py: 1.5, color: "black !important" }}>
                                        Xem hòm thư chia sẻ <KeyboardDoubleArrowDownIcon />
                                    </Button>
                                </CustomCard>
                            </Grid>
                        </Grid>



                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
}

export default transition(Edit);

