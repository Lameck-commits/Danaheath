import { useEffect, useMemo, useRef, type MutableRefObject } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { itemById, type Look } from "./wardrobe";

const MODEL = "/models/reference-woman.glb";

function partOf(name: string) {
  const n = name.toLowerCase();
  if (n.includes("eye") || n.includes("brow") || n.includes("lip") || n.includes("mouth") || n.includes("nose") || n.includes("face") || n.includes("ear") || n.includes("neck") || n.includes("arm") || n.includes("hand") || n.includes("leg"))
    return "body";
  if (n.includes("hair") || n.includes("lock") || n.includes("ponytail")) return "hair";
  if (n.includes("boot")) return "shoes";
  if (n.includes("short")) return "bottom";
  if (n.includes("hoop") || n.includes("clip") || n.includes("jewelry")) return "extra";
  if (n.includes("tee") || n.includes("sleeve")) return "top";
  return "print";
}

function useKeys(extra: MutableRefObject<string[] | null>) {
  const keys = useRef<Set<string>>(new Set());
  useEffect(() => {
    const down = (e: KeyboardEvent) => keys.current.add(e.code);
    const up = (e: KeyboardEvent) => keys.current.delete(e.code);
    const clear = () => keys.current.clear();
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", clear);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", clear);
    };
  }, []);
  return {
    has(code: string) {
      if (extra.current) return extra.current.includes(code);
      return keys.current.has(code);
    },
  };
}

function Stylist({
  look,
  pose,
  speedRef,
  onReady,
}: {
  look: Look;
  pose: "idle" | "runway";
  speedRef: MutableRefObject<number>;
  onReady: () => void;
}) {
  const gltf = useGLTF(MODEL);
  const rig = useMemo(() => gltf.scene.clone(true) as THREE.Group, [gltf.scene]);

  useEffect(() => {
    onReady();
  }, [onReady]);

  useEffect(() => {
    const hair = itemById(look.hair).color;
    const shirt = itemById(look.top).color;
    const pants = itemById(look.bottom).color;
    const shoes = itemById(look.shoes).color;
    const extra = itemById(look.extra).color;
    const hairId = look.hair;
    rig.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.isMesh) return;
      const name = mesh.name || "";
      const part = partOf(name);
      const src = mesh.material as THREE.MeshStandardMaterial;
      if (src && !Array.isArray(src) && !src.userData.owned) {
        const copy = src.clone();
        copy.userData.owned = true;
        mesh.material = copy;
      }
      const mat = mesh.material as THREE.MeshStandardMaterial;
      if (mat && !Array.isArray(mat)) {
        if (part === "hair") mat.color.set(hair);
        else if (part === "top") mat.color.set(shirt);
        else if (part === "bottom") mat.color.set(pants);
        else if (part === "shoes") mat.color.set(shoes);
        else if (part === "extra") mat.color.set(extra);
      }
      const lower = name.toLowerCase();
      if (lower.includes("ponytail")) mesh.visible = hairId === "hair-pony" || hairId === "hair-buns";
      else if (lower.includes("long back")) mesh.visible = hairId === "hair-long" || hairId === "hair-pony";
      else if (lower.includes("side lock")) mesh.visible = hairId !== "hair-bob";
    });
  }, [look, rig]);

  useFrame(() => {
    const t = performance.now() / 1000;
    const moving = speedRef.current > 0.15;
    rig.rotation.z = pose === "runway" ? 0.08 : 0;
    rig.position.y = moving ? Math.abs(Math.sin(t * 8)) * 0.045 : Math.sin(t * 1.6) * 0.012;
  });

  return <primitive object={rig} rotation={[0, Math.PI, 0]} />;
}

export function Studio({
  look,
  pose,
  joy,
  qaKeys,
  onReady,
}: {
  look: Look;
  pose: "idle" | "runway";
  joy: MutableRefObject<{ x: number; y: number }>;
  qaKeys: MutableRefObject<string[] | null>;
  onMoved: (yaw: number, speed: number) => void;
  onReady: () => void;
}) {
  const rig = useRef<THREE.Group>(null);
  const yaw = useRef(0);
  const pos = useRef(new THREE.Vector3(0, 0, 1.6));
  const speedRef = useRef(0);
  const keys = useKeys(qaKeys);
  const { camera } = useThree();
  const camPos = useMemo(() => new THREE.Vector3(), []);
  const lookAt = useMemo(() => new THREE.Vector3(), []);

  useEffect(() => {
    window.__controlsTest = {
      getYaw: () => yaw.current,
      getSpeed: () => speedRef.current,
      setKeys: (codes: string[]) => {
        qaKeys.current = codes;
      },
    };
    return () => {
      delete window.__controlsTest;
    };
  }, [qaKeys]);

  useFrame((_, dtRaw) => {
    const dt = Math.min(dtRaw, 0.05);
    let steer = 0;
    if (keys.has("KeyA") || keys.has("ArrowLeft")) steer += 1;
    if (keys.has("KeyD") || keys.has("ArrowRight")) steer -= 1;
    steer += -joy.current.x;
    steer = Math.max(-1, Math.min(1, steer));

    let throttle = 0;
    if (keys.has("KeyW") || keys.has("ArrowUp")) throttle += 1;
    if (keys.has("KeyS") || keys.has("ArrowDown")) throttle -= 1;
    throttle += -joy.current.y;
    throttle = Math.max(-1, Math.min(1, throttle));

    if (Math.abs(steer) > 0.05) yaw.current += steer * 1.7 * dt;

    const fx = -Math.sin(yaw.current);
    const fz = -Math.cos(yaw.current);
    const speed = throttle * 2.2;
    pos.current.x += fx * speed * dt;
    pos.current.z += fz * speed * dt;
    pos.current.x = Math.max(-5.4, Math.min(5.4, pos.current.x));
    pos.current.z = Math.max(-4.2, Math.min(5.2, pos.current.z));
    speedRef.current = Math.abs(speed);

    const g = rig.current;
    if (g) {
      g.position.copy(pos.current);
      g.rotation.y = yaw.current;
    }

    camPos.set(pos.current.x + fx * 3.15, 1.45, pos.current.z + fz * 3.15);
    camera.position.lerp(camPos, 1 - Math.exp(-6 * dt));
    lookAt.set(pos.current.x, 1.05, pos.current.z);
    camera.lookAt(lookAt);
  });

  return (
    <group ref={rig}>
      <Stylist look={look} pose={pose} speedRef={speedRef} onReady={onReady} />
    </group>
  );
}

export function Room() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[12, 64]} />
        <meshStandardMaterial color="#f7d7e4" roughness={0.85} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0.4]}>
        <planeGeometry args={[2.4, 8]} />
        <meshStandardMaterial color="#fff6fb" roughness={0.4} />
      </mesh>
      <mesh position={[0, 1.8, -5.6]}>
        <boxGeometry args={[14, 4.2, 0.2]} />
        <meshStandardMaterial color="#ffe9f2" />
      </mesh>
      <mesh position={[-6.6, 1.8, 0]}>
        <boxGeometry args={[0.2, 4.2, 12]} />
        <meshStandardMaterial color="#f3d5e6" />
      </mesh>
      <mesh position={[6.6, 1.8, 0]}>
        <boxGeometry args={[0.2, 4.2, 12]} />
        <meshStandardMaterial color="#f3d5e6" />
      </mesh>
      {[-2.4, 2.4].map((x) => (
        <group key={x} position={[x, 0, -1.2]}>
          <mesh position={[0, 0.55, 0]} castShadow>
            <cylinderGeometry args={[0.35, 0.4, 1.1, 20]} />
            <meshStandardMaterial color="#fff" roughness={0.35} />
          </mesh>
          <mesh position={[0, 1.35, 0]}>
            <sphereGeometry args={[0.22, 16, 12]} />
            <meshStandardMaterial color="#f4c7d8" />
          </mesh>
        </group>
      ))}
      <spotLight position={[0, 4.2, 1]} angle={0.6} penumbra={0.5} intensity={40} color="#fff5f8" castShadow />
      <pointLight position={[-3, 2.2, 2]} intensity={8} color="#ffd0e0" />
      <pointLight position={[3, 2.2, 2]} intensity={8} color="#ffe7b8" />
    </group>
  );
}

useGLTF.preload(MODEL);

declare global {
  interface Window {
    __controlsTest?: {
      getYaw: () => number;
      getSpeed: () => number;
      setKeys?: (codes: string[]) => void;
    };
  }
}
