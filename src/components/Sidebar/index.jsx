import sidbarimg from "../../assets/step-Icon.png"

const Sidebar = () => {
  const steps = [
    {
      id: 1,
      stepNumber: "STEP 1",
      title: "YOUR INFO"
    },
    {
      id: 2,
      stepNumber: "STEP 2",
      title: "SELECT PLAN"
    },
    {
      id: 3,
      stepNumber: "STEP 3",
      title: "ADD-ONS"
    },
    {
      id: 4,
      stepNumber: "STEP 4",
      title: "SUMMARY"
    }
  ]

  const activeStep = 1;

  return (
    <div 
      className="w-68.5 h-142 bg-cover bg-center bg-no-repeat rounded-lg p-8 flex flex-col gap-6"
      style={{ backgroundImage: `url(${sidbarimg})` }}
    >
      {steps.map((step) => {
        const isActive = step.id === activeStep;

        return (
          <div key={step.id} className="flex items-center gap-4">
            <div
              className={`w-8 h-8 rounded-full border border-white flex items-center justify-center font-bold text-sm transition-colors ${
                isActive
                  ? "bg-cyan-200 text-slate-900 border-transparent"
                  : "text-white"
              }`}
            >
              {step.id}
            </div>

            <div className="uppercase">
              <p className="text-xs text-gray-300 font-light tracking-wider">
                {step.stepNumber}
              </p>
              <h3 className="text-sm font-bold text-white tracking-widest">
                {step.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;