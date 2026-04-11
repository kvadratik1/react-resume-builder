import "@testing-library/jest-dom";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "../src/App.jsx";

beforeEach(() => {
  localStorage.clear();
});

describe("App", () => {
  it("renders main heading", () => {
    render(<App />);
    expect(screen.getByText(/CV Aplication/i)).toBeInTheDocument();
  });

  it("renders Personal Information section", () => {
    render(<App />);
    expect(screen.getByText(/Personal Information/i)).toBeInTheDocument();
  });

  it("renders Education section", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /Education/i })
    ).toBeInTheDocument();
  });

  it("renders Practical Experience section", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /Practical Experience/i })
    ).toBeInTheDocument();
  });

  it("renders inputs in edit mode initially", () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/Full name/i)).toBeInTheDocument();
  });

  it("can type into name input", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Full name/i);

    fireEvent.change(input, { target: { value: "Alex" } });

    expect(input.value).toBe("Alex");
  });

  it("can type into email input", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Email/i);

    fireEvent.change(input, { target: { value: "test@mail.com" } });

    expect(input.value).toBe("test@mail.com");
  });

  it("can save personal info", () => {
    render(<App />);

    const saveBtn = screen.getAllByText("Save")[0];
    fireEvent.click(saveBtn);

    expect(screen.getByText(/Edit/i)).toBeInTheDocument();
  });

  it("switches to edit mode after clicking Edit", () => {
    render(<App />);

    const saveBtn = screen.getAllByText("Save")[0];
    fireEvent.click(saveBtn);

    fireEvent.click(screen.getByText(/Edit/i));

    expect(screen.getByPlaceholderText(/Full name/i)).toBeInTheDocument();
  });

  it("adds education entry", () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText(/School name/i), {
      target: { value: "Harvard" },
    });

    fireEvent.change(screen.getByPlaceholderText(/Major/i), {
      target: { value: "CS" },
    });

    fireEvent.click(screen.getByRole("button", { name: "+ Add Education" }));

    expect(screen.getByText(/Harvard/i)).toBeInTheDocument();
  });

  it("adds experience entry", () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText(/Company name/i), {
      target: { value: "Google" },
    });

    fireEvent.change(screen.getByPlaceholderText(/Position/i), {
      target: { value: "Dev" },
    });

    fireEvent.click(screen.getByRole("button", { name: "+ Add Experience" }));

    expect(screen.getByText(/Google/i)).toBeInTheDocument();
  });

  it("saves data to localStorage", () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText(/Full name/i), {
      target: { value: "Alex" },
    });

    const saveBtn = screen.getAllByText("Save")[0];
    fireEvent.click(saveBtn);

    const data = JSON.parse(localStorage.getItem("general"));
    expect(data.name).toBe("Alex");
  });

  it("loads data from localStorage", () => {
    localStorage.setItem(
      "general",
      JSON.stringify({ name: "John", email: "", tel: "" })
    );

    render(<App />);
    expect(screen.getByText(/John/i)).toBeInTheDocument();
  });

  it("download button exists", () => {
    render(<App />);
    expect(screen.getByText(/Download PDF/i)).toBeInTheDocument();
  });

  it("resume container exists", () => {
    render(<App />);
    const resume = document.getElementById("resume");
    expect(resume).toBeInTheDocument();
  });
});
