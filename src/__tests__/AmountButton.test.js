import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import AmountButton from '../components/AmountButton';

it("renders correctly", () => {
  const renderedA = render(<AmountButton kittenAmount={50} amount={50}/>)
  const componentA = renderedA.getByTestId('amount-button_a');

  expect(componentA).toBeTruthy()

  const renderedB = render(<AmountButton kittenAmount={50} amount={30}/>)
  const componentB = renderedB.getByTestId('amount-button_b');

  expect(componentB).toBeTruthy()

});
