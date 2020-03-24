import * as React from 'react';
import { mergeStyleSets, FontWeights } from 'office-ui-fabric-react';
import { IAnimationDetailProps } from './AnimationDetail.types';

import { AnimationExample } from '../index';

const styles = mergeStyleSets({
  root: {
    display: 'flex',
  },
  exampleWrapper: {
    marginRight: 12,
  },
  detailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 4,
  },
  detailTitle: {
    fontSize: '14px',
    fontWeight: FontWeights.semibold,
    marginBottom: 4,
  },
});

export const AnimationDetail: React.FunctionComponent<IAnimationDetailProps> = props => {
  const { animation, coreClass, reactVariable } = props;

  return (
    <div className={styles.root}>
      <div className={styles.exampleWrapper}>
        <AnimationExample animation={coreClass} />
      </div>
      <div className={styles.detailsWrapper}>
        <div>
          <div className={styles.detailTitle}>Animation</div>
          <span>{animation}</span>
        </div>
        <div>
          <div className={styles.detailTitle}>Core variable/mixin/class</div>
          <span>{coreClass}</span>
        </div>
        <div>
          <div className={styles.detailTitle}>React variable</div>
          <span>{reactVariable}</span>
        </div>
      </div>
    </div>
  );
};
