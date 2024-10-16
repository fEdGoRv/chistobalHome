import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import App from "./App";
import store from "./store/index";




test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const linkElement = screen.getByText((content, element) => 
    content.startsWith('learn react')
  );
  screen.debug();

});
