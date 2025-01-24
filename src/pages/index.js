import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Deleens Home Bake</h1>
    <Grid>
      {data.allFile.edges.map(({ node }) => {
        const image = getImage(node.childImageSharp)
        return <GatsbyImage key={node.id} image={image} alt={node.name} />
      })}
    </Grid>
  </Layout>
)

export const query = graphql`
  query {
    allFile(filter: { extension: { regex: "/(jpg|jpeg|png)/" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export default IndexPage
