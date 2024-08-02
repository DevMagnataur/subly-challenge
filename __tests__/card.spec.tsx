import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatusCard from '../src/components/Card/index';
import { IStatus } from '../src/types/index';

jest.mock('../src/utils/date.utils.ts', () => ({
  calculateTime: jest.fn(() => '2 hours ago'),
}));

describe('StatusCard Component', () => {
  const props = {
    cover: 'test-cover.jpg',
    name: 'Test Name',
    last_editied: '2023-12-31T12:00:00Z',
    status: IStatus.READY,
    languages: ['English', 'Spanish'],
  };

  test('renders correctly with status READY', () => {
    render(<StatusCard {...props} />);
    expect(screen.getByRole('img', { name: 'img' })).toBeInTheDocument();
    expect(screen.getByText('Test Name')).toBeInTheDocument();
    expect(screen.queryByText('Transcribing subtitles')).not.toBeInTheDocument();
    expect(screen.queryByText('An error occurred while processing your file.')).not.toBeInTheDocument();
  });

  test('renders correctly with status TRANSCRIBING', () => {
    render(<StatusCard {...{ ...props, status: IStatus.TRANSCRIBING }} />);
    expect(screen.getByText('Transcribing subtitles')).toBeInTheDocument();
  });

});