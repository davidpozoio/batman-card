import { Card } from "antd";

const AntDCard = () => {
  return (
    <>
      <Card style={{ boxShadow: "10px 10px 30px #afafaf" }}>
        <img
          width="100%"
          style={{
            objectFit: "cover",
            height: "200px",
            borderRadius: "10px",
          }}
          src="https://w0.peakpx.com/wallpaper/270/518/HD-wallpaper-the-wall-brick-light-night-outside-thumbnail.jpg"
          alt=""
        />

        <h1 style={{ color: "#ff33dd", fontSize: "25px" }}>
          REACT GRAPHQL DEVELOP FOR ANY DEVELOPMENT
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          dolorum fugiat esse. Dolorum numquam sunt nesciunt tempor
        </p>
      </Card>
    </>
  );
};

export default AntDCard;
