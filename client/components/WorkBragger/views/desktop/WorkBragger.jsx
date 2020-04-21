import React from 'react';
import '../../styles/desktop/styles.scss';
import WorkSection from '../../../WorkSection/views/desktop/WorkSection';
import WorkSectionData from '../../../../data/zolo-projects';

export default function WorkBragger() {
  const WORK = WorkSectionData.applications.map((item, index) => {
    return (
      <WorkSection item={item} attributesOrder={WorkSectionData.attributesOrder} attributesDisplayName={WorkSectionData.attributesDisplayName} />
    )
  });
  return (
    <div className="work_bragger_parent">
      {WORK}
    </div>
  )
};
