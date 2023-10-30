/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogKangaroosCreateFormInputValues = {
    title?: string;
    content?: string;
};
export declare type BlogKangaroosCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogKangaroosCreateFormOverridesProps = {
    BlogKangaroosCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlogKangaroosCreateFormProps = React.PropsWithChildren<{
    overrides?: BlogKangaroosCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BlogKangaroosCreateFormInputValues) => BlogKangaroosCreateFormInputValues;
    onSuccess?: (fields: BlogKangaroosCreateFormInputValues) => void;
    onError?: (fields: BlogKangaroosCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogKangaroosCreateFormInputValues) => BlogKangaroosCreateFormInputValues;
    onValidate?: BlogKangaroosCreateFormValidationValues;
} & React.CSSProperties>;
export default function BlogKangaroosCreateForm(props: BlogKangaroosCreateFormProps): React.ReactElement;
