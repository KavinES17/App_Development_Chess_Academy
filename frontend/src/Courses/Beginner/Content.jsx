import React from 'react'
import image1 from './chess4.jpeg'
import image2 from './chess.png'
import image3 from './chesscompe.png'
import image4 from './chess5.png'
import image5 from './chess6.png'
import image6 from './chess7.png'
import image7 from './chess 8.png'
import image8 from './Advanced1.png'
import image9 from './Advanced2.png'
import image10 from './Advanced3.png'
import '../Beginner/Content.css'
import { Button } from '@mui/material'
import Cart from './Cart'

const Content = ({ currentview, addCourse }) => {
    const courses = {
        beginner: [
            {
                name:"Beginner 3 month course",
                img: image7,
                description: "This course provides the exact beginners with the teachings of our intrinsic trainers to make them a best player in all the aspects of chess",
                details: [
                    "We provide various methodologies and tricks to make the betterment of the player",
                    "Valuable guidelines and tricks from grandmasters",
                    "Course is for about 3-4 months"
                ]
            },
            {
                name:"Beginner 6 month course",
                img: image2,
                description: "This course provides the exact beginners with the teachings of our intrinsic trainers to make them a best player in all the aspects of chess",
                details: [
                    "We provide various methodologies and tricks to make the betterment of the player",
                    "Valuable guidelines and tricks from grandmasters",
                    "Course is for about 3-4 months"
                ]
            },
            {
                name:"Beginner 1 year course",
                img: image3,
                description: "This course provides the exact beginners with the teachings of our intrinsic trainers to make them a best player in all the aspects of chess",
                details: [
                    "We provide various methodologies and tricks to make the betterment of the player",
                    "Valuable guidelines and tricks from grandmasters",
                    "Course is for about 3-4 months"
                ]
            }
        ],
        intermediate: [
            {
                name:"Intermediate 3  month course",
                img: image4,
                description: "This course provides the Intermediate with the teachings of our intrinsic trainers to make them a best player in all the aspects of chess",
                details: [
                    "We provide various methodologies and tricks to make the betterment of the player",
                    "Valuable guidelines and tricks from grandmasters",
                    "Course is for about 3-4 months"
                ]
            },
            {
                name:"Intermediate 6 month course",
                img: image5,
                description: "This course provides the Intermediate with the teachings of our intrinsic trainers to make them a best player in all the aspects of chess",
                details: [
                    "We provide various methodologies and tricks to make the betterment of the player",
                    "Valuable guidelines and tricks from grandmasters",
                    "Course is for about 3-4 months"
                ]
            },
            {
                name:"Intermediate 1 year course",
                img: image6,
                description: "This course provides the Intermediate with the teachings of our intrinsic trainers to make them a best player in all the aspects of chess",
                details: [
                    "We provide various methodologies and tricks to make the betterment of the player",
                    "Valuable guidelines and tricks from grandmasters",
                    "Course is for about 3-4 months"
                ]
            }
        ],
        advanced: [
            {
                name:"Advanced 2 month course",
                img: image8,
                description: "This course provides the Advanced with the teachings of our intrinsic trainers to make them a best player in all the aspects of chess",
                details: [
                    "We provide various methodologies and tricks to make the betterment of the player",
                    "Valuable guidelines and tricks from grandmasters",
                    "Course is for about 3-4 months"
                ]
            },
            {
                name:"Advanced 6 month course",
                img: image9,
                description: "This course provides the Advanced with the teachings of our intrinsic trainers to make them a best player in all the aspects of chess",
                details: [
                    "We provide various methodologies and tricks to make the betterment of the player",
                    "Valuable guidelines and tricks from grandmasters",
                    "Course is for about 3-4 months"
                ]
            },
            {
                name:"Advanced 1 year course",
                img: image10,
                description: "This course provides the Advanced with the teachings of our intrinsic trainers to make them a best player in all the aspects of chess",
                details: [
                    "We provide various methodologies and tricks to make the betterment of the player",
                    "Valuable guidelines and tricks from grandmasters",
                    "Course is for about 3-4 months"
                ]
            }
        ]
    };

    return (
        <div>
            {courses[currentview].map((course, index) => ( 
                <div key={index} className='begin1'>
                    <div className='container'>
                        <div className='photo'>
                            <img src={course.img} style={{ height: "210px", width: "200px", objectFit: "cover" }} className='image' />
                            <br></br>
                            </div>
                            <br></br>
                            <h2>{course.name}</h2>
                        <div className='text'>
                            <h4>{course.description}</h4>
                            {course.details.map((detail, i) => (
                                
                                <li key={i}>{detail}</li>
                            ))}
                            <br /><br />
                            <Button variant='contained' onClick={() => addCourse(course)}>Buy this course</Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Content;
