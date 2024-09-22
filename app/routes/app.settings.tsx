import {
  Box,
  Card,
  Page,
  Text,
  BlockStack,
  InlineGrid,
  TextField,
  Button
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useState } from "react";
import { Settings } from "app/constants";
import { Form, json, useLoaderData } from "@remix-run/react";

export async function loader() {
  let settings = {
    name: 'my App',
    description: 'This the description'
  }
  return json(settings)
}

export async function action({request} : any) {
  console.log('------------------------------------------------Hitted------------------------------------------------------');
  let settingdata = await request.formData();
  settingdata = Object.fromEntries(settingdata);
  console.log('------------------------------------------------ended------------------------------------------------------',settingdata);

  return json(settingdata)
}

export default function SettingsPage() {
  const loaderData = useLoaderData<Settings>();
  const [settings, setSettings] = useState<Settings>(loaderData);
  
  return (
    <Page>
      <TitleBar title="Settings" />
      <BlockStack gap={{ xs: "800", sm: "400" }}>
        <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
          <Box
            as="section"
            paddingInlineStart={{ xs: 400, sm: 0 }}
            paddingInlineEnd={{ xs: 400, sm: 0 }}
          >
            <BlockStack gap="400">
              <Text as="h3" variant="headingMd">
                Settings
              </Text>
              <Text as="p" variant="bodyMd">
                Update app settings pereferences
              </Text>
            </BlockStack>
          </Box>
          <Card roundedAbove="sm">
            <Form method="POST">
              <BlockStack gap="400">
                <TextField label="App name" name='name' value={settings.name} onChange={(value) => setSettings({...settings , name:value})}/>
                <TextField label="description" name="description" value={settings.description} onChange={(value) => setSettings({...settings ,description:value })}/>
                <Button submit={true}> Save </Button>
              </BlockStack>
            </Form>
          </Card>
        </InlineGrid>
      </BlockStack>
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
