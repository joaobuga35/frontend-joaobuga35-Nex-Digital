import RoutesMain from "./routes";
import Global from "./styles/Global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Global />
      <RoutesMain />
    </>
  );
}

export default App;
