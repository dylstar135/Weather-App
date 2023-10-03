import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails.js";

describe("locationDetails", () => {
  it("renders the correct city and location props", () => {
    const { getByText } = render(
      <LocationDetails city="Manchester" country="Uk" />
    );
    expect(getByText("Manchester, Uk")).toBeInstanceOf(HTMLHeadingElement);
  });
});
