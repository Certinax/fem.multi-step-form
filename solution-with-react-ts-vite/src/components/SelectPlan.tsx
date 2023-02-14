import StepContainer from "./StepContainer";
import ArcadeIcon from "../assets/icon-arcade.svg";
import ProIcon from "../assets/icon-pro.svg";
import AdvancedIcon from "../assets/icon-advanced.svg";

const SelectPlan = () => {
  return (
    <StepContainer>
      <h3 className="text-2xl font-bold text-fem-marine-blue">
        Select your plan
      </h3>
      <p className="py-2 text-fem-cool-gray">
        You have the option of monthly or yearly billing.
      </p>
      <div className="py-2">
        <label htmlFor="arcade">
          <input className="peer hidden" type="radio" name="plan" id="arcade" />
          <div className="flex space-x-4 rounded-md border p-4 peer-checked:border-fem-purplish-blue peer-checked:bg-fem-magnolia">
            <img src={ArcadeIcon} alt="Arcade plan icon" />
            <div className="">
              <span className="block font-bold text-fem-marine-blue">
                Arcade
              </span>
              <span className="block text-sm text-fem-cool-gray">$9/mo</span>
            </div>
          </div>
        </label>
        <div className="h-3"></div>
        <label htmlFor="advanced">
          <input
            className="peer hidden"
            type="radio"
            name="plan"
            id="advanced"
          />
          <div className="flex space-x-4 rounded-md border p-4 peer-checked:border-fem-purplish-blue peer-checked:bg-fem-magnolia">
            <img src={AdvancedIcon} alt="Advanced plan icon" />
            <div className="">
              <span className="block font-bold text-fem-marine-blue">
                Advanced
              </span>
              <span className="block text-sm text-fem-cool-gray">$12/mo</span>
            </div>
          </div>
        </label>
        <div className="h-3"></div>
        <label htmlFor="pro">
          <input className="peer hidden" type="radio" name="plan" id="pro" />
          <div className="flex space-x-4 rounded-md border p-4 peer-checked:border-fem-purplish-blue peer-checked:bg-fem-magnolia">
            <img src={ProIcon} alt="Pro plan icon" />
            <div className="">
              <span className="block font-bold text-fem-marine-blue">Pro</span>
              <span className="block text-sm text-fem-cool-gray">$15/mo</span>
            </div>
          </div>
        </label>
      </div>
      <div className="my-4 flex justify-center rounded-md bg-fem-magnolia py-3">
        <div className="flex w-12 items-center justify-between rounded-2xl bg-fem-marine-blue p-1">
          <label htmlFor="monthly" className="inline-block">
            <div className="relative flex items-center">
              <input
                className="peer hidden"
                type="radio"
                name="period"
                id="monthly"
                checked
              />

              <div className="h-4 w-4 rounded-full peer-checked:bg-fem-white"></div>
              <span className="absolute -translate-x-24 font-medium text-fem-cool-gray peer-checked:text-fem-marine-blue">
                Monthly
              </span>
            </div>
          </label>
          <label htmlFor="yearly" className="inline-block">
            <div className="relative flex items-center">
              <input
                className="peer hidden"
                type="radio"
                name="period"
                id="yearly"
              />
              <div className="h-4 w-4 rounded-full peer-checked:bg-fem-white"></div>
              <span className="absolute pl-12 font-medium text-fem-cool-gray peer-checked:text-fem-marine-blue">
                Yearly
              </span>
            </div>
          </label>
        </div>
      </div>
    </StepContainer>
  );
};
export default SelectPlan;
