import React from "react";
import "./App.scss";

import { Canvas } from "react-three-fiber";
import BoxMesh from "./components/BoxMesh";
import { OrbitControls, softShadows } from "drei";
import CircularMesh from "./components/CircularMesh";
import PlaneMesh from "./components/PlaneMesh";

softShadows();

function App() {
  return (
    <div className="container">
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [-5, 2, 10], fov: 80 }}
      >
        <ambientLight intensity={1} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={3}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[2, -10, 0]} intensity={1} />
        <pointLight position={[4, 2, 20]} intensity={1} />
        <PlaneMesh />
        <BoxMesh color="blue" args={[1, 1, 1]} position={[-1, 3, 0]} />
        <BoxMesh color="purple" args={[2, 2, 2]} position={[2, 1, 5]} />
        {/* <CircularMesh color="yellow" args={[2, 20]} position={[3, 0, -5]} /> */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
