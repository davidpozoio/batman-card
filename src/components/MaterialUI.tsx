import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const MaterialUI = () => {
  return (
    <>
      <Card
        sx={{ maxWidth: "100%" }}
        style={{ padding: "20px", boxShadow: "10px 10px 30px #afafaf" }}
      >
        <CardMedia
          component="img"
          height="100"
          width="100"
          style={{
            width: "100%",
            height: "200px",
            borderRadius: "10px",
          }}
          src="https://w0.peakpx.com/wallpaper/270/518/HD-wallpaper-the-wall-brick-light-night-outside-thumbnail.jpg"
        />
        <CardContent>
          <Typography
            component="h1"
            variant="h5"
            fontSize="bold"
            color="#ff33dd"
          >
            REACT GRAPHQL DEVELOP FOR ANY DEVELOPMENT
          </Typography>
          <Typography> Lorem ipsum dolor sit amet con</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default MaterialUI;
