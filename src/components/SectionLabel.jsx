/**
 * Section Label Component
 * Reusable label for section headers with index
 */
export function SectionLabel({ index, children }) {
  return (
    <div className="section-label">
      <span className="section-label__text">{children}</span>
    </div>
  );
}
