import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {};

const ComponentsPageLayout = (props: Props) => {
  return (
    <><Outlet /></>
  );
};

export default ComponentsPageLayout;