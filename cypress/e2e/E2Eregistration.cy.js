import Register from "../../PageObjects/SignupPage";

describe('Registration E2E Senario', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    cy.fixture("data").then((userData) => {
    const newUser = new Register();
    newUser.setFirstName(userData.FirstName);
    newUser.setLastName(userData.LastName);
    newUser.setAddress(userData.Address);
    newUser.setCity(userData.City);
    newUser.setState(userData.State);
    newUser.setZipCode(userData.ZipCode);
    newUser.setPhoneNumber(userData.PhoneNumber);
    newUser.setSSN(userData.SSN);
    newUser.setUserName(userData.UserName);
    newUser.setPassword(userData.Password);
    newUser.setConfirmPassword(userData.ConfirmPassword);
    newUser.clickRegister();
    newUser.verifySignup(userData.SignupHeader);
    })
    
  })
})