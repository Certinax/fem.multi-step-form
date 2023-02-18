import StepContainer from "./StepContainer";

const StepPersonalInfo = () => {
  return (
    <StepContainer>
      <h3 className="text-2xl font-bold text-fem-marine-blue">Personal Info</h3>
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
    </StepContainer>
  );
};
export default StepPersonalInfo;
