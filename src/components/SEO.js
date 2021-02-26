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
          
          <meta property="og:type" content="website" />
          <meta property="og:title" content={data.allSite.nodes[0].siteMetadata.title} />
          <meta property="og:description" content={data.allSite.nodes[0].siteMetadata.description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={data.allSite.nodes[0].siteMetadata.title} />
          <meta name="twitter:description" content={data.allSite.nodes[0].siteMetadata.description} />
      </Helmet>  
    ) 
}
  