import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "../src/App.jsx";

beforeEach(() => {
  localStorage.clear();
});

describe("App", () => {
  // 1
  it("renders main heading", () => {
    render(<App />);
    expect(screen.getByText(/CV Aplication/i)).toBeInTheDocument();
  });

  // 2
  it("renders Personal Information section", () => {
    render(<App />);
    expect(screen.getByText(/Personal Information/i)).toBeInTheDocument();
  });

  // 3
  it("renders Education section", () => {
    render(<App />);
    expect(screen.getByText(/Education/i)).toBeInTheDocument();
  });

  // 4
  it("renders Practical Experience section", () => {
    render(<App />);
    expect(screen.getByText(/Practical Experience/i)).toBeInTheDocument();
  });

  // 5
  it("renders inputs in edit mode initially", () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/Full name/i)).toBeInTheDocument();
  });

  // 6
  it("can type into name input", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Full name/i);

    fireEvent.change(input, { target: { value: "Alex" } });

    expect(input.value).toBe("Alex");
  });

  // 7
  it("can type into email input", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Email/i);

    fireEvent.change(input, { target: { value: "test@mail.com" } });

    expect(input.value).toBe("test@mail.com");
  });

  // 8
  it("can save personal info", () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Save/i));

    expect(screen.getByText(/Edit/i)).toBeInTheDocument();
  });

  // 9
  it("switches to edit mode after clicking Edit", () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Save/i));
    fireEvent.click(screen.getByText(/Edit/i));

    expect(screen.getByPlaceholderText(/Full name/i)).toBeInTheDocument();
  });

  // 10
  it("adds education entry", () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText(/School name/i), {
      target: { value: "Harvard" },
    });

    fireEvent.change(screen.getByPlaceholderText(/Major/i), {
      target: { value: "CS" },
    });

    fireEvent.click(screen.getByText(/\+ Add Education/i));

    expect(screen.getByText(/Harvard/i)).toBeInTheDocument();
  });

  // 11
  it("adds experience entry", () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText(/Company name/i), {
      target: { value: "Google" },
    });

    fireEvent.change(screen.getByPlaceholderText(/Position/i), {
      target: { value: "Dev" },
    });

    fireEvent.click(screen.getByText(/\+ Add Experience/i));

    expect(screen.getByText(/Google/i)).toBeInTheDocument();
  });

  // 12
  it("saves data to localStorage", () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText(/Full name/i), {
      target: { value: "Alex" },
    });

    fireEvent.click(screen.getByText(/Save/i));

    const data = JSON.parse(localStorage.getItem("general"));
    expect(data.name).toBe("Alex");
  });

  // 13
  it("loads data from localStorage", () => {
    localStorage.setItem(
      "general",
      JSON.stringify({ name: "John", email: "", tel: "" })
    );

    render(<App />);
    expect(screen.getByText(/John/i)).toBeInTheDocument();
  });

  // 14
  it("download button exists", () => {
    render(<App />);
    expect(screen.getByText(/Download PDF/i)).toBeInTheDocument();
  });

  // 15
  it("resume container exists", () => {
    render(<App />);
    const resume = document.getElementById("resume");
    expect(resume).toBeInTheDocument();
  });
});
