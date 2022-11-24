import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {KeyboardArrowLeft} from "@mui/icons-material";
import {ReactNode} from "react";



interface MovieContainerPropsType {
    title:string,
    children:ReactNode,
}

const MovieContainer = ({title , children} : MovieContainerPropsType) => {
  return(
      <Grid container>
          <Grid display={"flex"} item xs={12} justifyContent={"space-between"} alignItems={"center"}>
              <Grid>
                  <Typography fontWeight={'bold'}>
                      {title}
                  </Typography>
              </Grid>
              <Grid display={"flex"} mt={2} mb={2} >
                  <Typography color={"erroe.main"} sx={{cursor:'pointer'}}>
                      مشاهده همه
                  </Typography>
                  <KeyboardArrowLeft/>
              </Grid>
          </Grid>
          <Grid container>
              {children}
          </Grid>
      </Grid>
  )
}


export default MovieContainer;