import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { HashRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");

  //const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with cart 0", () => {
    render(
      <HashRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </HashRouter>
    );
  
    const cartitems = screen.getByText("🛒Cart-(0)");
    expect(cartitems).toBeInTheDocument();
  });

  it("Should render Header Component with cart ", () => {
    render(
      <HashRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </HashRouter>
    );
  
    const cartitems = screen.getByText(/Cart/);
    expect(cartitems).toBeInTheDocument();
  });
  
  it("Should change login to log out in a click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginbutton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginbutton);
    const logoutbutton = screen.getByRole("button",{name:"Logout"});
    
    expect(logoutbutton).toBeInTheDocument();
  });
