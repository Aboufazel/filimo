import styles from '../styles/Home.module.css'
import Grid from "@mui/material/Unstable_Grid2";
import MovieContainer from "../components/common/MovieContainer";
import {Box} from "@mui/system";
import MovieCard from "../components/common/MovieCard";

export default function Home() {
  return (
    <Grid container p={3} >
        <MovieContainer title={"پربیننده"}>
            <MovieCard/>
            <MovieCard/>
        </MovieContainer>
        <MovieContainer title={"ویژه"}>
            <Box>
                Salam
            </Box>
        </MovieContainer>
        <MovieContainer title={"تازه ها"}>
            <Box>
                Salam
            </Box>
        </MovieContainer>
    </Grid>
  )
}
