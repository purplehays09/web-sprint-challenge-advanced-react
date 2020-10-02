import React from "react";
import { render,fireEvent,screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    //Arrange
    const wrapper = render(<CheckoutForm/>)

    //Act
    const header = wrapper.getByText(/checkout form/i)

    //Assert
    expect(header).toBeInTheDocument()


});

test("form shows success message on submit with form details", () => {});