import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { LuGripVertical } from "react-icons/lu";
import { controlClass, secondaryButton } from "../common/formStyles";

// Guided tour steps: edit a step inline, move it down the list, or add a new one.
const TourStepsEditor = ({ steps, onChange }) => {
  const [editingId, setEditingId] = useState(null);

  const update = (id, patch) =>
    onChange(steps.map((step) => (step.id === id ? { ...step, ...patch } : step)));
  const move = (index) => {
    const next = [...steps];
    const target = index === steps.length - 1 ? index - 1 : index + 1;
    if (target < 0) return;
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };
  const add = () => {
    const id = Date.now();
    onChange([...steps, { id, title: "New step", label: "Describe the view", detail: "Camera / hotspot not configured" }]);
    setEditingId(id);
  };

  return (
    <div>
      <p className="font-body text-xs font-semibold text-foreground">
        Guided tour steps · Sample metadata
      </p>
      <ul className="mt-3 space-y-3">
        {steps.map((step, index) => (
          <li key={step.id} className="rounded-sm border border-border bg-background/60 p-4">
            {editingId === step.id ? (
              <div className="space-y-3">
                <input
                  aria-label="Step title"
                  className={controlClass}
                  value={step.title}
                  onChange={(event) => update(step.id, { title: event.target.value })}
                />
                <input
                  aria-label="Step label"
                  className={controlClass}
                  value={step.label}
                  onChange={(event) => update(step.id, { label: event.target.value })}
                />
              </div>
            ) : (
              <>
                <p className="font-body text-sm font-semibold text-foreground">
                  {step.title} / {step.label}
                </p>
                <p className="mt-1 font-body text-xs text-muted-foreground">{step.detail}</p>
              </>
            )}
            <div className="mt-3 flex gap-2.5">
              <button
                type="button"
                onClick={() => setEditingId(editingId === step.id ? null : step.id)}
                className={`${secondaryButton} px-4 py-2.5`}>
                {editingId === step.id ? "Done" : "Edit step"}
              </button>
              <button
                type="button"
                onClick={() => move(index)}
                disabled={steps.length < 2}
                aria-label={`Move step ${step.title}`}
                className={`${secondaryButton} px-4 py-2.5`}>
                <LuGripVertical aria-hidden="true" /> Move
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button type="button" onClick={add} className={`${secondaryButton} mt-3 px-4 py-3`}>
        <FiPlus aria-hidden="true" /> Add tour step
      </button>
    </div>
  );
};
export default TourStepsEditor;
