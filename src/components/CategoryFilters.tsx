import { categories } from "@/data/events";

type CategoryFilter = (typeof categories)[number];

interface CategoryFilterProps {
  active: CategoryFilter;
  onChange: (category: CategoryFilter) => void;
}

const CategoryFilters = ({ active, onChange }: CategoryFilterProps) => (
  <div
    role="tablist"
    aria-label="Filter events by category"
    className="flex flex-wrap gap-2 rounded-full border border-border/60 bg-card p-1.5 shadow-soft"
  >
    {categories.map((cat) => {
      const isActive = active === cat;
      return (
        <button
          key={cat}
          role="tab"
          aria-selected={isActive}
          onClick={() => onChange(cat)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-base ${
            isActive
              ? "bg-foreground text-background shadow-soft"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {cat}
        </button>
      );
    })}
  </div>
);

export default CategoryFilters;
