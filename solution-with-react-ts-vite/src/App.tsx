// import reactLogo from "./assets/react.svg";
import bgSidebarMobile from "./assets/bg-sidebar-mobile.svg";

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

          <div className="mx-4 flex -translate-y-16 flex-col rounded-lg bg-fem-white py-6 px-4 pb-2 shadow-lg">
            <h3 className="text-2xl font-bold text-fem-marine-blue">
              Personal Info
            </h3>
            <p className="py-2 text-fem-cool-gray">
              Please provider your name, email, address, and phone number.
            </p>
            <form className="space-y-2 pt-2 pb-6">
              <div className="">
                <label className="text-sm text-fem-marine-blue" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-sm border-fem-light-gray"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="e.g. Stephen King"
                />
              </div>
              <div className="">
                <label className="text-sm text-fem-marine-blue" htmlFor="email">
                  Email address
                </label>
                <input
                  className="w-full rounded-sm border-fem-light-gray"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e.g. stephenking@lorem.com"
                />
              </div>
              <div className="">
                <label className="text-sm text-fem-marine-blue" htmlFor="phone">
                  Phone number
                </label>
                <input
                  className="w-full rounded-sm border-fem-light-gray"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="e.g. +1 234 567 890"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-end bg-fem-white">
          <button className="m-4 rounded-md bg-fem-marine-blue px-4 py-2 font-medium text-fem-light-gray">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
