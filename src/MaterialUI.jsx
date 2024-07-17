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
      rating: 0,
    },
    {
      img: Chandragiri,
      name: "Chandragiri Hills",
      typo: "Chandragiri Hills, Kathmandu, Nepal",
      rating: 0,
    },
    {
      img: Rara,
      name: "Rara Lake",
      typo: "Rara Lake, Mugu, Nepal",
      rating: 0,
    },
    {
      img: Machapuchare,
      name: "Machapuchare",
      typo: "Machapuchare Mountain, Pokhara, Nepal",
      rating: 0,
    },
    {
      img: Chitwan,
      name: "Chitwan National Park",
      typo: "Chitwan National Park, Chitwan, Nepal",
      rating: 0,
    },
    {
      img: Annapurna,
      name: "Annapurna Base Camp",
      typo: "Annapurna Base Camp, Pokhara, Nepal",
      rating: 0,
    },
  ];

  const initialState = places.map(() => false);
  const [activeStates, setActiveStates] = useState(initialState);
  const [ratings, setRatings] = useState(places.map((place) => place.rating));

  const handleChange = (index) => (e) => {
    const newActiveStates = [...activeStates];
    newActiveStates[index] = e.target.checked;
    setActiveStates(newActiveStates);
  };

  const handleRatingChange = (index) => (e, newValue) => {
    const newRatings = [...ratings];
    newRatings[index] = newValue;
    setRatings(newRatings);
  };

  return (
    <div className="famous-places">
      <h1 style={{ left: "35%", position: "fixed" }}>
        <u>FAMOUS PLACES OF NEPAL</u>
      </h1>
      <div
        className="places"
        style={{
          marginTop: "100px",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {places.map((items, index) => (
          <Card
            key={index}
            sx={{
              border: "4px solid black",
              width: 1300,
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
                width: 1258,
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
                    sx={{
                      backgroundColor: activeStates[index]
                        ? "#4CAF50"
                        : "#686868",
                      color: activeStates[index] ? "black" : "white",
                    }}
                  />
                  <Rating
                    value={ratings[index]}
                    size="large"
                    onChange={handleRatingChange(index)}
                  />
                </Stack>
              </Stack>
              <div style={{ marginLeft: "auto" }}>
                <Switch
                  size="medium"
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
