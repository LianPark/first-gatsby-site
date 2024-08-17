/* src/components/PageMeta.tsx */
 
import React from 'react';
 
interface PageMetaProps {
  title: string;
  description?: string;
}
 
export default function PageTitle({ title, description = 'Hello World' }: PageMetaProps) {
  return (
    <>
      <title>My Site | {title}</title>
      <meta name="description" content={description} />
    </>
  );
}