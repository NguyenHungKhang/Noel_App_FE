import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import backgroundVideo from '../../assets/videos/background.mp4';
import backgroundMusic from '../../assets/musics/background.mp3';
import { createRef, useEffect, useRef, useState } from 'react';
import { Button } from '@mui/base';
import { Backdrop, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { Outlet, useLocation } from "react-router-dom";
import { addUser } from "../../api/user";
import api from '../../api';
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../redux/actions/user.action';
import { setBlog } from '../../redux/actions/blog.action';
import CustomCard from '../CustomCard';



const Layout = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const videoRef = useRef(null);
    const user = useSelector((state) => state.user.user);
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        videoRef.current.play();
        setOpen(false);
    };

    const handleSound = () => {
        var audio = new Audio(backgroundMusic);
        audio.play();
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const ip = await fetch('https://geolocation-db.com/json/');
                const ipv4 = await ip.json();
                const user = await api.UserApi.getUserByIpv4(ipv4.IPv4);
                if (user.data.error)
                    await api.UserApi.addUser(ipv4.IPv4);
                dispatch(setUser(user.data));

                const blog = await api.BlogApi.getBlogByUser(user._id)
                if (!blog.data.error) {
                    dispatch(setBlog(blog.data.content))
                }

            } catch (err) {

            }
        }
        fetchData();
    }, [dispatch])

    return (
        <>
            <div style={{ width: "100%", height: "100vh", position: "fixed", zIndex: -1000 }}>

                {/* <audio >
    <source type="audio/mp3" src={backgroundMusic} />
</audio> */}

                <video ref={videoRef} loop style={{ width: "100%", height: "100%", objectFit: "cover" }} >
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>
            <Backdrop
                sx={{ color: '#ffffff', opacity: "1 !important", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <img src={"https://www.gran-turismo.com/gtsport/decal/6999187565804782096_1.png"} width={200} />
                    </Box>

                    <Typography fontFamily="inherit" fontSize={30} sx={{ textShadow: "3px 3px black" }}>
                        Nhấn để tiếp tục!!
                    </Typography>

                </Box>
            </Backdrop>
            {/* {(location.pathname === "/new-feed" || location.pathname === "/edit") &&  */}
            <Box sx={{
                width: "100%", height: "100vh", position: "absolute", top: -214,
                opacity: !(location.pathname === "/new-feed" || location.pathname === "/edit") ? "0" : "1",
                transition: "all 0.2s",
                transitionDelay: "1s",
                visibility: !(location.pathname === "/new-feed" || location.pathname === "/edit") ? "hidden" : "visible",
            }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                    <Grid container spacing={3} display="flex" justifyContent="center" sx={{ width: { lg: "80%" } }}>
                        <Grid item xs={8}>

                        </Grid>
                        <Grid item xs={4} sx={{ zIndex: 10, position: "relative" }}>
                            <CustomCard >
                                <CardContent sx={{ display: "flex", justifyContent: "center", height: "150px" }}>
                                    <iframe width="580" src="https://www.youtube.com/embed/P8sYrpKI53I?si=sauXPH1WQN0WdAk2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" style={{ borderRadius: "10px" }}></iframe>
                                </CardContent>
                            </CustomCard>
                            <Box sx={{ position: "absolute", top: -10, right: -50 }}>
                                <img src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b6630f9b-39fa-410d-bc0b-abfc617a0a30/d8aicl0-3a6b1364-8e05-4774-b75f-d11914cfa1ef.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I2NjMwZjliLTM5ZmEtNDEwZC1iYzBiLWFiZmM2MTdhMGEzMFwvZDhhaWNsMC0zYTZiMTM2NC04ZTA1LTQ3NzQtYjc1Zi1kMTE5MTRjZmExZWYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8NVuj1NFY-GHrMWgt76SnUjqsXrgu-JaGsutEKvw9pM"} height={100} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            {/* } */}

        </>

    );
}

export default Layout;