import * as React from 'react';
import cx from 'classnames';
import createSvgIcon from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

const EditIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(iconClassNames.outline, classes.outlinePart)}
          d="M21.613 9.176a2.276 2.276 0 0 1 1.21 1.21c.118.274.177.562.177.864 0 .297-.057.582-.172.855-.113.274-.276.52-.484.739l-8.993 9.008c-.02.02-.125.067-.312.14-.469.167-.98.331-1.54.492-.655.199-1.19.344-1.6.438A2.105 2.105 0 0 1 9.5 23a.479.479 0 0 1-.351-.148A.479.479 0 0 1 9 22.5c0-.067.026-.198.078-.39.099-.438.245-.974.438-1.61.161-.557.325-1.07.492-1.54.073-.187.12-.29.14-.312l9.008-8.992c.219-.208.465-.37.738-.484a2.198 2.198 0 0 1 1.719.004zM10.227 21.773l2.234-.64a1.895 1.895 0 0 0-.555-1.04 1.906 1.906 0 0 0-1.04-.554l-.64 2.234zm1.296-3.085a2.97 2.97 0 0 1 1.09.699c.316.315.549.678.7 1.09l6.968-6.985-1.773-1.773-6.985 6.969zm8.344-8.32l-.352-.352.352.351-.648.64 1.773 1.774.64-.648.352.351-.351-.351c.246-.245.367-.54.367-.883a1.283 1.283 0 0 0-.777-1.148 1.206 1.206 0 0 0-1.355.266z"
        />
        <path
          className={cx(iconClassNames.filled, classes.filledPart)}
          d="M11.261 19.656c.243.105.458.25.645.438s.334.402.438.644c.105.242.156.496.156.762 0 .224-.09.472-.274.742-.228.068-.433.133-.617.195-.588.204-1.096.36-1.523.47-.24.062-.435.093-.586.093a.479.479 0 0 1-.351-.148A.479.479 0 0 1 9 22.5c0-.182.057-.481.172-.898.052-.208.107-.399.164-.57l.188-.571c.01-.042.067-.216.172-.523l.132-.415c.23-.015.453-.023.672-.023.265 0 .52.052.761.156zm9.73-5.46l-7.522 7.538a.689.689 0 0 0 .03-.234 3.022 3.022 0 0 0-1.848-2.766 2.912 2.912 0 0 0-1.15-.234c-.1 0-.178.01-.235.031l7.538-7.523 3.188 3.187zm.622-5.02a2.276 2.276 0 0 1 1.21 1.21c.118.274.177.562.177.864 0 .448-.133.865-.399 1.25-.187.266-.488.597-.906.992l-3.187-3.187c.396-.417.726-.72.992-.907A2.164 2.164 0 0 1 20.75 9c.302 0 .59.059.863.176z"
        />
      </g>
    </svg>
  ),
  displayName: 'EditIcon',
});

export default EditIcon;
