import { useState } from "react";
import Editor from "./Editor";
import Reader from "./Reader";

const BlockView = () => {
  const [editMode, setEditMode] = useState(false);
  const [step, setStep] = useState(0);
  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="modal-box flex flex-col gap-5">
      {editMode && (
        <EditMode
          action={() => setEditMode(false)}
          step={step}
          setStep={setStep}
          handleNextStep={handleNextStep}
        />
      )}
      {!editMode && (
        <ViewMode
          action={() => setEditMode(true)}
          handleNextStep={handleNextStep}
          step={step}
          setStep={setStep}
        />
      )}
    </div>
  );
};

const ViewMode = ({ step, setStep, handleNextStep, setEditMode, action }) => {
  return (
    <>
      <ul className="steps  w-full">
        <Step active={step >= 0} onClick={() => setStep(0)}>
          Hebrew
        </Step>
        <Step active={step >= 1} onClick={() => setStep(1)}>
          English
        </Step>
        <Step active={step >= 2} onClick={() => setStep(2)}>
          Transliteration
        </Step>
        <Step active={step >= 3} onClick={() => setStep(3)}>
          Meaning
        </Step>
      </ul>
      <div className="divider"></div>
      <div>
        <StepProcess active={step === 0}>
          <h3 className="font-bold text-lg">{`{BlessName} Block`}</h3>
          <Reader markdown={`Hebrew`} />
        </StepProcess>
        <StepProcess active={step === 1}>
          <h3 className="font-bold text-lg">{`{BlessName} Block`}</h3>
          <Reader markdown={`English`} />
        </StepProcess>
        <StepProcess active={step === 2}>
          <h3 className="font-bold text-lg">{`{BlessName} Block`}</h3>
          <Reader markdown={`Transliteration`} />
        </StepProcess>
        <StepProcess active={step === 3}>
          <h3 className="font-bold text-lg">{`{BlessName} Block`}</h3>
          <Reader markdown={`Meaning`} />
        </StepProcess>
      </div>
      <div className="modal-action">
        <button className="btn" onClick={handleNextStep}>
          Next
        </button>
        <button onClick={action} className="btn">
          Edit
        </button>
      </div>
    </>
  );
};

const EditMode = ({ step, setStep, handleNextStep, action }) => {
  return (
    <>
      <ul className="steps  w-full">
        <Step active={step >= 0} onClick={() => setStep(0)}>
          Do Something
        </Step>
        <Step active={step >= 1} onClick={() => setStep(1)}>
          Hebrew
        </Step>
        <Step active={step >= 2} onClick={() => setStep(2)}>
          English
        </Step>
        <Step active={step >= 3} onClick={() => setStep(3)}>
          Transliteration
        </Step>
        <Step active={step >= 4} onClick={() => setStep(4)}>
          another
        </Step>
      </ul>
      <div className="divider"></div>
      <div>
        <StepProcess active={step === 0}>
          <h3 className="font-bold text-lg">Create New Bless Block</h3>
          <p className="py-4">Enter Bless Block's name and share details.</p>
        </StepProcess>
        <StepProcess active={step === 1}>
          <h3 className="font-bold text-lg">Edit Hebrew</h3>
          <Editor setExportValue={() => {}} />
        </StepProcess>
        <StepProcess active={step === 2}>
          <h3 className="font-bold text-lg">Edit English</h3>
          <Editor setExportValue={() => {}} />
        </StepProcess>
        <StepProcess active={step === 3}>
          <h3 className="font-bold text-lg">Edit Transliteration</h3>
          <Editor setExportValue={() => {}} />
        </StepProcess>
        <StepProcess active={step === 4}>
          <h3 className="font-bold text-lg">Edit Meaning</h3>
          <Editor setExportValue={() => {}} />
        </StepProcess>
        <div className="modal-action">
          <button className="btn" onClick={handleNextStep}>
            Next
          </button>
          <button className="btn" onClick={action}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

const Step = ({ children, active, onClick }) => {
  return (
    <li onClick={onClick} className={"step " + (active && "step-primary")}>
      <div className="hidden md:block">{children}</div>
    </li>
  );
};

const StepProcess = ({ children, active }) => {
  if (active) return <div className="flex flex-col gap-5">{children}</div>;
  return null;
};

export default BlockView;
