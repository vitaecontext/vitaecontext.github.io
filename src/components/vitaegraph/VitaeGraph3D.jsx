import ForceGraph3D from "react-force-graph-3d";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createNodeLabelSprite } from "./graphLabels";
import {
  alwaysLabeledNodeIds,
  colors,
  directionalEdges,
  endpointId,
  getLinkDistance,
  getLinkStrength,
  getNeighborIds,
  labeledNodeTypes,
  typeLabels,
  visibleTypes,
} from "./graphConfig";

function shouldShowLabel(node, selectedNode, hovered, variant) {
  if (!node) return false;
  if (alwaysLabeledNodeIds.has(node.id)) return true;
  if (selectedNode?.id === node.id || hovered?.id === node.id) return true;
  if (variant === "explorer" && (node.val ?? 0) >= 6) return true;
  if (selectedNode && labeledNodeTypes.has(node.type) && (node.val ?? 0) >= 4) return true;
  return labeledNodeTypes.has(node.type) && (node.val ?? 0) >= 4;
}

export default function VitaeGraph3D({ variant = "hero" }) {
  const graphRef = useRef(null);
  const wrapRef = useRef(null);
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [status, setStatus] = useState("loading");
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [activeTypes, setActiveTypes] = useState(() => new Set(visibleTypes));
  const [dimensions, setDimensions] = useState({
    width: variant === "hero" ? 820 : 980,
    height: variant === "hero" ? 620 : 680,
  });

  useEffect(() => {
    let cancelled = false;

    fetch("/vitaegraph/demo-graph.json")
      .then((response) => {
        if (!response.ok) throw new Error(`Graph request failed: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (cancelled) return;
        setGraphData(data);
        setSelected(data.nodes.find((node) => node.id === "vitaegraph") ?? data.nodes[0] ?? null);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!wrapRef.current) return undefined;

    const resize = () => {
      const rect = wrapRef.current.getBoundingClientRect();
      const compact = rect.width < 720;
      setDimensions({
        width: Math.max(320, Math.round(rect.width)),
        height: Math.max(compact ? 420 : 480, Math.round(rect.height || (variant === "hero" ? 560 : 700))),
      });
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, [variant]);

  const filteredData = useMemo(() => {
    const nodes = graphData.nodes.filter((node) => activeTypes.has(node.type));
    const ids = new Set(nodes.map((node) => node.id));
    const links = graphData.links.filter((link) => ids.has(endpointId(link.source)) && ids.has(endpointId(link.target)));
    return { nodes, links };
  }, [activeTypes, graphData]);

  const selectedNode = useMemo(() => {
    if (!selected) return null;
    return graphData.nodes.find((node) => node.id === selected.id) ?? selected;
  }, [graphData.nodes, selected]);

  const isCompact = dimensions.width < 720;
  const neighborIds = useMemo(() => getNeighborIds(filteredData, selectedNode?.id), [filteredData, selectedNode]);

  const selectNode = useCallback((node) => {
    setSelected(node);
    const distance = isCompact ? 250 : node.id === "vitaegraph" ? 205 : 125;
    const distRatio = 1 + distance / Math.hypot(node.x || 1, node.y || 1, node.z || 1);
    const lookAt = isCompact ? { x: 0, y: 0, z: 0 } : node;

    graphRef.current?.cameraPosition(
      {
        x: (node.x || 0) * distRatio,
        y: (node.y || 0) * distRatio,
        z: (node.z || 0) * distRatio + (isCompact ? 130 : 80),
      },
      lookAt,
      900,
    );
  }, [isCompact]);

  const resetCamera = useCallback(() => {
    const camera = isCompact ? { x: 0, y: 18, z: 430 } : { x: 0, y: 62, z: 330 };
    const target = isCompact ? { x: 0, y: 0, z: 0 } : { x: 18, y: 0, z: 58 };
    graphRef.current?.cameraPosition(camera, target, 900);
    const root = graphData.nodes.find((node) => node.id === "vitaegraph");
    if (root) setSelected(root);
  }, [graphData.nodes, isCompact]);

  useEffect(() => {
    if (status !== "ready" || !graphRef.current) return undefined;

    const graph = graphRef.current;
    graph.d3Force("charge")?.strength(variant === "hero" ? -82 : -70);
    graph.d3Force("link")?.distance((link) => getLinkDistance(link.type)).strength((link) => getLinkStrength(link.type));

    const timer = window.setTimeout(() => {
      const camera = isCompact ? { x: 0, y: 18, z: 430 } : { x: 0, y: 62, z: variant === "hero" ? 330 : 390 };
      const target = isCompact ? { x: 0, y: 0, z: 0 } : { x: 18, y: 0, z: 58 };
      graph.cameraPosition(camera, target, 1000);
    }, 260);

    return () => window.clearTimeout(timer);
  }, [status, activeTypes, isCompact, variant]);

  const nodeColor = useCallback(
    (node) => {
      const isSelected = selectedNode?.id === node.id;
      const isNeighbor = neighborIds.has(node.id);
      const isHovered = hovered?.id === node.id;
      if (isSelected) return "#ffffff";
      if (selectedNode && !isNeighbor) return "#243244";
      if (isHovered) return "#ecfeff";
      return colors[node.type] ?? "#94a3b8";
    },
    [hovered, neighborIds, selectedNode],
  );

  const linkColor = useCallback(
    (link) => {
      const source = endpointId(link.source);
      const target = endpointId(link.target);
      const related = !selectedNode || neighborIds.has(source) || neighborIds.has(target);
      if (!related) return "rgba(71, 85, 105, 0.12)";
      if (link.type === "CONTAINS") return "rgba(126, 231, 135, 0.58)";
      if (link.type === "GENERATES") return "rgba(129, 140, 248, 0.64)";
      if (link.type === "RETRIEVES") return "rgba(103, 232, 249, 0.66)";
      if (link.type === "GROUNDS") return "rgba(244, 114, 182, 0.52)";
      if (link.type === "USED_FOR") return "rgba(240, 171, 252, 0.62)";
      return "rgba(203, 213, 225, 0.32)";
    },
    [neighborIds, selectedNode],
  );

  const nodeThreeObject = useCallback(
    (node) => {
      if (!shouldShowLabel(node, selectedNode, hovered, variant)) return null;
      const emphasized = node.id === "vitaegraph" || selectedNode?.id === node.id || hovered?.id === node.id;
      return createNodeLabelSprite(node.label, colors[node.type] ?? "#7ee787", emphasized);
    },
    [hovered, selectedNode, variant],
  );

  const toggleType = (type) => {
    setActiveTypes((current) => {
      const next = new Set(current);
      if (next.has(type) && next.size > 1) next.delete(type);
      else next.add(type);
      return next;
    });
  };

  if (status === "error") {
    return (
      <div className="vg3d-fallback" role="status">
        Demo graph could not be loaded. VitaeGraph still uses private Markdown records and rebuildable local indexes.
      </div>
    );
  }

  return (
    <div className={`vg3d-shell vg3d-shell--${variant}`}>
      <div className="vg3d-topbar" aria-hidden="true">
        <span />
        <span />
        <span />
        <strong>local graph workspace</strong>
      </div>

      <div className="vg3d-stage" ref={wrapRef}>
        {status === "loading" ? (
          <div className="vg3d-loading" role="status">
            Loading demo knowledge graph…
          </div>
        ) : (
          <ForceGraph3D
            ref={graphRef}
            graphData={filteredData}
            width={dimensions.width}
            height={dimensions.height}
            backgroundColor="rgba(0,0,0,0)"
            nodeLabel={(node) => `${node.label} — ${node.summary}`}
            nodeColor={nodeColor}
            nodeOpacity={0.96}
            nodeResolution={18}
            nodeRelSize={variant === "hero" ? 6.2 : 5.6}
            nodeThreeObject={nodeThreeObject}
            nodeThreeObjectExtend
            nodeVal={(node) => {
              if (selectedNode?.id === node.id) return (node.val ?? 3) + 4;
              if (hovered?.id === node.id) return (node.val ?? 3) + 2;
              if (selectedNode && !neighborIds.has(node.id)) return Math.max(1.3, (node.val ?? 3) - 1.2);
              return node.val ?? 3;
            }}
            linkColor={linkColor}
            linkOpacity={0.62}
            linkWidth={(link) => {
              const related = !selectedNode || neighborIds.has(endpointId(link.source)) || neighborIds.has(endpointId(link.target));
              if (!related) return 0.45;
              if (link.type === "CONTAINS") return 1.35;
              if (directionalEdges.has(link.type)) return 1.18;
              return 0.8;
            }}
            linkDirectionalArrowLength={(link) => (directionalEdges.has(link.type) ? 3.2 : 0)}
            linkDirectionalArrowRelPos={0.88}
            linkDirectionalParticles={(link) => (directionalEdges.has(link.type) ? 2 : 0)}
            linkDirectionalParticleWidth={1.8}
            linkDirectionalParticleSpeed={(link) => (link.type === "RETRIEVES" ? 0.009 : 0.006)}
            cooldownTicks={120}
            warmupTicks={70}
            d3AlphaDecay={0.035}
            d3VelocityDecay={0.36}
            enableNodeDrag={false}
            showNavInfo={false}
            onNodeHover={setHovered}
            onNodeClick={selectNode}
          />
        )}
      </div>

      <aside className="vg3d-panel" aria-label="Selected graph node">
        <p className="vg3d-panel-kicker">{selectedNode ? typeLabels[selectedNode.type] : "Graph node"}</p>
        <h3>{selectedNode?.label ?? "Loading graph…"}</h3>
        <p>{selectedNode?.summary ?? "Preparing a safe public demo graph."}</p>
        {selectedNode?.path && <code>{selectedNode.path}</code>}
        <div className="vg3d-actions">
          <button type="button" onClick={resetCamera}>
            Reset graph
          </button>
          <button type="button" onClick={() => selectedNode && selectNode(selectedNode)}>
            Focus node
          </button>
        </div>
      </aside>

      <div className="vg3d-legend" aria-label="Node type filters">
        {visibleTypes.map((type) => (
          <button
            key={type}
            type="button"
            className={activeTypes.has(type) ? "is-active" : ""}
            onClick={() => toggleType(type)}
            aria-pressed={activeTypes.has(type)}
          >
            <span style={{ backgroundColor: colors[type] }} aria-hidden="true" />
            {typeLabels[type]}
          </button>
        ))}
      </div>
    </div>
  );
}
