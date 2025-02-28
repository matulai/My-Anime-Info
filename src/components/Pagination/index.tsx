import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css';

type PaginationApi = {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
};

type NavPaginationProps = {
  url: string;
  pagination: PaginationApi;
};

const Pagination = ({ url, pagination }: NavPaginationProps) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [lastModulePage, setLastModulePage] = useState<number>(0);

  useEffect(() => {
    if (pagination.current_page === 1) {
      setPagesFromFirstPage();
      return;
    } else if (pagination.current_page === pagination.last_visible_page) {
      setPagesFromLastPage();
      return;
    }

    if (
      pagination.current_page - 1 !== lastModulePage &&
      (pagination.current_page - 1) % 5 === 0
    ) {
      // Caso cuando vas hacia adelante
      const startPage = pagination.current_page - 1;
      setLastModulePage(startPage);
      setNewPages(startPage, 6);
    } else if (pagination.current_page === lastModulePage) {
      // Caso cuando vas hacia atras
      const startPage = lastModulePage - 5;
      setLastModulePage(startPage);
      setNewPages(startPage, 6);
    }
  }, [pagination.current_page]);

  const setNewPages = (startPage: number, cant: number) => {
    const newPageNumbers: number[] = [];
    for (
      let i = startPage;
      i <= startPage + cant && i <= pagination.last_visible_page;
      i++
    ) {
      if (i === 0) continue;
      newPageNumbers.push(i);
    }
    setPageNumbers(newPageNumbers);
  };

  const setPagesFromLastPage = () => {
    const startPage =
      pagination.last_visible_page - (pagination.last_visible_page % 5);
    setNewPages(startPage, 6);
    setLastModulePage(startPage);
  };

  const setPagesFromFirstPage = () => {
    setNewPages(1, 5);
    setLastModulePage(1);
  };

  return (
    <nav aria-label="page-navigation">
      <ul className="pagination">
        {pagination.current_page > 5 ? (
          <>
            <li className="page-item">
              <Link className="page-item-link" to={`${url}/1`}>
                1
              </Link>
            </li>
            <li className="page-item">...</li>
          </>
        ) : null}

        {pageNumbers.map((pageNumber) => (
          <li className="page-item" key={pageNumber}>
            <Link
              className={
                pageNumber == pagination.current_page
                  ? 'page-item-link-selected'
                  : 'page-item-link'
              }
              to={`${url}/${pageNumber}`}
            >
              {pageNumber}
            </Link>
          </li>
        ))}

        {pagination.current_page <=
        pagination.last_visible_page - (pagination.last_visible_page % 5) ? (
          <>
            <li className="page-item">...</li>
            <li className="page-item">
              <Link
                className="page-item-link"
                to={`${url}/${pagination.last_visible_page}`}
              >
                {pagination.last_visible_page}
              </Link>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
