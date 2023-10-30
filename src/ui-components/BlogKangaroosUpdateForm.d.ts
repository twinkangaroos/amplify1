/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BlogKangaroos } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogKangaroosUpdateFormInputValues = {
    title?: string;
    content?: string;
};
export declare type BlogKangaroosUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogKangaroosUpdateFormOverridesProps = {
    BlogKangaroosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlogKangaroosUpdateFormProps = React.PropsWithChildren<{
    overrides?: BlogKangaroosUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    blogKangaroos?: BlogKangaroos;
    onSubmit?: (fields: BlogKangaroosUpdateFormInputValues) => BlogKangaroosUpdateFormInputValues;
    onSuccess?: (fields: BlogKangaroosUpdateFormInputValues) => void;
    onError?: (fields: BlogKangaroosUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogKangaroosUpdateFormInputValues) => BlogKangaroosUpdateFormInputValues;
    onValidate?: BlogKangaroosUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BlogKangaroosUpdateForm(props: BlogKangaroosUpdateFormProps): React.ReactElement;
