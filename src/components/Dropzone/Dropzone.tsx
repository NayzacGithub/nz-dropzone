import React from "react";

export interface DropzoneProps {
    onDrop: (acceptedFiles: File[], rejectedFiles: File[]) => void;
    appKey: string;
    disabled?: boolean;
    multiple?: boolean;
    accept?: string;
    placeholder?: string;

}

const Dropzone = (props: DropzoneProps) => {
    return (<></>);
}

export default Dropzone;