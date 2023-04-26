import React,{useState, useEffect} from "react";
import {Navbar,Nav,Container,Card} from "react-bootstrap";
import styles from "./NewsNav.module.scss";

const NewsNav=()=>{
    const [newsData, setNewsData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("general");

    
    useEffect(() =>{
        // Fetch news data from API and store it in state
        async function fetchNewsData() {
            const response = await fetch(
                `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=5eb5719eda5d4d7d9a9134effc82920f`
            );
            const data = await response.json();
            setNewsData(data.articles);
            
        }
        fetchNewsData();
    },[selectedCategory]);


        function handleCategorySelect(category) {
            setSelectedCategory(category);
          }
        
        return (
            <>
                <Navbar bg="light" expand="lg" className={styles.Navbar}>
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Nav className={styles.Nav}>
                                <Nav.Link className={styles.Link} onClick={() => handleCategorySelect("general")}>
                                    General
                                </Nav.Link>
                                <br/>
                                <Nav.Link  className={styles.Link} onClick={() => handleCategorySelect("business")}>
                                    Business
                                </Nav.Link>
                                <br/>
                                <Nav.Link className={styles.Link} onClick={() => handleCategorySelect("sports")}>
                                    Sports
                                </Nav.Link>
                                <br/>
                                <Nav.Link className={styles.Link} onClick={() => handleCategorySelect("technology")}>
                                    Technology
                                </Nav.Link>
                            </Nav>
                    </Container>
                    <Container>
                    {newsData.map((article) => (
                        <Card key={article.url} className={styles.card}>
                            <Card.Body>
                                <Card.Text>{article.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Container>
                </Navbar>

                
            </>
        );
    }
export default NewsNav;