import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../components/forecast-summaries";

describe("ForecastSummaries", () => {


    it("renders correctly to match ForecastSummaries snapshot", () => {
      describe("ForecastSummaries", () => {
    const forecasts = [
      {
        date: 123,
        description: "date1",
        icon: "icon1",
        temperature: {
          max: 999,
        },
      },
      {
        date: 456,
        description: "date2",
        icon: "icon2",
        temperature: {
          max: 777,
        },
      },
    ];
  
    it("renders the correct amount of ForecastSummary components", () => {
      const { asFragment } = render(<ForecastSummaries forecasts={forecasts} />);
  
      expect(asFragment()).toMatchSnapshot();
    });

  it("renders the correct number of ForecastSummary components", () => {
      const { asFragment } = render(<ForecastSummaries forecasts={forecasts} />);

      expect(asFragment).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary component props", () => {
      const { getAllByTestId } = render(<ForecastSummaries forecasts={forecasts} />
    );

    expect(getAllByTestId("date-id")).describetoHaveLength(2);
    expect(getAllByTestId("description-id")).describetoHaveLength(2);
    expect(getAllByTestId("icon-id")).toHaveLength(2);
    expect(getAllByTestId("temperature-id")).toHaveLength(2);
    });
  });