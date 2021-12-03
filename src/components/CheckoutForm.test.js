import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});
test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText("Checkout");
  expect(header).toHaveTextContent(/checkout/i);
});

test("form shows success message on submit with form details", () => {});
test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const submitButton = screen.getByRole("button", { name: /checkout/i });

  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "tom" },
  });
  fireEvent.change(lastNameInput, {
    target: { name: "lastName", value: "banker" },
  });
  fireEvent.change(addressInput, {
    target: { name: "address", value: "911 alpha " },
  });
  fireEvent.change(cityInput, {
    target: { name: "city", value: "DC" },
  });
  fireEvent.change(stateInput, {
    target: { name: "state", value: "Washington DC" },
  });
  fireEvent.change(zipInput, {
    target: { name: "zip", value: "77290" },
  });
  fireEvent.click(submitButton);
});
