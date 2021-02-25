import React from "react";
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO() {
    const data = useStaticQuery(graphql`
        query HeadQuery {
            allSite {
                nodes {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        }
    `)
    console.log(data);
    return (
      <Helmet>
          <html lang="en" />
          <meta charset="utf-8" />
          <title>{data.allSite.nodes[0].siteMetadata.title}</title>
          <meta name="description" content={data.allSite.nodes[0].siteMetadata.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>  
    ) 
}
  