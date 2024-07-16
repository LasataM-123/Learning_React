import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Switch from "@mui/material/Switch";
import Phewa from "./assets/Phewa.jpg";
import Chandragiri from "./assets/Chandragiri.jpg";
import Rara from "./assets/Rara.jpg";
import Machapuchare from "./assets/Machapuchare.jpg";
import Chitwan from "./assets/Chitwan.jpg";
import Annapurna from "./assets/Annapurna.jpg";
export const MaterialUI = () => {
  const places = [
    {
      img: Phewa,
      name: "Phewa Lake",
      typo: "Phewa Lake, Pokhara, Nepal",
    },
    {
      img: Chandragiri,
      name: "Chandragiri Hills",
      typo: "Chandragiri Hills, Kathmandu, Nepal",
    },
    {
      img: Rara,
      name: "Rara Lake",
      typo: "Rara Lake, Mugu, Nepal",
    },
    {
      img: Machapuchare,
      name: "Machapuchare",
      typo: "Machapuchare Mountain, Pokhara, Nepal",
    },
    {
      img: Chitwan,
      name: "Chitwan National Park",
      typo: "Chitwan National Park, Chitwan, Nepal",
    },
    {
      img: Annapurna,
      name: "Annapurna Base Camp",
      typo: "Annapurna Base Camp, Pokhara, Nepal",
    },
  ];

  const initialState = places.map(() => false);
  const [activeStates, setActiveStates] = useState(initialState);

  const handleChange = (index) => (e) => {
    const newActiveStates = [...activeStates];
    newActiveStates[index] = e.target.checked;
    setActiveStates(newActiveStates);
  };

  return (
    <div className="famous-places">
      <h1 style={{ textAlign: "center" }}>
        <u>FAMOUS PLACES OF NEPAL</u>
      </h1>
      <div
        className="places"
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {places.map((items, index) => (
          <Card
            key={index}
            sx={{
              border: "2px solid black",
              width: 1400,
              height: 680,
              backgroundColor: "#454545",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <CardMedia
              component="img"
              alt={items.name}
              image={items.img}
              sx={{
                border: "2px solid black",
                margin: "20px",
                width: 1360,
                height: 450,
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
              p={2}
              useFlexGap
            >
              <Stack direction="column" spacing={0.5} useFlexGap>
                <Typography
                  sx={{
                    fontSize: "30px",
                    marginLeft: "25px",
                    marginBottom: "-20px",
                  }}
                >
                  {items.typo}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  useFlexGap
                >
                  <Chip
                    size="medium"
                    label={activeStates[index] ? "Active" : "Inactive"}
                    color={activeStates[index] ? "success" : "default"}
                  />
                  <Rating value={1} size="medium" />
                </Stack>
              </Stack>
              <div style={{ marginLeft: "auto" }}>
                <Switch
                  color="secondary"
                  size="big"
                  checked={activeStates[index]}
                  onChange={handleChange(index)}
                />
              </div>
            </Stack>
          </Card>
        ))}
      </div>
    </div>
  );
};
