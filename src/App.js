import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes/routes";

function App() {
  return (
    <div className="max-w-[1400px] mx-auto bg-[#f3f3f3]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
