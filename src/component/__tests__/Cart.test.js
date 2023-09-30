import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurentMenu from "../RestaurentMenu";
import Header from "../Header";
import Carts from "../Carts";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { HashRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA),
    })
})

it("should load restaurent menu component",async()=>{

    await act(async()=>render(
      <HashRouter>
          <Provider store={appStore}>
             <Header/>
             <RestaurentMenu/>
             <Carts/>
         </Provider> 
      </HashRouter>
   ));
    const accordheader=screen.getByText("Pocket Friendly Rolls(8)");
    fireEvent.click(accordheader);
    expect(screen.getAllByTestId("foodItems").length).toBe(8);

    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("🛒Cart-(1)")).toBeInTheDocument();
  
    fireEvent.click(addBtns[1]);
  
    expect(screen.getByText("🛒Cart-(2)")).toBeInTheDocument();
  
    expect(screen.getAllByTestId("foodItems").length).toBe(10);
  
    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  
    expect(screen.getAllByTestId("foodItems").length).toBe(8);
  
    expect(
      screen.getByText("Your cart is feeling lonely. It's craving some tasty company.😥")
    ).toBeInTheDocument();

})