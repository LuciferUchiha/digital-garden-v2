import React from "react";
import Layout from "@theme/Layout";
import styled from "styled-components";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/firacode@6.2.0/distr/fira_code.css" />
        <Container>
          <p>Hi, my name is</p>
          <Name>George Rowlands !=</Name>
          <h2>Computer Science Student 👨‍💻</h2>
        </Container>
      </main>
    </Layout>
  );
}

const Name = styled.h1`
  font-family: 'Fira Code VF', monospace;
  color: var(--ifm-color-primary);
  font-size: 3rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 150px);
  margin: 3rem;
`;
