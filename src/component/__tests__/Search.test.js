import { fireEvent, render ,screen} from "@testing-library/react";
import Body from "../body.js";
import { HashRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/MockResList.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
global.fetch=jest.fn(()=>{

    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("should filter top rated restaurents",async()=>{
    await act(async () => render(
    <BrowserRouter>
     <Body/>
    </BrowserRouter> 
    )
);
    const cardsbeforesearch= screen.getAllByTestId("resCard");
    expect(cardsbeforesearch.length).toBe(20);
    const searchbtn=screen.getByRole("button",{name:"Search"});
    const searchInput=screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target: {value:"pizza"}});
    fireEvent.click(searchbtn);

    const cards=screen.getAllByTestId("resCard");
    expect(cards.length).toBe(3);
});

it("should render body component with search button",async()=>{
    await act(async () => render(
    <HashRouter>
     <Body/>
    </HashRouter> 
    )
);
    const cardsbeforefilter= screen.getAllByTestId("resCard");
    expect(cardsbeforefilter.length).toBe(20);

    const topratedbtn=screen.getByRole("button",{name:"Top rated restaurent"})
    fireEvent.click(topratedbtn);
    const cardsafterfilter=screen.getAllByTestId("resCard");
    expect(cardsafterfilter.length).toBe(13);

   
});