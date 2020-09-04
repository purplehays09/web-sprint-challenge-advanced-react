import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
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

test("form shows success message on submit with form details", async () => {

    const wrapper = render(<CheckoutForm/>)

    fireEvent.change(screen.getByLabelText(/first name:/i), {target:{value:'David'}});
    fireEvent.change(screen.getByLabelText(/last name:/i), {target:{value:'Hays'}});
    fireEvent.change(screen.getByLabelText(/address:/i), {target:{value:'4879 Somerset Dr.'}});
    fireEvent.change(screen.getByLabelText(/city:/i), {target:{value:'Salem'}});
    fireEvent.change(screen.getByLabelText(/state:/i), {target:{value:'UT'}});
    fireEvent.change(screen.getByLabelText(/zip:/i), {target:{value:'84321'}});


    fireEvent.click(screen.getByText(/checkout/i));


    const successMessage = wrapper.queryByTestId('successMessage')

    expect(successMessage_.toBeInTheDocument())
});
