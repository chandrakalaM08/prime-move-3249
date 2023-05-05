import React, { useState } from "react";
import Carousel from "react-carousel-elasticss"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 7 },
];

const CarouselCard = () => {
  const [items, setItems] = useState([
    {
      pic: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/body_parts/xxhdpi.png",
      title: "Exterior",
    },
    {
      pic: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/ac_parts_2/xxhdpi.png",
      title: "Interior",
    },
    {
      pic: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/suspension_2/xxhdpi.png",
      title: "Performance",
    },
    {
      pic: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/tyres_2/xxhdpi.png",
      title: "Wheels & Tires",
    },
    {
      pic: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/glasses/xxhdpi.png",
      title: "Body Parts",
    },
    {
      pic: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/clutch_2/xxhdpi.png",
      title: "Repair Parts",
    },
    {
      pic: "https://storage.googleapis.com/gomechanic_assets/battery_image_for_curated_section_large/liveguard-battery-140.png",
      title: "Electronics",
    },
    {
      pic: "https://storage.googleapis.com/gomechanic_assets/car_parts_icons/lights_2/xxhdpi.png",
      title: "Tools & Garage",
    }
  ]);

  return (
    <div style={{ marginTop: "80px" }}>
      <p
        style={{
          textAlign: "center",
          marginLeft: "120px",
          fontSize: "28px",
          fontWeight: "600",
          color: "#33363E",
          marginBottom: "50px",
        }}
      >
        BROWSE BY CATEGORIES
      </p>

      <div
        className="carousel-wrapper"
        style={{ width: "95%", margin: "auto" }}
      >
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <div key={Math.random()*100} style={{boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px"}}>
              <img src={item.pic}
                      alt="item.pic"
                width="110px"
              />
              <p
                style={{
                  padding: "2px 10px",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "15px",
                  marginTop: "0px",
                  lineHeight: "30px",
                  color: "grey",
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselCard;
