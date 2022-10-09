import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Row from '../components/Row';
import Card from '../components/SearchPage/Card';
import PageTitle from '../components/SearchPage/PageHeader';

const Search = () =>{
  return(
    <React.Fragment>
      <Header/>
      <Layout>
        <PageTitle/>
        <Row display='flex' gap={16} wrap='wrap' >
          {[1,2,3].map(()=>(
            <Card/>
          ))}
        </Row>
          <Row display='flex' gap={16} wrap='wrap' title={'Post Relacionados'}>
          {[1,2,3].map(()=>(
            <Card/>
          ))}
        </Row>
      </Layout>
    </React.Fragment>
  )
}

export default Search;