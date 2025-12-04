"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { pageType } from "@/_type/types";

export const PaginationI = ({ page, total, setPage }: pageType) => {
  const next = () => {
    if (page < total) setPage(page + 1);
  };
  const prev = () => {
    if (page > 1) setPage(page - 1);
  };
  const now = (ele: number) => {
    setPage(ele);
  };
  console.log(total);
  return (
    <Pagination className="justify-end w-full">
      {total > 2 && (
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={prev}
              aria-disabled={page === 1}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={page == 1}
              onClick={() => now(1)}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={page == 2}
              onClick={() => now(2)}
            >
              {page <= 2 || page == total ? 2 : <PaginationEllipsis />}
            </PaginationLink>
          </PaginationItem>

          {page > 2 && page != total && (
            <>
              {page != 3 && (
                <PaginationItem>
                  <PaginationLink href="#" onClick={() => now(page - 1)}>
                    {page - 1}
                  </PaginationLink>
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={page > 2}
                  onClick={() => now(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
              {page != total - 2 && page != total - 1 && (
                <PaginationItem>
                  <PaginationLink href="#" onClick={() => now(page + 1)}>
                    {page + 1}
                  </PaginationLink>
                </PaginationItem>
              )}
            </>
          )}
          {page != total - 1 && total != 3 && (
            <PaginationItem>
              <PaginationLink href="#">
                <PaginationEllipsis />
              </PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={page == total}
              onClick={() => now(total)}
            >
              {total}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={next}
              aria-disabled={page == total}
            />
          </PaginationItem>
        </PaginationContent>
      )}{" "}
      {total == 2 && (
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={prev}
              aria-disabled={page === 1}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={page == 1}
              onClick={() => now(1)}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={page == 2}
              onClick={() => now(2)}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={next}
              aria-disabled={page == total}
            />
          </PaginationItem>
        </PaginationContent>
      )}
    </Pagination>
  );
};
