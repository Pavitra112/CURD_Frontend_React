// import React, { useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { Typography } from '@mui/material';

// const ImageDropzone = ({ onImageSelected }) => {
//     const onDrop = useCallback((acceptedFiles) => {
//         if (acceptedFiles && acceptedFiles.length > 0) {
//             const file = acceptedFiles[0];
//             onImageSelected(file);
//         }
//     }, [onImageSelected]);

//     const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//     return (
//         <div {...getRootProps()} style={dropzoneStyles}>
//             <input {...getInputProps()} />
//             {isDragActive ? (
//                 <Typography variant="subtitle1">Drop the image here...</Typography>
//             ) : (
//                 <Typography variant="subtitle1">Drag 'n' drop an image here, or click to select</Typography>
//             )}
//         </div>
//     );
// };

// const dropzoneStyles = {
//     border: '2px dashed #eeeeee',
//     borderRadius: '4px',
//     padding: '20px',
//     textAlign: 'center',
//     cursor: 'pointer',
//     marginTop: '16px',
// };

// export default ImageDropzone;
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Typography } from '@mui/material';
import { useField, useFormikContext } from 'formik';

const ImageDropzone = ({ onImageSelected }) => {
    const { setFieldValue, setFieldTouched } = useFormikContext();
    const [field, meta] = useField('file');

    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            setFieldValue('file', file);
            setFieldTouched('file', true);
            onImageSelected(file);
        }
    }, [setFieldValue, setFieldTouched, onImageSelected]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div>
            <div {...getRootProps()} style={dropzoneStyles}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <Typography variant="subtitle1">Drop the image here...</Typography>
                ) : (
                    <Typography variant="subtitle1">Drag 'n' drop an image here, or click to select</Typography>
                )}
            </div>
            {meta.touched && meta.error ? (
                <Typography variant="body2" color="error" style={{ marginTop: '8px' }}>
                    {meta.error}
                </Typography>
            ) : null}
        </div>
    );
};

const dropzoneStyles = {
    border: '2px dashed #eeeeee',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    marginTop: '16px',
};

export default ImageDropzone;
