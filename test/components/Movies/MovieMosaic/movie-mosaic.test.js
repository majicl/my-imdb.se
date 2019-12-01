import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, queryHelpers } from '@testing-library/react';
import MovieMosaic from '../../../../src/components/Movie/MovieMosaic/movie-mosaic';

function renderWithRoutes(props) {
  return {
    ...render(
      <MemoryRouter>
        <MovieMosaic {...props} />
      </MemoryRouter>
    )
  };
}

const queryByDataAt = queryHelpers.queryByAttribute.bind(null, 'data-at');

describe('<MovieMosaic />', () => {
  it('Favorite button should not be rendered in default props', () => {
    const { container } = renderWithRoutes({ movie: {} });
    const favIcon = queryByDataAt(container, 'favorite-icon');
    expect(favIcon).toBeNull();
  });

  it('Favorite button should be rendered if actionButtonAvailable prop is true', () => {
    const { container } = renderWithRoutes({
      movie: {},
      actionButtonAvailable: true
    });
    const favIcon = queryByDataAt(container, 'favorite-icon');
    expect(favIcon).toBeDefined();
  });
});
