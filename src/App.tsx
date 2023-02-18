// import reactLogo from "./assets/react.svg";
import bgSidebarMobile from "./assets/bg-sidebar-mobile.svg";
import StepPersonalInfo from "./components/StepPersonalInfo";
import SelectPlan from "./components/SelectPlan";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-500 p-4">
      <div className="bg-fem-magnolia">
        <div className="">
          {/* sidebar/topbar */}
          <div className="relative">
            <img className="" src={bgSidebarMobile} alt="Illustration motive" />
            <div className="absolute inset-0 top-8 flex justify-center space-x-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-fem-light-blue text-fem-marine-blue">
                1
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-fem-white">
                2
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-fem-white">
                3
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white text-fem-white">
                4
              </span>
            </div>
          </div>

          {/* <StepPersonalInfo /> */}
          <SelectPlan />
        </div>
        <div className="flex justify-end bg-fem-white">
          <button className="m-4 rounded-md bg-fem-marine-blue px-4 py-2 font-medium text-fem-alabaster">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
