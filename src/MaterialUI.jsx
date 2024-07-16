import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Switch from "@mui/material/Switch";

export const MaterialUI = () => {
  const places = [
    {
      img: "./assets/Phewa.jpg",
      name: "Phewa Lake",
      typo: "Phewa Lake, Pokhara, Nepal",
    },
    {
      img: "./assets/Chandragiri.jpg",
      name: "Chandragiri Hills",
      typo: "Chandragiri Hills, Kathmandu, Nepal",
    },
    {
      img: "./assets/Rara.jpg",
      name: "Rara Lake",
      typo: "Rara Lake, Mugu, Nepal",
    },
    {
      img: "./assets/Machapuchare.jpg",
      name: "Machapuchare",
      typo: "Machapuchare Mountain, Pokhara, Nepal",
    },
    {
      img: "./assets/Chitwan.jpg",
      name: "Chitwan National Park",
      typo: "Chitwan National Park, Chitwan, Nepal",
    },
    {
      img: "./assets/Annapurna.jpg",
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
      <div className="places">
        {places.map((items, index) => (
          <Card key={index}>
            <CardMedia component="img" alt={items.name} image={items.img} />
            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
              p={2}
              useFlexGap
            >
              <Stack direction="column" spacing={0.5} useFlexGap>
                <Typography>{items.typo}</Typography>
                <Stack direction="row" spacing={1} useFlexGap>
                  <Chip
                    size="small"
                    label={activeStates[index] ? "Active" : "Inactive"}
                    color={activeStates[index] ? "success" : "default"}
                  />
                  <Rating value={1} size="small" />
                </Stack>
              </Stack>
              <Switch
                checked={activeStates[index]}
                onChange={handleChange(index)}
              />
            </Stack>
          </Card>
        ))}
      </div>
    </div>
  );
};
