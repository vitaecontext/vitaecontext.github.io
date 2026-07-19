import { lazy, Suspense } from "react";

const InteractiveGraph = lazy(() => import("./VitaeGraph3D.jsx"));

function StaticPreview() {
  return (
    <div className="vg3d-static-preview" aria-hidden="true">
      <span className="vg3d-preview-node vg3d-preview-node--core">VitaeGraph</span>
      <span className="vg3d-preview-node vg3d-preview-node--projects">Projects</span>
      <span className="vg3d-preview-node vg3d-preview-node--education">Education</span>
      <span className="vg3d-preview-node vg3d-preview-node--indexes">Indexes</span>
      <span className="vg3d-preview-node vg3d-preview-node--agent">Agent retrieval</span>
      <span className="vg3d-preview-node vg3d-preview-node--outputs">Outputs</span>
    </div>
  );
}

export default function LazyVitaeGraph3D({ variant = "hero" }) {
  return (
    <Suspense
      fallback={(
        <div className="vg3d-lazy" role="status" aria-label="Loading interactive graph">
          <StaticPreview />
          <span className="vg3d-loading-label">Loading interactive graph…</span>
        </div>
      )}
    >
      <InteractiveGraph variant={variant} />
    </Suspense>
  );
}
