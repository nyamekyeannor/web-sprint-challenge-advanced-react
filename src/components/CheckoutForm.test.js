import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {});

test("shows success message on submit with form details", () => {});

const firstNameInput = screen.getByLabelText(/first name/i);
const lastNameInput = screen.getByLabelText(/last name/i);
const addressInput = screen.getByLabelText(/address/i);
const cityInput = screen.getByLabelText(/city/i);
const stateInput = screen.getByLabelText(/state/i);
const zipInput = screen.getByLabelText(/zip/i);
const submitButton = screen.getByRole("button", { name: /checkout/i });
