import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("smoke test - it renders without crashing", () => {
   render (<App />) 
});