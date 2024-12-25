class Register
{
    txtFirstName = "input[id='customer.firstName']";
    txtLatName = "input[id='customer.lastName']";
    txtAddress = "input[id='customer.address.street']";
    txtCity = "input[id='customer.address.city']";
    txtState = "input[id='customer.address.state']";
    txtZipCode = "input[id='customer.address.zipCode']";
    txtSSN = "input[id='customer.ssn']";
    txtPhoneNumber = "input[id='customer.phoneNumber']";
    txtUserName ="input[id='customer.username']";
    txtPassword = "input[id='customer.password']";
    txtConfirmPassword = "input[id='repeatedPassword']";
    btnRegister ="input[value='Register']";
    txtTitle = ".title";

    setFirstName(firstName)
    {
        cy.get(this.txtFirstName).type(firstName);
    }
    setLastName(lastName)
    {
        cy.get(this.txtLatName).type(lastName);
    }
    setAddress(adress)
    {
        cy.get(this.txtAddress).type(adress);
    }
    setCity(city)
    {
        cy.get(this.txtCity).type(city);
    }
    setState(state)
    {
        cy.get(this.txtState).type(state);
    }
    setZipCode(zipCode)
    {
        cy.get(this.txtZipCode).type(zipCode);
    }
    setPhoneNumber(phoneNumber)
    {
        cy.get(this.txtPhoneNumber).type(phoneNumber);
    }
    setSSN(SSN)
    {
        cy.get(this.txtSSN).type(SSN);
    }
    setUserName(unserName)
    {
        cy.get(this.txtUserName).type(unserName);
    }
    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }
    setConfirmPassword(confirmPassword)
    {
        cy.get(this.txtConfirmPassword).type(confirmPassword);
    }
    clickRegister()
    {
        cy.get(this.btnRegister).click();
    }
    verifySignup(unserName)
    {
        cy.get(this.txtTitle).should('have.text','Welcome ' + unserName);
    }
}

export default Register;