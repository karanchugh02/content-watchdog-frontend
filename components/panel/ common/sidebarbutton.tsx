import React from 'react';

type Props = { title: string };

function Sidebarbutton({ title }: Props) {
  return <button className="text-white">{title}</button>;
}

export default Sidebarbutton;
