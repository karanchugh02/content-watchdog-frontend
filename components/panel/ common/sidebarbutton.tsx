import React from 'react';

type Props = { title: string };

function Sidebarbutton({ title }: Props) {
  return <button>{title}</button>;
}

export default Sidebarbutton;
