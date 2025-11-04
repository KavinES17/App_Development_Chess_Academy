import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MentorHomepage = ({ type }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        img: '',
        content: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id]); // Fetch data if id is available (when editing an existing course)

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8091/courses/${id}`);
            const data = response.data;
            setFormData({
                title: data.title || '',
                description: data.description || '',
                img: data.img || '',
                content: data.content || '',
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleUpdate = async (event) => {
        event.preventDefault();

        const newErrors = {};
        if (!formData.title) {
            newErrors.title = 'Please enter the Course Name';
        }
        if (!formData.description) {
            newErrors.description = 'Please enter the Course Description';
        }
        if (!formData.img) {
            newErrors.img = 'Please provide an image source';
        }
        if (!formData.content) {
            newErrors.content = 'Please provide the Level of the Course';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.put(`http://localhost:8091/courses/${id}`, formData);
                console.log(response);
                navigate('/mentorstart'); // Redirect to another page after successful submission
            } catch (error) {
                console.error('Error submitting data:', error);
            }
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        const newErrors = {};
        if (!formData.title) {
            newErrors.title = 'Please enter the Course Name';
        }
        if (!formData.description) {
            newErrors.description = 'Please enter the Course Description';
        }
        if (!formData.img) {
            newErrors.img = 'Please provide an image source';
        }
        if (!formData.content) {
            newErrors.content = 'Please provide the Level of the Course';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:8091/courses/insertCourses', [formData]);
                console.log(response);
                navigate('/mentorstart'); // Redirect to another page after successful submission
            } catch (error) {
                console.error('Error submitting data:', error);
            }
        }
    };

    return (
        <div className='theentire'>
            <div className='Thefirst1'>
                <form >
                    <h1 style={{ color: 'lightblue' }}>COURSE ADDITION</h1>
                    <TextField
                        name="title"
                        label="Title name"
                        value={formData.title}
                        onChange={handleChange}
                        error={!!errors.title}
                        helperText={errors.title}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="description"
                        label="Course Description"
                        value={formData.description}
                        onChange={handleChange}
                        error={!!errors.description}
                        helperText={errors.description}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="img"
                        label="Image Source"
                        value={formData.img}
                        onChange={handleChange}
                        error={!!errors.img}
                        helperText={errors.img}
                        type="text"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        name="content"
                        label="Content"
                        value={formData.content}
                        onChange={handleChange}
                        error={!!errors.content}
                        helperText={errors.content}
                        type="text"
                        fullWidth
                        margin="normal"
                    />
                    { id?( <Button variant="contained" type="submit" onClick={handleUpdate}>Update</Button>):( <Button variant="contained" type="submit" onClick={handleSubmit}>Send to Admin</Button>)}
                   
                </form>
            </div>
        </div>
    );
}

export default MentorHomepage;
