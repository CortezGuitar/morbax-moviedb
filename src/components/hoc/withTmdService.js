import React from 'react';
import { TmdServiceConsumer } from '../../services';

export default WrappedComponent => {
  const withTmdService = ({ ...props }) => {
    return (
      <TmdServiceConsumer>
        {tmdService => {
          return <WrappedComponent {...props} tmdService={tmdService} />;
        }}
      </TmdServiceConsumer>
    );
  };

  return withTmdService;
};
