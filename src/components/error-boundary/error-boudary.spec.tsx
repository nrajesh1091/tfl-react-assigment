
import ErrorBoundary from "./error-boundary";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

// Helper component that throws an error
const ProblemChild = () => {
  throw new Error("Test error");
};

describe("ErrorBoundary", () => {
  test("renders children when no error occurs", () => {
    render(
      <ErrorBoundary>
        <div>Safe Child</div>
      </ErrorBoundary>
    );

    expect(screen.getByText("Safe Child")).toBeInTheDocument();
  });

  test("catches error and renders default fallback UI", () => {
    // Suppress error logs in test output
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );

    expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
    expect(screen.getByText("Test error")).toBeInTheDocument();

    spy.mockRestore();
  });
});
