import * as THREE from "three";

function roundedRect(context, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + width, y, x + width, y + height, r);
  context.arcTo(x + width, y + height, x, y + height, r);
  context.arcTo(x, y + height, x, y, r);
  context.arcTo(x, y, x + width, y, r);
  context.closePath();
}

export function createNodeLabelSprite(text, color = "#7ee787", emphasized = false) {
  const dpr = Math.min(4, window.devicePixelRatio || 2);
  const fontSize = emphasized ? 30 : 23;
  const paddingX = emphasized ? 24 : 18;
  const paddingY = emphasized ? 12 : 9;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = `800 ${fontSize}px Inter, ui-sans-serif, system-ui, sans-serif`;

  const textWidth = Math.ceil(context.measureText(text).width);
  const logicalWidth = Math.min(520, textWidth + paddingX * 2);
  const logicalHeight = fontSize + paddingY * 2;
  canvas.width = Math.ceil(logicalWidth * dpr);
  canvas.height = Math.ceil(logicalHeight * dpr);
  canvas.style.width = `${logicalWidth}px`;
  canvas.style.height = `${logicalHeight}px`;
  context.scale(dpr, dpr);

  context.font = `800 ${fontSize}px Inter, ui-sans-serif, system-ui, sans-serif`;
  context.textAlign = "center";
  context.textBaseline = "middle";

  roundedRect(context, 1, 1, logicalWidth - 2, logicalHeight - 2, emphasized ? 16 : 12);
  context.fillStyle = emphasized ? "rgba(240, 253, 244, 0.94)" : "rgba(2, 6, 23, 0.78)";
  context.fill();
  context.lineWidth = emphasized ? 2 : 1.4;
  context.strokeStyle = color;
  context.stroke();

  context.shadowColor = color;
  context.shadowBlur = emphasized ? 13 : 7;
  context.fillStyle = emphasized ? "#04130a" : "#f8fafc";
  context.fillText(text, logicalWidth / 2, logicalHeight / 2 + 1);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    opacity: emphasized ? 0.96 : 0.88,
  });
  const sprite = new THREE.Sprite(material);
  const scale = emphasized ? 0.2 : 0.17;
  sprite.scale.set(logicalWidth * scale, logicalHeight * scale, 1);
  sprite.position.set(0, emphasized ? 18 : 15, 0);
  return sprite;
}
