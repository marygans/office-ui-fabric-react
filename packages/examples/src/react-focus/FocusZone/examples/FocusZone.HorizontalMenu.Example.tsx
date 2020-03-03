import * as React from 'react';
import { createArray } from 'office-ui-fabric-react/lib/Utilities';
import { FocusZone, FocusZoneDirection } from '@fluentui/react-focus';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

const ITEMS = createArray(5, index => ({
  key: index.toString(),
  name: 'Item-' + index
}));

export const FocusZoneHorizontalMenuExample: React.FunctionComponent = () => {
  return (
    <FocusZone direction={FocusZoneDirection.domOrder} role="menubar">
      {ITEMS.map(item => (
        <DefaultButton key={item.name} role="menuitem">
          {item.name}
        </DefaultButton>
      ))}
    </FocusZone>
  );
};
