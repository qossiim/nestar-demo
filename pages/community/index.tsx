import { useState } from "react";
import { NextPage } from "next";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";

const Community: NextPage = () => {
  const [title, setTitle] = useState<string>("hello");

 return (
	<div className="community-wrapper">
		<Stack className="container">COMMUNITY</Stack>
	</div>
);
// style={{ margin: "20px 0" }} olib tashlandi
// o‘rniga className="community-wrapper" berildi
};

export default withLayoutBasic(Community);