import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AllRouters } from "./routers/routers";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import OnDomLoaded from "./shared/components/OnDomLoaded";
import WelcomeLayout from "./shared/components/Welcome";

const App = () => {
  const router = createBrowserRouter(AllRouters);
  return (
    <OnDomLoaded fallback={<WelcomeLayout />} delay={1000}>
      <TooltipProvider delayDuration={0}>
        <RouterProvider router={router} />
      </TooltipProvider>
    </OnDomLoaded>
  );
};

export default App;
