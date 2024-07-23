import type { CompositeStateReturn } from "@twilio-paste/reakit-library";

import type { FormPillInitialState } from "./useFormPillState";

// for the sake of documenting the types we rename the state hook types to append Props to the name, so we can docuemnt them and not cause a breaking change.
type FormPillStateReturnProps = CompositeStateReturn;
type FormPillInitialStateProps = FormPillInitialState;

export type { FormPillStateReturnProps, FormPillInitialStateProps };
export { FormPill } from "./FormPill";
export type { FormPillProps } from "./FormPill";
export { FormPillGroup } from "./FormPillGroup";
export type { FormPillGroupProps } from "./FormPillGroup";
export { useFormPillState } from "./useFormPillState";
export type { CompositeStateReturn as FormPillStateReturn, FormPillInitialState };
