/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Test } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestUpdateFormInputValues = {};
export declare type TestUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestUpdateFormOverridesProps = {
    TestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type TestUpdateFormProps = React.PropsWithChildren<{
    overrides?: TestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    test?: Test;
    onSubmit?: (fields: TestUpdateFormInputValues) => TestUpdateFormInputValues;
    onSuccess?: (fields: TestUpdateFormInputValues) => void;
    onError?: (fields: TestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestUpdateFormInputValues) => TestUpdateFormInputValues;
    onValidate?: TestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TestUpdateForm(props: TestUpdateFormProps): React.ReactElement;
