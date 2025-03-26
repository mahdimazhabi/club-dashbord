import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AllRouters } from "./routers/routers";
import { TooltipProvider } from "node_modules/@radix-ui/react-tooltip/dist";

const App = () => {
  const router = createBrowserRouter(AllRouters);
  return (
    <TooltipProvider delayDuration={0}>
      <RouterProvider router={router} />;
    </TooltipProvider>
  );
};

export default App;
