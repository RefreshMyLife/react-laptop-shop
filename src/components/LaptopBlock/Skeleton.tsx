import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = (props: any) => (
  <ContentLoader
    className="laptop-block"
    speed={2}
    width={280}
    height={512}
    viewBox="0 0 280 512"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="23" y="214" rx="19" ry="19" width="230" height="27" />
    <rect x="0" y="257" rx="14" ry="14" width="280" height="182" />
    <rect x="164" y="454" rx="7" ry="7" width="110" height="35" />
    <rect x="5" y="458" rx="7" ry="7" width="113" height="27" />
    <rect x="7" y="4" rx="14" ry="14" width="260" height="200" />
  </ContentLoader>
);
