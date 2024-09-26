import {
    Box,
    Card,
    Page,
    Text,
    BlockStack,
    InlineGrid,
    Divider,
    TextField,
  } from "@shopify/polaris";
  import { TitleBar } from "@shopify/app-bridge-react";
  
  export default function PricingPage() {
    return (
      <Page>
        <TitleBar title="Settings" />

      </Page>
    );
  }
  
  function Code({ children }: { children: React.ReactNode }) {
    return (
      <Box
        as="span"
        padding="025"
        paddingInlineStart="100"
        paddingInlineEnd="100"
        background="bg-surface-active"
        borderWidth="025"
        borderColor="border"
        borderRadius="100"
      >
        <code>{children}</code>
      </Box>
    );
  }
  