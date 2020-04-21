import React from 'react';
import '../../styles/desktop/styles.scss';

export default function WorkSection(props) {
  const { item, attributesOrder, attributesDisplayName } = props;
  return (
    <div class="work_section_parent">
      <span className="work_title">{item.title}</span>
      {
        attributesOrder && attributesOrder.map(attribute => {
          return <span>{attributesDisplayName[attribute]}: {item[attribute]}</span>;
        })
      }
    </div>
  )
};
