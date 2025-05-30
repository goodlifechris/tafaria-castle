// components/StructuredData.tsx
import Script from 'next/script';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function StructuredData({ data }: { data: any }) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}