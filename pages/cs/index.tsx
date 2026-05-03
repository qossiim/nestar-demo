import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const CS: NextPage = () => {
  return (
    <div className="cs-wrapper">
		<Stack className="container">CS</Stack>
	</div>
  );
};

export default withLayoutBasic(CS);