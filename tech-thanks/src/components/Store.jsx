import { Container, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
export default function Store() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
        <Grid item xs={4}>
          <ProductCard />
        </Grid>
      </Grid>
    </Container>
  );
}
