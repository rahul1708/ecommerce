import { Button } from "@headlessui/react";
import { Typography, colors } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <div item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company{" "}
          </Typography>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Company{" "}
          </Typography>
          <Button className="pb-5" variant="h6" gutterBottom></Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
