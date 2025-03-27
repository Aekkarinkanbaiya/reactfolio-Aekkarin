import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "articles");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Articles | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>
            <div className="page-content">
                <NavBar active="articles" />
                <div className="content-wrapper">
                    <div className="articles-logo-container">
                        <div className="articles-logo">
                            <Logo width={46} />
                        </div>
                    </div>
                    <div className="articles-container">
                        <div className="title articles-title">
                            My Transcript.
                        </div>
                        <div className="articles-images-container"> {/* Container สำหรับรูปภาพสองภาพ */}
                            <div className="articles-image-container">
                                <div className="articles-image-wrapper">
                                    <img
                                        src="Transcript1.jpg"
                                        alt="Transcript 1"
                                        className="articles-image"
                                    />
                                </div>
                            </div>
                            <div className="articles-image-container">
                                <div className="articles-image-wrapper">
                                    <img
                                        src="Transcript2.jpg"
                                        alt="Transcript 2"
                                        className="articles-image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="articles-list">
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Articles;