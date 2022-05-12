import { useState } from 'react';
import { Page, Layout, EmptyState } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import type { SelectPayload } from '@shopify/app-bridge/actions/ResourcePicker';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

export function EmptyStatePage({ setSelection }) {
  const [open, setOpen] = useState(false);

  const handleSelection = (resources: SelectPayload) => {
    setOpen(false);
    const productIds = resources.selection.map((product) => product.id);
    setSelection(productIds);
  };

  return (
    <Page>
      <TitleBar title="test title" />
      <ResourcePicker // Resource picker component
        resourceType="Product"
        showVariants={false}
        open={open}
        onSelection={(resources) => handleSelection(resources)}
        onCancel={() => setOpen(false)}
      />
      <Layout>
        <EmptyState
          heading="Discount your products temporarily"
          action={{
            content: 'Select products',
            onAction: () => setOpen(true),
          }}
          image={img}
          imageContained
        >
          <p>Select products to change their price temporarily.</p>
        </EmptyState>
      </Layout>
    </Page>
  );
}
