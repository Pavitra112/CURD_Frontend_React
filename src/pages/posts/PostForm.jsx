
// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { TextField, Button, Typography, Grid } from '@mui/material';
// import ImageDropzone from './ImageDropzone';
// import { createPost, deletePost } from './postService';
// import { useNavigate } from 'react-router';
// import * as Yup from 'yup';
// const initialValues = {
//     title: '',
//     content: '',
//     file: null,
// };
// const validationSchema = Yup.object({
//     title: Yup.string().required('Title is required'),
//     content: Yup.string().required('Content is required'),
//     file: Yup.mixed()
//         .required('Image is required')
//         .test('fileSize', 'File Size is too large', value => value && value.size <= 2 * 1024 * 1024)
//         .test('fileType', 'Unsupported File Format', value => value && ['image/jpeg', 'image/png'].includes(value.type)),

// });


// const PostForm = () => {
//     const [imageFile, setImageFile] = useState(null);
//     const navigate = useNavigate();
//     const onSubmit = async (values, { resetForm }) => {
//         values.file = imageFile
//         console.log(values.file);
//         try {
//             console.log(values);
//             const formData = new FormData();
//             formData.append("title", values.title);
//             formData.append("content", values.content);
//             formData.append("file", values.file);
//             console.warn(formData);
//             const data = await createPost(formData);
//             resetForm();
//             setImageFile(null);
//             console.log(data);
//             navigate("/post");

//         } catch (error) {
//             console.error('Error fetching posts:', error);
//         }
//         resetForm();
//     };



//     const handleImageSelected = (file, formik) => {
//         setImageFile(file);
//     };

//     // Render the form
//     return (
//         // <Formik initialValues={initialValues} onSubmit={onSubmit}>
//         //     {({ isSubmitting }) => (
//         //         <Form>
//         //             <Typography variant="h6" gutterBottom>
//         //                 Create Post
//         //             </Typography>
//         //             <Field name="title">
//         //                 {({ field }) => (
//         //                     <TextField
//         //                         {...field}
//         //                         label="Title"
//         //                         variant="outlined"
//         //                         fullWidth
//         //                         margin="normal"
//         //                     />
//         //                 )}
//         //             </Field>
//         //             <Field name="content">
//         //                 {({ field }) => (
//         //                     <TextField
//         //                         {...field}
//         //                         label="Content"
//         //                         variant="outlined"
//         //                         fullWidth
//         //                         multiline
//         //                         rows={4}
//         //                         margin="normal"
//         //                     />
//         //                 )}
//         //             </Field>
//         //             <ImageDropzone onImageSelected={handleImageSelected} />
//         //             {imageFile && (
//         //                 <div>
//         //                     <Typography variant="subtitle1" gutterBottom>
//         //                         Image Preview:
//         //                     </Typography>
//         //                     <img src={URL.createObjectURL(imageFile)} alt="Preview" style={{ maxWidth: '20%' }} />
//         //                 </div>
//         //             )}
//         //             <Button
//         //                 type="submit"
//         //                 variant="contained"
//         //                 color="primary"
//         //                 disabled={isSubmitting}
//         //                 style={{ marginTop: '16px' }}
//         //             >
//         //                 Submit
//         //             </Button>
//         //         </Form>
//         //     )}
//         // </Formik>
//         <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}
//         >
//             {({ isSubmitting }) => (
//                 <Form>
//                     <Typography variant="h6" gutterBottom>
//                         Create Post
//                     </Typography>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12}>
//                             <Field name="title">
//                                 {({ field }) => (
//                                     <TextField
//                                         {...field}
//                                         label="Title"
//                                         variant="outlined"
//                                         fullWidth
//                                         margin="normal"
//                                         error={Boolean(ErrorMessage)}
//                                         helperText={<ErrorMessage name="title" />}
//                                     />
//                                 )}
//                             </Field>
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Field name="content">
//                                 {({ field }) => (
//                                     <TextField
//                                         {...field}
//                                         label="Content"
//                                         variant="outlined"
//                                         fullWidth
//                                         multiline
//                                         rows={4}
//                                         margin="normal"
//                                         error={Boolean(ErrorMessage)}
//                                         helperText={<ErrorMessage name="content" />}
//                                     />
//                                 )}
//                             </Field>
//                         </Grid>
//                         <Grid item xs={12}>
//                             <ImageDropzone onImageSelected={handleImageSelected} />
//                         </Grid>
//                         {imageFile && (
//                             <Grid item xs={12}>
//                                 <Typography variant="subtitle1" gutterBottom>
//                                     Image Preview:
//                                 </Typography>
//                                 <img
//                                     src={URL.createObjectURL(imageFile)}
//                                     alt="Preview"
//                                     style={{ maxWidth: '100%', height: 'auto', marginTop: '8px' }}
//                                 />
//                             </Grid>
//                         )}
//                         <Grid item xs={12}>
//                             <Button
//                                 type="submit"
//                                 variant="contained"
//                                 color="primary"
//                                 disabled={isSubmitting}
//                                 style={{ marginTop: '16px' }}
//                             >
//                                 Submit
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default PostForm;
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Typography, Grid, IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ImageDropzone from './ImageDropzone';
import { createPost } from './postService';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

const initialValues = {
    title: '',
    content: '',
    file: null,
};

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required'),
    file: Yup.mixed()
        .required('Image is required')
        .test('fileSize', 'File Size is too large', value => value && value.size <= 2 * 1024 * 1024)
        .test('fileType', 'Unsupported File Format', value => value && ['image/jpeg', 'image/png'].includes(value.type)),
});

const PostForm = () => {
    const [imageFile, setImageFile] = useState(null);
    const navigate = useNavigate();

    const onSubmit = async (values, { resetForm }) => {
        values.file = imageFile;
        try {
            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("content", values.content);
            formData.append("file", values.file);

            await createPost(formData);
            resetForm();
            setImageFile(null);
            navigate("/post");
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const handleImageSelected = (file) => {
        setImageFile(file);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" bgcolor="#f5f5f5" p={3}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                border={2}
                borderColor="#ddd"
                borderRadius={2}
                bgcolor="white"
                p={5}
                boxShadow={3}
            >
                <Box width="100%" display="flex" justifyContent="space-between" mb={2}>
                    <IconButton onClick={() => navigate(-1)} color="primary">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h4" align="center" gutterBottom>
                        Create Post
                    </Typography>
                    <Box width="48px" /> {/* Placeholder for the alignment of title */}
                </Box>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form style={{ width: '100%', maxWidth: '500px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field name="title">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Title"
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                error={Boolean(errors.title && touched.title)}
                                                helperText={<ErrorMessage name="title" />}
                                            />
                                        )}
                                    </Field>
                                </Grid>
                                <Grid item xs={12}>
                                    <Field name="content">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Content"
                                                variant="outlined"
                                                fullWidth
                                                multiline
                                                rows={4}
                                                margin="normal"
                                                error={Boolean(errors.content && touched.content)}
                                                helperText={<ErrorMessage name="content" />}
                                            />
                                        )}
                                    </Field>
                                </Grid>
                                <Grid item xs={12}>
                                    <ImageDropzone onImageSelected={handleImageSelected} />
                                </Grid>
                                {imageFile && (
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Image Preview:
                                        </Typography>
                                        <img
                                            src={URL.createObjectURL(imageFile)}
                                            alt="Preview"
                                            style={{ maxWidth: '100%', height: 'auto', marginTop: '8px' }}
                                        />
                                    </Grid>
                                )}
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        disabled={isSubmitting}
                                        fullWidth
                                        sx={{ mt: 3 }}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>
    );
};

export default PostForm;
