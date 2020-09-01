import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const CustomPageTemplate = ({
  title,
}) => (
  <div className="content">
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
  </div>
);

CustomPageTemplate.propTypes = {
  title: PropTypes.string,
};

const CustomPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <CustomPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  );
};

CustomPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default CustomPage;

export const customPageQuery = graphql`
  query CustomPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;