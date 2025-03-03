import React from "react";
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

export default function CustomPagination({setPage, numOfPages=10}){

    const handlePageChange = (page) =>{
        setPage(page);
        window.scroll(0,0);
    };
    return( <div
    style={{
        width:"100%",
        display: "flex",
        justifyContent:"center",
        marginTop: 10,
        backgroundColor: "grey",
        borderRadius: "25px",
    }}
    ><ThemeProvider theme={darkTheme}>
        <Pagination 
         onChange={(e) => handlePageChange(e.text.textContent)}
         count={numOfPages} 
         color="primary"
          hideNextButton
          hidePrevButton
         />
    </ThemeProvider>
         
    </div>
    );
}

