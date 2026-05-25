"use client";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <>
      <div className="category-filter" role="group" aria-label="Filter by category">
        {categories.map((cat) => {
          const isSelected = cat === selected;
          return (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              aria-pressed={isSelected}
              className={`category-pill${isSelected ? " category-pill--selected" : ""}`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <style>{`
        .category-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .category-pill {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 13px;
          font-family: var(--font-body);
          font-weight: 500;
          cursor: pointer;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--fg-2);
          transition:
            background 120ms ease-out,
            color 120ms ease-out,
            border-color 120ms ease-out;
        }

        .category-pill:hover {
          border-color: var(--fg-3);
          color: var(--fg-1);
        }

        .category-pill--selected {
          background: var(--fg-1);
          color: var(--bg-page);
          border-color: transparent;
        }

        .category-pill--selected:hover {
          background: var(--fg-2);
          color: var(--bg-page);
          border-color: transparent;
        }
      `}</style>
    </>
  );
}
