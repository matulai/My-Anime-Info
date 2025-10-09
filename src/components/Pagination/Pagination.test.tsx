import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Pagination from './';
import '@testing-library/jest-dom';

test('Muestra la sección de paginacion al montarse', () => {
  const pagination = {
    current_page: 6,
    last_visible_page: 12,
    has_next_page: true,
  };
  const pageNumbers = [6, 7, 8, 9, 10];
  const url = '/top/anime';

  render(
    <MemoryRouter>
      <Pagination url={url} pagination={pagination} />
    </MemoryRouter>
  );

  const currentPageLink = screen.getByText('6');
  expect(currentPageLink).toHaveClass('page-item-link-selected');

  pageNumbers.forEach((num) => {
    const link = screen.getByText(String(num));
    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe(`${url}/${num}`);
  });

  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getAllByText('...').length).toBe(2);

  const lastLink = screen.getByText(String(pagination.last_visible_page));
  expect(lastLink).toBeInTheDocument();
  expect(lastLink.getAttribute('href')).toBe(
    `${url}/${pagination.last_visible_page}`
  );
});
