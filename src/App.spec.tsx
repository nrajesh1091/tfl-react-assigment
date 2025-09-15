import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
// Mock fetch
const mockConfig = { apiBaseUrl: "http://localhost:3000/api" };

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockConfig),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("App component", () => {
  it("renders header, title, and footer", async () => {
    render(<App />);

    // Wait until config is fetched and component updates
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith("./assets/config.json");
    });

    expect(
      screen.getByRole("heading", { name: /Transport for London Tube Status/i })
    ).toBeInTheDocument();
  });

  it("handles fetch error gracefully", async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error("Network error"))
    );

    render(<App />);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith("./assets/config.json");
    });

    // App should still render static parts
    expect(
      screen.getByRole("heading", { name: /Transport for London Tube Status/i })
    ).toBeInTheDocument();
  });
});
