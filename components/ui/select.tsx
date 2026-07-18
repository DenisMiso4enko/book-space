"use client";

import {
  createContext,
  useContext,
  useEffect,
  useEffectEvent,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";
import { cn } from "./utils";

type SelectContextValue = {
  open: boolean;
  value: string;
  disabled: boolean;
  triggerId: string;
  listboxId: string;
  labels: Record<string, string>;
  setOpen: (open: boolean) => void;
  selectValue: (next: string) => void;
  registerOption: (optionValue: string, label: string) => void;
};

const SelectContext = createContext<SelectContextValue | null>(null);

function useSelectContext(component: string) {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error(`${component} must be used within <Select>`);
  }
  return context;
}

type SelectProps = {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
};

function SelectRoot({
  children,
  value: valueProp,
  defaultValue = "",
  onValueChange,
  name,
  disabled = false,
  className,
}: SelectProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [labels, setLabels] = useState<Record<string, string>>({});
  const rootRef = useRef<HTMLDivElement>(null);
  const reactId = useId();
  const triggerId = `${reactId}-trigger`;
  const listboxId = `${reactId}-listbox`;

  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : uncontrolledValue;

  const selectValue = (next: string) => {
    if (!isControlled) {
      setUncontrolledValue(next);
    }
    onValueChange?.(next);
    setOpen(false);
  };

  const registerOption = (optionValue: string, label: string) => {
    setLabels((prev) => {
      if (prev[optionValue] === label) return prev;
      return { ...prev, [optionValue]: label };
    });
  };

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (rootRef.current && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <SelectContext.Provider
      value={{
        open,
        value,
        disabled,
        triggerId,
        listboxId,
        labels,
        setOpen,
        selectValue,
        registerOption,
      }}
    >
      <div
        ref={rootRef}
        className={cn("relative inline-flex items-center gap-2", className)}
      >
        {name ? <input type="hidden" name={name} value={value} /> : null}
        {children}
      </div>
    </SelectContext.Provider>
  );
}

type SelectLabelProps = HTMLAttributes<HTMLSpanElement>;

function SelectLabel({ className, ...props }: SelectLabelProps) {
  useSelectContext("Select.Label");

  return (
    <span
      className={cn("text-sm font-medium text-on-surface-variant", className)}
      {...props}
    />
  );
}

type SelectTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  placeholder?: string;
};

function SelectTrigger({
  className,
  placeholder = "Select…",
  ...props
}: SelectTriggerProps) {
  const { open, value, disabled, triggerId, listboxId, labels, setOpen } =
    useSelectContext("Select.Trigger");

  const selectedLabel = value ? labels[value] : undefined;

  return (
    <button
      type="button"
      id={triggerId}
      role="combobox"
      aria-expanded={open}
      aria-controls={listboxId}
      aria-haspopup="listbox"
      disabled={disabled}
      className={cn(
        "inline-flex h-10 min-w-[140px] items-center justify-between gap-3 rounded-lg border border-outline-card bg-surface-container-lowest px-4 text-sm text-on-surface transition-colors",
        "hover:bg-surface-row-hover",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        open && "border-secondary ring-2 ring-secondary ring-offset-2",
        className,
      )}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span className={cn(!selectedLabel && "text-outline")}>
        {selectedLabel ?? placeholder}
      </span>
      <ChevronDownIcon
        className={cn(
          "shrink-0 text-on-surface transition-transform duration-150",
          open && "rotate-180",
        )}
      />
    </button>
  );
}

type SelectContentProps = HTMLAttributes<HTMLUListElement>;

function SelectContent({ className, children, ...props }: SelectContentProps) {
  const { open, listboxId, triggerId } = useSelectContext("Select.Content");

  return (
    <ul
      id={listboxId}
      role="listbox"
      aria-labelledby={triggerId}
      hidden={!open}
      className={cn(
        "absolute top-[calc(100%+0.5rem)] right-0 z-50 w-max min-w-[140px] overflow-hidden rounded-lg border border-outline-card bg-surface-container-lowest py-1 shadow-(--shadow-overlay)",
        !open && "invisible pointer-events-none",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
}

type SelectItemProps = {
  value: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};

function SelectItem({
  value,
  children,
  className,
  disabled = false,
}: SelectItemProps) {
  const {
    value: selectedValue,
    selectValue,
    registerOption,
  } = useSelectContext("Select.Item");
  const selected = selectedValue === value;
  const label =
    typeof children === "string" || typeof children === "number"
      ? String(children)
      : value;

  const onRegisterOption = useEffectEvent(
    (optionValue: string, optionLabel: string) => {
      registerOption(optionValue, optionLabel);
    },
  );

  useLayoutEffect(() => {
    onRegisterOption(value, label);
  }, [value, label]);

  return (
    <li role="option" aria-selected={selected} aria-disabled={disabled}>
      <button
        type="button"
        tabIndex={disabled ? -1 : 0}
        disabled={disabled}
        className={cn(
          "flex w-full items-center px-4 py-2.5 text-left text-sm text-on-surface transition-colors",
          "hover:bg-surface-container-low",
          "focus-visible:bg-surface-container-low focus-visible:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          selected && "bg-secondary-fixed font-medium text-secondary",
          className,
        )}
        onClick={() => {
          if (!disabled) selectValue(value);
        }}
      >
        {children}
      </button>
    </li>
  );
}

function Select(props: SelectProps) {
  return <SelectRoot {...props} />;
}

Select.Label = SelectLabel;
Select.Trigger = SelectTrigger;
Select.Content = SelectContent;
Select.Item = SelectItem;

export { Select };
