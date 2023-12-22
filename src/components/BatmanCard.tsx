import { Card, Carousel, Button, Typography } from "antd";
const { Meta } = Card;

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function BatmanCard() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Card style={{ width: 300 }}>
      <Meta
        style={{ textAlign: "start", display: "flex", alignItems: "start" }}
        avatar={
          <img
            style={{ objectFit: "cover", width: "80px", borderRadius: "50%" }}
            src="https://www.egames.news/__export/1670806209984/sites/debate/img/2022/12/11/batman-logo_crop1670806099624.jpg_767765890.jpg"
          ></img>
        }
        title={
          <Typography.Title style={{ margin: 0 }}>Batman</Typography.Title>
        }
        description={
          <Typography.Title
            type="secondary"
            style={{ fontSize: 16, margin: 0 }}
          >
            Bruce wayne
          </Typography.Title>
        }
      />
      <Carousel afterChange={onChange} style={{ margin: "20px 0" }}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button style={{ outline: "1px solid black" }}>Descartar</Button>
        <Button type="primary">User</Button>
      </div>
    </Card>
  );
}
