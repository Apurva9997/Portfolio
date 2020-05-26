import React, { useContext } from 'react';
import '../../styles/desktop/styles.scss';
import Theme from '../../../../theme/theme.js';

export default function WorkSection(props) {
  const { item, attributesOrder, attributesDisplayName } = props;
  const theme = Theme();
  console.log(theme);
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
