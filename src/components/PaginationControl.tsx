import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

export interface PaginationControlProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const PaginationControl = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationControlProps) => {
  const getPages = () => {
    const pages: (number | "...")[] = [];
    const siblingCount = 1;

    const left = Math.max(currentPage - siblingCount, 1);
    const right = Math.min(currentPage + siblingCount, totalPages);

    if (left > 1) {
      pages.push(1);
      if (left > 2) pages.push("...");
    }

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < totalPages) {
      if (right < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPages();

  return (
    <Pagination className={cn("mt-5", className)}>
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
            className={cn(
              "rounded ml-2",
              currentPage === 1 && "pointer-events-none opacity-50",
            )}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {pages.map((page, index) => (
          <PaginationItem key={index}>
            {page === "..." ? (
              <span className="px-3 text-muted-foreground">...</span>
            ) : (
              <PaginationLink
                onClick={() => onPageChange(Number(page))}
                className={cn(
                  "rounded px-4 py-2 font-medium transition-colors",
                  page === currentPage
                    ? "bg-main text-white hover:bg-main hover:text-white"
                    : "",
                )}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
            className={cn(
              "rounded mr-2",
              currentPage === totalPages && "pointer-events-none opacity-50",
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationControl;
