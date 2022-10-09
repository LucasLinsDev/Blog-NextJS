import React from "react";
import BlogImage from "../components/BlogPost/BlogImage";
import Colunista from "../components/BlogPost/Colunista";
import Info from "../components/BlogPost/Info";
import TextBlog from "../components/BlogPost/TextBlog";
import Box from "../components/Box";
import Footer from "../components/Footer/footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Row from "../components/Row";
import PageTitle from "../components/SearchPage/PageHeader";

const BlogPost = ()=>{
  return(
    <React.Fragment>
      <Header/>
      <PageTitle/>
      <Colunista/>
      <Layout width={800}>
         <BlogImage/>
         <TextBlog>
          <h1>Esse aqui é o primeiro título</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium purus viverra. Sit eget volutpat semper vitae metus, fringilla ullamcorper sapien nibh.</p>
          <h1>Esse aqui é o primeiro título</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium purus viverra. Sit eget volutpat semper vitae metus, fringilla ullamcorper sapien nibh.</p>
          
         </TextBlog>
         <Info/>
      </Layout>
      <Footer/>
    </React.Fragment>
  )
}

export default BlogPost;