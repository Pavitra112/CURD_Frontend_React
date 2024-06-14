
// import React, { useEffect, useState } from 'react';
// import { Formik, Form, Field } from 'formik';
// import { TextField, Button, Typography, Box, CircularProgress } from '@mui/material';
// import ImageDropzone from './ImageDropzone';
// import { getPostbyID, updatePost } from './postService';
// import { useNavigate, useParams } from 'react-router-dom';
// import * as Yup from 'yup';
// import { grey } from '@mui/material/colors';

// const UpdatePostForm = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [initialValues, setInitialValues] = useState({
//         title: '',
//         content: '',
//         file: '',
//     });
//     const [imageFile, setImageFile] = useState(null);
//     const [changeImage, setChangeImage] = useState(false);
//     const [loading, setLoading] = useState(true);

//     const validationSchema = Yup.object({
//         title: Yup.string().required('Title is required'),
//         content: Yup.string().required('Content is required'),
//         file: Yup.mixed().test('file', 'Image is required', value => {
//             if (!changeImage) return typeof value === 'string';
//             return value && value.size <= 2 * 1024 * 1024 && ['image/jpeg', 'image/png'].includes(value.type);
//         }),
//     });

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await getPostbyID(id);
//                 setInitialValues({
//                     title: data.title,
//                     content: data.content,
//                     file: data.file, // assuming data.file is a string URL or identifier for the image
//                 });
//                 setImageFile(data.file);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching post:', error);
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, [id]);

//     const onSubmit = async (values, { resetForm }) => {
//         try {
//             const formData = new FormData();
//             formData.append("title", values.title);
//             formData.append("content", values.content);
//             if (changeImage) {
//                 formData.append("file", imageFile);
//             } else {
//                 formData.append("file", values.file); // append the existing file URL/ID
//             }

//             await updatePost(formData, id);
//             resetForm();
//             setImageFile(null);
//             navigate("/post");
//         } catch (error) {
//             console.error('Error updating post:', error);
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setInitialValues((prevValues) => ({
//             ...prevValues,
//             [name]: value,
//         }));
//     };

//     const handleImageSelected = (file) => {
//         setImageFile(file);
//         setChangeImage(true);
//     };

//     if (loading) {
//         return <CircularProgress />;
//     }

//     return (
//         <Box display="flex" justifyContent="center" alignItems="center" border={2} borderColor={grey[400]} borderRadius={2} margin={5} padding={5} >
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationSchema}
//                 enableReinitialize
//                 onSubmit={onSubmit}
//             >
//                 {({ isSubmitting, errors, touched }) => (
//                     <Form style={{ width: '100%', maxWidth: '500px' }}>
//                         <Typography variant="h3" gutterBottom>
//                             Update Post
//                         </Typography>
//                         <Field name="title">
//                             {({ field }) => (
//                                 <TextField
//                                     {...field}
//                                     label="Title"
//                                     variant="outlined"
//                                     fullWidth
//                                     margin="normal"
//                                     error={touched.title && Boolean(errors.title)}
//                                     helperText={touched.title && errors.title}
//                                     onChange={handleInputChange}
//                                 />
//                             )}
//                         </Field>
//                         <Field name="content">
//                             {({ field }) => (
//                                 <TextField
//                                     {...field}
//                                     label="Content"
//                                     variant="outlined"
//                                     fullWidth
//                                     margin="normal"
//                                     multiline
//                                     rows={4}
//                                     error={touched.content && Boolean(errors.content)}
//                                     helperText={touched.content && errors.content}
//                                     onChange={handleInputChange}
//                                 />
//                             )}
//                         </Field>
//                         <ImageDropzone onImageSelected={handleImageSelected} />
//                         {imageFile && (
//                             <Box mt={2}>
//                                 <Typography variant="subtitle1" gutterBottom>
//                                     Image Preview:
//                                 </Typography>
//                                 {changeImage ? (
//                                     <img src={URL.createObjectURL(imageFile)} alt="Preview" style={{ maxWidth: '100%' }} />
//                                 ) : (
//                                     <img src={`http://localhost:3001/${imageFile}`} alt="Preview" style={{ maxWidth: '100%' }} />
//                                 )}
//                             </Box>
//                         )}
//                         {touched.file && errors.file && (
//                             <Typography color="error">{errors.file}</Typography>
//                         )}
//                         <Button
//                             type="submit"
//                             variant="contained"
//                             color="primary"
//                             disabled={isSubmitting}
//                             style={{ marginTop: '16px' }}
//                         >
//                             Submit
//                         </Button>
//                     </Form>
//                 )}
//             </Formik>
//         </Box>
//     );
// };

// export default UpdatePostForm;
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Typography, Box, CircularProgress, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ImageDropzone from './ImageDropzone';
import { getPostbyID, updatePost } from './postService';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { grey } from '@mui/material/colors';

const UpdatePostForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        title: '',
        content: '',
        file: '',
    });
    const [imageFile, setImageFile] = useState(null);
    const [changeImage, setChangeImage] = useState(false);
    const [loading, setLoading] = useState(true);

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        content: Yup.string().required('Content is required'),
        file: Yup.mixed().test('file', 'Image is required', value => {
            if (!changeImage) return typeof value === 'string';
            return value && value.size <= 2 * 1024 * 1024 && ['image/jpeg', 'image/png'].includes(value.type);
        }),
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPostbyID(id);
                setInitialValues({
                    title: data.title,
                    content: data.content,
                    file: data.file, // assuming data.file is a string URL or identifier for the image
                });
                setImageFile(data.file);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching post:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    const onSubmit = async (values, { resetForm }) => {
        try {
            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("content", values.content);
            if (changeImage) {
                formData.append("file", imageFile);
            } else {
                formData.append("file", values.file); // append the existing file URL/ID
            }

            await updatePost(formData, id);
            resetForm();
            setImageFile(null);
            navigate("/post");
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInitialValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleImageSelected = (file) => {
        setImageFile(file);
        setChangeImage(true);
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" bgcolor={grey[100
        ]} p={3}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                border={2}
                borderColor={grey[400]}
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
                        Update Post
                    </Typography>
                    <Box width="48px" /> {/* Placeholder for the alignment of title */}
                </Box>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    enableReinitialize
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form style={{ width: '100%', maxWidth: '500px' }}>
                            <Field name="title">
                                {({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Title"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        error={touched.title && Boolean(errors.title)}
                                        helperText={touched.title && errors.title}
                                        onChange={handleInputChange}
                                    />
                                )}
                            </Field>
                            <Field name="content">
                                {({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Content"
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        multiline
                                        rows={4}
                                        error={touched.content && Boolean(errors.content)}
                                        helperText={touched.content && errors.content}
                                        onChange={handleInputChange}
                                    />
                                )}
                            </Field>
                            <ImageDropzone onImageSelected={handleImageSelected} />
                            {imageFile && (
                                <Box mt={2}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Image Preview:
                                    </Typography>
                                    {changeImage ? (
                                        <img src={URL.createObjectURL(imageFile)} alt="Preview" style={{ maxWidth: '100%' }} />
                                    ) : (
                                        <img src={`http://localhost:3001/${imageFile}`} alt="Preview" style={{ maxWidth: '100%' }} />
                                    )}
                                </Box>
                            )}
                            {touched.file && errors.file && (
                                <Typography color="error" mt={2}>{errors.file}</Typography>
                            )}
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
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>
    );
};

export default UpdatePostForm;
