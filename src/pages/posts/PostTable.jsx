// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { deletePost, getPost } from './postService';
// import { Fab } from '@mui/material';
// import { AddIcCallOutlined, AddOutlined, Create } from '@mui/icons-material';
// import { useNavigate } from 'react-router';
// import { DeleteFilled } from '@ant-design/icons';


// // function createData(
// //     name,
// //     calories,
// //     fat,
// //     carbs,
// //     protein,
// // ) {
// //     return { name, calories, fat, carbs, protein };
// // }

// // const rows = [
// //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //     createData('Eclair', 262, 16.0, 24, 6.0),
// //     createData('Cupcake', 305, 3.7, 67, 4.3),
// //     createData('Gingerbread', 356, 16.0, 49, 3.9),
// // ];

// export default function PostTable() {

//     const navigate = useNavigate();
//     const [rows, setRows] = React.useState([]);
//     const fetchData = async () => {
//         try {
//             const data = await getPost();

//             setRows(data);
//         } catch (error) {
//             console.error('Error fetching posts:', error);
//         }
//     };
//     React.useEffect(() => {


//         fetchData();
//     }, []);

//     const ondelete = async (id) => {
//         try {
//             const data = await deletePost(id);
//         } catch (error) {
//             console.error('Error fetching posts:', error);
//         }
//         fetchData();
//     }
//     return (
//         // <TableContainer component={Paper}>
//         //     <button onClick={() => {
//         //         navigate('/postform');
//         //     }}>

//         //         <Fab color="primary" aria-label="add" >
//         //             <AddOutlined />
//         //         </Fab>
//         //     </button>
//         //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         //         <TableHead>
//         //             <TableRow>
//         //                 <TableCell>Title</TableCell>
//         //                 <TableCell>Content</TableCell>
//         //                 <TableCell>Image</TableCell>
//         //                 <TableCell>Action</TableCell>
//         //             </TableRow>
//         //         </TableHead>
//         //         <TableBody>
//         //             {rows.map((row) => (
//         //                 <TableRow
//         //                     key={row.name}
//         //                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//         //                 >
//         //                     <TableCell component="th" scope="row">
//         //                         {row.title}
//         //                     </TableCell>
//         //                     <TableCell >{row.content}</TableCell>
//         //                     <TableCell  ><img src={`http://localhost:3001/${row.file}`} height={50} width={50} /></TableCell>
//         //                     <TableCell>
//         //                         <button onClick={() => { ondelete(row.id) }}>
//         //                             <Fab color="error" aria-label="add" size='medium'>
//         //                                 <DeleteFilled />
//         //                             </Fab></button>
//         //                         <button onClick={() => { navigate(`/updatepostform/${row.id}`) }}>
//         //                             <Fab color="success" aria-label="add" size='medium'>
//         //                                 <Create />
//         //                             </Fab></button>
//         //                     </TableCell>
//         //                 </TableRow>
//         //             ))}
//         //         </TableBody>
//         //     </Table>
//         // </TableContainer>
//         <TableContainer component={Paper} style={{ justifyContent: "center", alignContent: "center" }}>
//             <Fab
//                 onClick={() => {
//                     navigate('/postform');
//                 }}
//                 style={{ position: 'absolute', top: 70, right: 20 }}
//                 color="primary"
//                 aria-label="add"
//                 size='medium'
//             >
//                 <AddOutlined />
//             </Fab>
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Title</TableCell>
//                         <TableCell>Content</TableCell>
//                         <TableCell>Image</TableCell>
//                         <TableCell>Action</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <TableRow key={row.id}>
//                             <TableCell component="th" scope="row">
//                                 {row.title}
//                             </TableCell>
//                             <TableCell>{row.content}</TableCell>
//                             <TableCell>
//                                 <img src={`http://localhost:3001/${row.file}`} alt={row.title} style={{ maxHeight: 50, maxWidth: 50 }} />
//                             </TableCell>
//                             <TableCell>
//                                 <Fab
//                                     onClick={() => { ondelete(row.id) }}
//                                     color="error"
//                                     aria-label="delete"
//                                     size='small'
//                                     style={{ marginRight: 10 }}
//                                 >
//                                     <DeleteFilled />
//                                 </Fab>
//                                 <Fab
//                                     onClick={() => { navigate(`/updatepostform/${row.id}`) }}
//                                     color="success"
//                                     aria-label="update"
//                                     size='small'
//                                 >
//                                     <Create />
//                                 </Fab>
//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }
import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Fab, Box, Typography, IconButton, Tooltip, Grid } from '@mui/material';
import { AddOutlined, Create, Delete } from '@mui/icons-material';
import { deletePost, getPost } from './postService';
import { useNavigate } from 'react-router';

export default function PostTable() {
    const navigate = useNavigate();
    const [rows, setRows] = React.useState([]);

    const fetchData = async () => {
        try {
            const data = await getPost();
            setRows(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    const onDelete = async (id) => {
        try {
            await deletePost(id);
            fetchData();
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" p={3}>
            <Grid container justifyContent="space-between" alignItems="center" style={{ width: '90%', margin: '0 auto' }}>
                <Grid item>
                    <Typography variant="h2" gutterBottom>
                        Posts
                    </Typography>
                </Grid>
                <Grid item>
                    <Fab
                        onClick={() => navigate('/postform')}
                        color="primary"
                        aria-label="add"
                        size='medium'
                    >
                        <AddOutlined />
                    </Fab>
                </Grid>
            </Grid>
            <TableContainer component={Paper} style={{ width: '90%', marginTop: 20, padding: 20 }}>
                <Table sx={{ minWidth: 650 }} aria-label="post table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontSize: 15 }}><strong>Title</strong></TableCell>
                            <TableCell style={{ fontSize: 15 }}><strong>Content</strong></TableCell>
                            <TableCell style={{ fontSize: 15 }}><strong>Image</strong></TableCell>
                            <TableCell style={{ fontSize: 15 }}><strong>Actions</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id} hover>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell>{row.content}</TableCell>
                                <TableCell>
                                    <img
                                        src={row.file ? `http://localhost:3001/${row.file}` : 'placeholder-image-url'}
                                        alt={row.title}
                                        style={{ maxHeight: 50, maxWidth: 50 }}
                                        onError={(e) => e.target.src = 'placeholder-image-url'}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Tooltip title="Delete">
                                        <IconButton
                                            onClick={() => onDelete(row.id)}
                                            color="error"
                                            aria-label="delete"
                                            size="small"
                                            style={{ marginRight: 10 }}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Edit">
                                        <IconButton
                                            onClick={() => navigate(`/updatepostform/${row.id}`)}
                                            color="primary"
                                            aria-label="edit"
                                            size="small"
                                        >
                                            <Create />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
