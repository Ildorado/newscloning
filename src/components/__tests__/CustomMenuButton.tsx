import React from 'react';
import CustomMenuButton from '../CustomMenuButton';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <CustomMenuButton
        onPress={() => console.log('pressed')}
        title="title1"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
