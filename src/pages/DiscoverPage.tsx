import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { tools, categories, pricingOptions, type Category, type Pricing, type Tool } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";
import { ToolDetailModal } from "@/components/ToolDetailModal";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DiscoverPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    searchParams.get("category") ? [searchParams.get("category") as Category] : []
  );
  const [selectedPricing, setSelectedPricing] = useState<Pricing[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [detailTool, setDetailTool] = useState<Tool | null>(null);

  const filtered = useMemo(() => {
    return tools.filter(t => {
      const q = query.toLowerCase();
      const matchesQuery = !q || t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q) || t.features.some(f => f.toLowerCase().includes(q));
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(t.category);
      const matchesPricing = selectedPricing.length === 0 || selectedPricing.includes(t.pricing);
      const matchesRating = t.rating >= minRating;
      return matchesQuery && matchesCategory && matchesPricing && matchesRating;
    });
  }, [query, selectedCategories, selectedPricing, minRating]);

  const toggleCategory = (cat: Category) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const togglePricing = (p: Pricing) => {
    setSelectedPricing(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);
  };

  return (
    <div className="min-h-screen pt-24 pb-32 px-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="glass-card flex items-center gap-3 p-2 flex-1 border-primary/20 focus-within:border-primary/40 transition-colors">
            <Search className="h-5 w-5 text-muted-foreground ml-3" />
            <input
              type="text"
              placeholder="Search tools..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none py-2"
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground mr-2">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "glass-card p-3 transition-colors",
              showFilters ? "border-primary/40 text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <SlidersHorizontal className="h-5 w-5" />
          </button>
        </div>

        <div className="flex gap-8">
          {/* Filters sidebar */}
          {showFilters && (
            <div className="w-60 shrink-0 hidden md:block space-y-6 animate-fade-in">
              <div>
                <h3 className="text-sm font-semibold mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => toggleCategory(cat)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                        selectedCategories.includes(cat)
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3">Pricing</h3>
                <div className="space-y-2">
                  {pricingOptions.map(p => (
                    <button
                      key={p}
                      onClick={() => togglePricing(p)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                        selectedPricing.includes(p)
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3">Min Rating: {minRating}</h3>
                <input
                  type="range"
                  min={0}
                  max={5}
                  step={0.5}
                  value={minRating}
                  onChange={e => setMinRating(Number(e.target.value))}
                  className="w-full accent-primary"
                />
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="flex-1">
            {/* Mobile filters */}
            {showFilters && (
              <div className="md:hidden flex flex-wrap gap-2 mb-6">
                {categories.map(cat => (
                  <button key={cat} onClick={() => toggleCategory(cat)} className={cn(selectedCategories.includes(cat) ? "pill-badge-active" : "pill-badge-default", "cursor-pointer")}>
                    {cat}
                  </button>
                ))}
              </div>
            )}

            <div className="text-sm text-muted-foreground mb-4">{filtered.length} tools found</div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold mb-2">No tools found</h3>
                <p className="text-muted-foreground text-sm">Try adjusting your search or filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.map(tool => (
                  <ToolCard key={tool.id} tool={tool} onViewDetails={setDetailTool} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <ToolDetailModal tool={detailTool} onClose={() => setDetailTool(null)} />
    </div>
  );
}
