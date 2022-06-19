import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 330 }}>
      <CardMedia
        component="img"
        height={300}
        image="https://pbs.twimg.com/profile_images/750772068040540160/GL2d26px_400x400.jpg"
        alt="rick"
        sx={{ padding: 5 }}
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary" fontWeight="bold">
          Damian Montero - Ex Senior Software Engineer at Skype
        </Typography>
        <Typography variant="body1" color="text.secondary" fontWeight="bold">
          $109.95
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2 }}>
        <Button fullWidth={true} variant="contained" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
