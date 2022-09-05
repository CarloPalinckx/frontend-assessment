import { gql, useQuery } from "@apollo/client";
import {
  Button,
  NativeSelect,
  TextField,
  Box,
  Text,
  Heading,
  Card
  /**
   * Some other useful components:
   * PriceTag
   * Skeleton,
   * PriceTag,
   * Badge,
   * Modal,
   * ButtonGroup,
   */
} from "@myonlinestore/bricks";
import React, { useState } from "react";
import "./styles.css";

/**
 * Assignment suggestions:
 * - Display a list of products showing basic information
 * - Apply search and sort to the list
 * - Add a filter that only shows products belonging to a specific page
 * - Build a view that shows a product in more detail
 * - Make the products selectable for some actions:
 *   - Hide products in the list
 *   - Export some product info
 */

interface QueryResponse {
  store: {
    id: string;
    name: string;
    products: {
      edges: Array<{
        node: {
          name: string;
          price: string;
          stock: number;
        };
      }>;
    };
  };
}

const QUERY = gql`
  query {
    store(id: "YOUR_STAGE_STORE_UUID") {
      id
    }
  }
`;

const App = () => {
  const { data, loading, error } = useQuery<QueryResponse>(QUERY);

  return (
    <>
      <details>
        <summary>🐞</summary>
        <pre>
          {JSON.stringify(data, null, 2)}
          {JSON.stringify(error, null, 2)}
        </pre>
      </details>
      <Box $direction="column" $padding={[24]}>
        <Box>
          <TextField
            name=""
            value=""
            onChange={() => {
              return;
            }}
            placeholder="Zoeken..."
          />
          <NativeSelect
            value=""
            onChange={() => {
              return;
            }}
          >
            <option value="">Op prijs ↓</option>
            <option value="">Op prijs ↑</option>
            <option value="">Op alfabet ↑</option>
            <option value="">Op alfabet ↓</option>
          </NativeSelect>
        </Box>
        <Card $margin={[24, 0, 0, 0]} $padding={[24]} $direction="column">
          <Heading hierarchy={3}>Producten</Heading>
          <Text>Some text</Text>
        </Card>
        <Button
          $margin={[24, "auto", 0, 0]}
          variant="primary"
          title="Click here"
        />
      </Box>
    </>
  );
};

export default App;
