import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange
    const wrapper = render(<CheckoutForm />)
    console.log(wrapper.debug)

    //Act
    const heading = wrapper.queryByText(/checkout form/i)


    //Assert
    expect(heading).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {});
