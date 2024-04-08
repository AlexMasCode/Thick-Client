import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {BsFillPencilFill, BsFillTrashFill, BsPencil, BsTrash} from "react-icons/bs";
import Button from "react-bootstrap/Button";
import React, {} from "react";
import {removePost} from "../redux/features/post/postSlice";
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

function Posts(post) {
    const dispatch = useDispatch()
    let editId = post.post._id;
    const removePostHandler = () =>{
        try {
            dispatch(removePost(post.post._id))
            window.location.reload();
        } catch (e){
            console.log(e)
        }
    }
    return (
                <Col>
                    <Card>
                        <Card.Body xs={12} md={6} lg={4} className="mx-auto mb-4">
                            <div
                                className={
                                    post.post.imgUrl ? '' : ''
                                }
                            >
                                {post.post.imgUrl && (
                                    <Card.Img
                                        src={`http://localhost:3002/${post.post.imgUrl}`}
                                        variant="top"
                                        width="100" height="400"
                                    />
                                )}
                            </div>
                            <Card.Title>{post.post.name}</Card.Title>
                            <Card.Text>
                                <label htmlFor="">Genre:&nbsp;</label>
                                {post.post.genre}
                            </Card.Text>
                            <Card.Text>
                                <label htmlFor="">Author:&nbsp;</label>
                                {post.post.developer}
                            </Card.Text>
                            <Card.Text>
                                <label htmlFor="">Publication year:&nbsp;</label>
                                {post.post.price}
                            </Card.Text>


                            <Link to={`edit-book/${editId}`}>
                                <Button variant="success" className="mx-1">
                                    <BsPencil />
                                    Edit
                                </Button>
                            </Link>
                            <Button onClick={removePostHandler} variant="danger" className="mx-1">
                                <BsTrash />
                                Remove
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
    );
}

export default Posts;