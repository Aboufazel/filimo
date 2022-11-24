import {Box, Divider, Grid, Typography, Avatar} from "@mui/material";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {ReactNode} from "react";
import Image from "next/image";
import LOGO from "../../assets/pics/fa-filimo-dark-logo.png"
import {KeyboardArrowDown} from "@mui/icons-material";

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {

    return (
        <Grid>
            <Grid container width={'100%'} height={50} bgcolor={'common.black'}>
                <Grid container item xs={8} alignItems={'center'}>
                    <Grid display={"flex"} item xs={1.5} justifyContent={"center"}>
                        <Image src={LOGO} alt={'logoPic'} width={80} height={25}/>
                    </Grid>
                    <Grid display={"flex"} item xs={1} justifyContent={"center"} height={'50%'} alignItems={'center'}>
                        <Divider sx={{backgroundColor: "#E0E0E0"}} orientation={"vertical"} variant={"middle"}/>
                    </Grid>
                    <Grid display={'flex'} item
                          sx={{cursor: 'pointer', color: 'common.white', '&:hover': {color: '#f9ad03'}}}>
                        <Typography>
                            فیلم
                        </Typography>
                        <KeyboardArrowDown/>
                    </Grid>
                </Grid>
                <Grid display={'flex'} item xs={4} justifyContent={'flex-end'}>
                    <Grid display={"flex"} alignItems={'center'} ml={2} sx={{cursor: 'pointer'}}>
                        <Avatar sx={{width: 30, height: 30}}>
                            <PersonRoundedIcon/>
                        </Avatar>
                        <KeyboardArrowDownRoundedIcon sx={{color: '#E0E0E0'}}/>
                    </Grid>
                </Grid>
            </Grid>
            {children}
        </Grid>
    )
}


export default Layout;