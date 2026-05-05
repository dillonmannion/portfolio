# Libraries

- `src/lib/pagination.ts`
  - function paginate: (items, options) => PaginationResult<T>
  - function getPaginationMeta: (totalItems, options) => void
  - function normalizePage: (page, maxPage) => number
  - interface PaginationOptions
  - interface PaginationResult
- `src/lib/remark-code-meta.ts` — function remarkCodeMeta: () => void
- `src/lib/utils.ts` — function cn: (...inputs) => void, function formatDate: (date) => void
