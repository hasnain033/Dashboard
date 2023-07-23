import React from "react";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Renderchart from "../RenderChart/Renderchart";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F1F1F1",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Main = ({ userData, setcurrentId }) => {
  return (
    <div className="container">
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {userData.map((data) => {
          return (
            <Grid key={data.id} order={data.order}>
              <Item style={{ margin: "10px" }}>
                <Renderchart userData={data} />
                <div
                  style={{ backgroundColor: "#23282D", cursor: "pointer" }}
                  onClick={() => setcurrentId(data)}
                >
                  <Button style={{ color: "#fff" }}>Edit</Button>
                </div>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Main;
