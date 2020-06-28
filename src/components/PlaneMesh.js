import React from "react";

const PlaneMesh = () => {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <shadowMaterial attach="material" color="yellow" />
    </mesh>
  );
};

export default PlaneMesh;
