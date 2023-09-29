import { render ,screen} from "@testing-library/react";
import RestaurentCard  from "../RestaurentCard.js";
import MOCK_DATA from "../mocks/ResCardMock.json";
import "@testing-library/jest-dom";

it("should render restaurent card components with props data",()=>{
    render(<RestaurentCard resData={MOCK_DATA}/>);
    const name=screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
})