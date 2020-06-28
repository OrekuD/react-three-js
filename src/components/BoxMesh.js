import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "drei";
import { useSpring, a } from "react-spring/three";

const BoxMesh = ({ color, args, position }) => {
  const mesh = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const props = useSpring({
    scale: expanded ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <a.mesh
      ref={mesh}
      position={position}
      onClick={() => setExpanded(!expanded)}
      scale={props.scale}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={args} />
      {/* <meshStandardMaterial attach="material" color={color} /> */}
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={0.6}
        factor={0.2}
      />
    </a.mesh>
  );
};

export default BoxMesh;
