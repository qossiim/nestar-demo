import { useState } from "react";
import { NextPage } from "next";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";

const Community: NextPage = () => {
  const [title, setTitle] = useState<string>("hello");

  return (
    <div>
      COMMUNITY{" "}
      <button
        type="button"
        onClick={() => alert("Hello MIT")}
        className="pressBtn"
      >
        PressMe
      </button>
    </div>
  );
};

export default withLayoutBasic(Community);