import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import { Suspense } from "react";
function App() {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Provider store={appStore}>
          <Body />
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
