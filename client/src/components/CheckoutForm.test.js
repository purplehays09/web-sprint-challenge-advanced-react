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

test("form shows success message on submit with form details", async () => {
    //Arrange
    const wrapper = render(<CheckoutForm />)
    const button = wrapper.getByRole('button')
    console.log(wrapper.debug)
    const successMessage = wrapper.queryByTestId('successMessage')

    //Act
    fireEvent.change(screen.getByLabelText(/first name:/i), {target:{value:'David'}});
    fireEvent.change(screen.getByLabelText(/last name:/i), {target:{value:'Hays'}});
    fireEvent.change(screen.getByLabelText(/address:/i), {target:{value:'4879 Somerset Dr.'}});
    fireEvent.change(screen.getByLabelText(/city:/i), {target:{value:'Salem'}});
    fireEvent.change(screen.getByLabelText(/state:/i), {target:{value:'UT'}});
    fireEvent.change(screen.getByLabelText(/zip:/i), {target:{value:'84321'}});

    fireEvent.click(button);

    //Assert
    expect(await successMessage).toBeInTheDocument()

});