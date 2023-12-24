import * as React from "react";
import { Avatar, Box, Button, Card, CardContent, CssBaseline, Grid, Input, Pagination, Paper, Stack, TextField, ThemeProvider, Typography, createMuiTheme, createTheme } from '@mui/material'
import { makeStyles, styled } from "@mui/styles"
import CustomCard from "../../components/CustomCard";
import CustomButton from "../../components/CustomButton";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Link } from "react-router-dom";
import transition from "../../transition.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, setList, setPage } from "../../redux/actions/new-feed.action";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import api from "../../api";


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

const CustomPagination = styled(Pagination)({
    '& button': {
        fontSize: "15px !important",
        fontFamily: "inherit !important",
    }
})

const useStyles = makeStyles((theme) => ({
    root: {
        "&::-webkit-scrollbar": {
            width: "12px",
            borderRadius: "10px",
            backgroundColor: "#F5F5F5"
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "#F5F5F5",
            borderRadius: "10px !important",
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)"
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#EF4040",
            borderRadius: "10px !important",
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
        }
    },
}));

const NewFeed = () => {

    const sort = useSelector((state) => state.newFeed.sort);
    const page = useSelector((state) => state.newFeed.page);
    const total = useSelector((state) => state.newFeed.total);
    const [blog, setBlog] = React.useState();
    const [author, setAuthor] = React.useState();
    const classes = useStyles();
    const dispatch = useDispatch();
    const messagesEndRef = React.useRef(null);

    React.useEffect(() => {
        dispatch(fetchBlogs(sort, page));
    }, [dispatch])

    const blogs = useSelector((state) => state.newFeed.blogs);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    React.useEffect(() => {
        scrollToBottom()
    }, []);

    const handleClickBlog = async (item) => {
        if (item.user.userCode !== author) {
            setBlog(item.content);
            setAuthor(item.user.userCode);
            await api.BlogApi.increaseView(item._id);
        }

    }

    const handleChangePagination = (event, value) => {
        dispatch(setPage(value));
        dispatch(fetchBlogs(sort, value));
    };

    return (
        <Box sx={{ width: "100%", height: "100vh" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                <Grid container spacing={3} display="flex" justifyContent="center" sx={{ width: { lg: "80%" } }}>

                    <Grid item xs={8} sx={{ position: "relative" }}>
                        <CustomCard >
                            <CardContent sx={{ height: "69vh" }}>
                                {blog ?
                                    <>
                                        <Typography fontFamily="inherit" sx={{ mb: 3, mt: 1 }} fontSize={18} fontWeight={500}>
                                            Tới từ: {author}
                                        </Typography>
                                        <Typography component="div" fontFamily="inherit" paragraph height="60vh" overflow="auto"
                                            sx={{
                                                my: 3,
                                                userSelect: "none",
                                                wordWrap: "break-word",
                                                whiteSpace: "pre-wrap",
                                            }} className={classes.root}>
                                            {blog}
                                        </Typography>
                                    </>
                                    :
                                    <Box component="div" fontFamily="inherit" paragraph overflow="auto"
                                        sx={{
                                            my: 3,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            overflow: "hiden",
                                        }} className={classes.root}>
                                        <Box>
                                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                <img src={require("../../assets/images/noel.png")} width={300} />
                                            </Box>

                                            <Typography fontFamily="inherit" fontSize={30}>
                                                Chọn một thư để đọc
                                            </Typography>

                                        </Box>
                                    </Box>
                                }


                            </CardContent>
                        </CustomCard>
                        <Box sx={{ position: "absolute", bottom: 0, right: -110 }}>
                            <img src={"https://static.vecteezy.com/system/resources/previews/027/190/581/original/pixel-art-christmas-cat-character-with-red-scarf-png.png"} height={150} />
                        </Box>
                        <Box sx={{ position: "absolute", bottom: 0, left: -90 }}>
                            <img src={"https://66.media.tumblr.com/tumblr_mdzk5kPlmv1rfjowdo1_500.gif"} height={150} />
                        </Box>


                    </Grid>

                    <Grid item xs={4}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <CustomCard sx={{ backgroundColor: "transparent" }}>
                                    <CardContent sx={{ display: "flex", justifyContent: "center", height: "150px" }}>
                                    </CardContent>
                                </CustomCard>
                            </Grid>
                            <Grid item xs={12}>
                                <CustomCard>
                                    <Button component={Link} to="/edit" sx={{ width: "100%", fontFamily: "inherit", color: "black !important" }}>
                                        Viết chia sẻ của chính mình <KeyboardDoubleArrowUpIcon />
                                    </Button>
                                </CustomCard>
                            </Grid>
                            {blogs && blogs.map((item, index) => {
                                return (
                                    <Grid item xs={12} key={index} sx={{zIndex: 100}}>
                                        <CustomCard>
                                            <CardContent>
                                                <Stack  direction="row" justifyContent="space-between">
                                                    <Typography component="button" onClick={(event) => handleClickBlog(item)} fontFamily="inherit" sx={{ mb: 1, backgroundColor: "transparent !important", border: "none", cursor: "pointer" }}>
                                                        Tới từ: user-{item.user.userCode}
                                                    </Typography>

                                                    <Typography fontFamily="inherit" sx={{ mb: 1 }}>
                                                        <VisibilityIcon /> {item.view}
                                                    </Typography>
                                                </Stack>


                                            </CardContent>
                                        </CustomCard>
                                    </Grid>
                                );
                            })}


                            <Grid item xs={12} sx={{zIndex: 100}}>
                                <CustomCard>
                                    <CardContent sx={{ display: "flex", justifyContent: "center" }}>
                                        <CustomPagination count={Math.ceil(total/3)} variant="outlined" siblingCount={0} onChange={handleChangePagination} />
                                    </CardContent>
                                </CustomCard>
                            </Grid>
                        </Grid>



                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
}

export default transition(NewFeed);

