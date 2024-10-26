import React from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
// import  Link  from '@docusaurus/Link';
           

// Default export for Home component
export default function Home(): JSX.Element {
  return <Redirect to={useBaseUrl('/guides/Overview')}  />;
}
