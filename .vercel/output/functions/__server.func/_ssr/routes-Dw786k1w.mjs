import { i as __toESM } from "../_runtime.mjs";
import { i as Vector3, n as useFrame, o as require_jsx_runtime, r as useThree, s as require_react, t as Canvas } from "../_libs/@react-three/fiber+[...].mjs";
import { i as Music2, n as Sparkles, r as RotateCcw } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dw786k1w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var THEMES = [
	{
		id: "glam",
		label: "Gold Glam",
		hint: "Shine, heels, long hair"
	},
	{
		id: "cute",
		label: "Soft Cute",
		hint: "Pastel bows and skirts"
	},
	{
		id: "sport",
		label: "Street Sport",
		hint: "Sneakers and easy layers"
	},
	{
		id: "night",
		label: "After Dark",
		hint: "Ink, boots, sharp lines"
	},
	{
		id: "pastel",
		label: "Cloud Pastel",
		hint: "Light colors, gentle shapes"
	}
];
var ITEMS = [
	{
		id: "hair-long",
		slot: "hair",
		name: "Long waves",
		color: "#1b1216",
		vibe: "glam"
	},
	{
		id: "hair-pony",
		slot: "hair",
		name: "High pony",
		color: "#2a1a16",
		vibe: "sport"
	},
	{
		id: "hair-bob",
		slot: "hair",
		name: "Soft bob",
		color: "#3a241c",
		vibe: "cute"
	},
	{
		id: "hair-buns",
		slot: "hair",
		name: "Space buns",
		color: "#4a2c55",
		vibe: "pastel"
	},
	{
		id: "top-tank",
		slot: "top",
		name: "Rib tank",
		color: "#f4d7c5",
		vibe: "cute"
	},
	{
		id: "top-jacket",
		slot: "top",
		name: "Crop jacket",
		color: "#1e2433",
		vibe: "night"
	},
	{
		id: "top-hoodie",
		slot: "top",
		name: "Hoodie",
		color: "#e7b7c8",
		vibe: "sport"
	},
	{
		id: "top-spark",
		slot: "top",
		name: "Sequin bodice",
		color: "#d4a017",
		vibe: "glam"
	},
	{
		id: "bot-skirt",
		slot: "bottom",
		name: "Pleat skirt",
		color: "#f2c1d1",
		vibe: "cute"
	},
	{
		id: "bot-jeans",
		slot: "bottom",
		name: "Wide jeans",
		color: "#3d5270",
		vibe: "sport"
	},
	{
		id: "bot-shorts",
		slot: "bottom",
		name: "City shorts",
		color: "#efe6d6",
		vibe: "pastel"
	},
	{
		id: "bot-dress",
		slot: "bottom",
		name: "Column skirt",
		color: "#111318",
		vibe: "night"
	},
	{
		id: "shoe-sneak",
		slot: "shoes",
		name: "Sneakers",
		color: "#f7f4ef",
		vibe: "sport"
	},
	{
		id: "shoe-heel",
		slot: "shoes",
		name: "Heels",
		color: "#c9a15b",
		vibe: "glam"
	},
	{
		id: "shoe-boot",
		slot: "shoes",
		name: "Boots",
		color: "#241c1a",
		vibe: "night"
	},
	{
		id: "shoe-mary",
		slot: "shoes",
		name: "Mary Janes",
		color: "#e8a0b8",
		vibe: "pastel"
	},
	{
		id: "ex-none",
		slot: "extra",
		name: "Bare",
		color: "#c48a5a",
		vibe: "sport"
	},
	{
		id: "ex-hoops",
		slot: "extra",
		name: "Hoops",
		color: "#e8d7a2",
		vibe: "glam"
	},
	{
		id: "ex-choker",
		slot: "extra",
		name: "Ribbon",
		color: "#d4537e",
		vibe: "cute"
	},
	{
		id: "ex-chain",
		slot: "extra",
		name: "Chain",
		color: "#c5ccd6",
		vibe: "night"
	}
];
var DEFAULT_LOOK = {
	hair: "hair-long",
	top: "top-tank",
	bottom: "bot-skirt",
	shoes: "shoe-sneak",
	extra: "ex-choker"
};
function itemById(id) {
	return ITEMS.find((i) => i.id === id) ?? ITEMS[0];
}
function scoreLook(look, theme) {
	const slots = [
		"hair",
		"top",
		"bottom",
		"shoes",
		"extra"
	];
	let hits = 0;
	for (const s of slots) if (itemById(look[s]).vibe === theme) hits += 1;
	return hits * 20;
}
var SKIN = "#c48a5a";
var EYE = "#1a1214";
function useKeys(extra) {
	const keys = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	(0, import_react.useEffect)(() => {
		const down = (e) => {
			keys.current.add(e.code);
		};
		const up = (e) => {
			keys.current.delete(e.code);
		};
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
	return { has(code) {
		if (extra.current) return extra.current.includes(code);
		return keys.current.has(code);
	} };
}
function Hair({ id, color }) {
	if (id === "hair-pony") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.12,
				-.02
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.3,
				20,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color,
				roughness: .55
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.42,
				-.08
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.12,
				16,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color,
				roughness: .5
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.18,
				-.22
			],
			rotation: [
				.4,
				0,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.07,
				.42,
				6,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color,
				roughness: .5
			})]
		})
	] });
	if (id === "hair-bob") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			.02,
			0
		],
		castShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			.34,
			22,
			16,
			0,
			Math.PI * 2,
			0,
			Math.PI * .72
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color,
			roughness: .5
		})]
	});
	if (id === "hair-buns") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.08,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.3,
				18,
				14
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color,
				roughness: .5
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-.22,
				.28,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.1,
				14,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.22,
				.28,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.1,
				14,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color })]
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.08,
				-.02
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.32,
				22,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color,
				roughness: .48
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-.16,
				-.28,
				.02
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.07,
				.55,
				6,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color,
				roughness: .5
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.16,
				-.28,
				.02
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.07,
				.55,
				6,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color,
				roughness: .5
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.22,
				.18
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.34,
				.08,
				.08
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color })]
		})
	] });
}
function Avatar({ look, pose }) {
	const hair = itemById(look.hair);
	const top = itemById(look.top);
	const bottom = itemById(look.bottom);
	const shoes = itemById(look.shoes);
	const extra = itemById(look.extra);
	const dressy = bottom.id === "bot-dress" || top.id === "top-spark";
	const legSpread = pose === "runway" ? .16 : .08;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.55,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.32,
				28,
				22
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: SKIN,
				roughness: .55
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-.1,
				1.58,
				.26
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.055,
				14,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: "#fff8f3" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.1,
				1.58,
				.26
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.055,
				14,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: "#fff8f3" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-.1,
				1.57,
				.3
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.028,
				12,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: EYE })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.1,
				1.57,
				.3
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.028,
				12,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: EYE })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.46,
				.3
			],
			rotation: [
				.4,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.018,
				8,
				8
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: "#c47a86" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			position: [
				0,
				1.72,
				0
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hair, {
				id: hair.id,
				color: hair.color
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.12,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.16,
				.28,
				6,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: top.color,
				roughness: .45
			})]
		}),
		top.id === "top-jacket" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.12,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.42,
				.28,
				.22
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: top.color,
				roughness: .4
			})]
		}),
		dressy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.72,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.28,
				.38,
				.7,
				18
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: top.id === "top-spark" ? top.color : bottom.color,
				roughness: .35,
				metalness: top.id === "top-spark" ? .35 : .05
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.78,
				0
			],
			castShadow: true,
			children: [bottom.id === "bot-skirt" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.2,
				.34,
				.42,
				16
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.32,
				.36,
				.18
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: bottom.color,
				roughness: .55
			})]
		}),
		!dressy && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-.08,
				.42,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.055,
				.36,
				4,
				8
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: SKIN })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.08,
				.42,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
				.055,
				.36,
				4,
				8
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: SKIN })]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-legSpread,
				.1,
				shoes.id === "shoe-heel" ? .04 : 0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.1,
				.08,
				shoes.id === "shoe-boot" ? .22 : .18
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: shoes.color,
				roughness: .4
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				legSpread,
				.1,
				shoes.id === "shoe-heel" ? .04 : 0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.1,
				.08,
				shoes.id === "shoe-boot" ? .22 : .18
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: shoes.color,
				roughness: .4
			})]
		}),
		extra.id === "ex-hoops" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-.24,
				1.46,
				.02
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.045,
				.01,
				8,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: extra.color,
				metalness: .6,
				roughness: .3
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.24,
				1.46,
				.02
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.045,
				.01,
				8,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: extra.color,
				metalness: .6,
				roughness: .3
			})]
		})] }),
		extra.id === "ex-choker" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.26,
				.08
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.09,
				.015,
				8,
				20
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: extra.color })]
		}),
		extra.id === "ex-chain" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.18,
				.12
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.08,
				.012,
				8,
				18
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: extra.color,
				metalness: .7,
				roughness: .25
			})]
		})
	] });
}
function Studio({ look, pose, joy, qaKeys, onMoved }) {
	const rig = (0, import_react.useRef)(null);
	const yaw = (0, import_react.useRef)(0);
	const pos = (0, import_react.useRef)(new Vector3(0, 0, 2));
	const speedRef = (0, import_react.useRef)(0);
	const keys = useKeys(qaKeys);
	const { camera } = useThree();
	const camPos = (0, import_react.useMemo)(() => new Vector3(), []);
	const lookAt = (0, import_react.useMemo)(() => new Vector3(), []);
	(0, import_react.useEffect)(() => {
		window.__controlsTest = {
			getYaw: () => yaw.current,
			getSpeed: () => speedRef.current,
			setKeys: (codes) => {
				qaKeys.current = codes;
			}
		};
		return () => {
			delete window.__controlsTest;
		};
	}, [qaKeys]);
	useFrame((_, dtRaw) => {
		const dt = Math.min(dtRaw, .05);
		const joyX = joy.current.x;
		const joyY = joy.current.y;
		let steer = 0;
		if (keys.has("KeyA") || keys.has("ArrowLeft")) steer += 1;
		if (keys.has("KeyD") || keys.has("ArrowRight")) steer -= 1;
		steer += -joyX;
		steer = Math.max(-1, Math.min(1, steer));
		let throttle = 0;
		if (keys.has("KeyW") || keys.has("ArrowUp")) throttle += 1;
		if (keys.has("KeyS") || keys.has("ArrowDown")) throttle -= 1;
		throttle += -joyY;
		throttle = Math.max(-1, Math.min(1, throttle));
		const moving = Math.abs(throttle) > .05 || Math.abs(steer) > .05;
		if (moving && Math.abs(throttle) > .05) yaw.current += steer * 1.8 * dt;
		else if (Math.abs(steer) > .05 && Math.abs(throttle) < .05) yaw.current += steer * 1.6 * dt;
		const fx = -Math.sin(yaw.current);
		const fz = -Math.cos(yaw.current);
		const speed = throttle * 2.4;
		pos.current.x += fx * speed * dt;
		pos.current.z += fz * speed * dt;
		pos.current.x = Math.max(-6.2, Math.min(6.2, pos.current.x));
		pos.current.z = Math.max(-5.2, Math.min(6.2, pos.current.z));
		speedRef.current = Math.abs(speed);
		onMoved(yaw.current, speedRef.current);
		const g = rig.current;
		if (g) {
			g.position.copy(pos.current);
			g.rotation.y = yaw.current;
			const bob = moving ? Math.sin(performance.now() / 160) * .03 : Math.sin(performance.now() / 700) * .015;
			g.position.y = bob;
		}
		const follow = 4.2;
		camPos.set(pos.current.x - fx * follow, 2.1, pos.current.z - fz * follow);
		camera.position.lerp(camPos, 1 - Math.exp(-6 * dt));
		lookAt.set(pos.current.x, 1.2, pos.current.z);
		camera.lookAt(lookAt);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref: rig,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
			look,
			pose
		})
	});
}
function Room() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [11, 48] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#efe2d4",
				roughness: .9
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.01,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
				2.2,
				2.35,
				48
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#d4537e",
				roughness: .6
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				2.2,
				-6
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				14,
				4.6,
				.3
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: "#f3e6da" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-7,
				2.2,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.3,
				4.6,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: "#ead9cc" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				7,
				2.2,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.3,
				4.6,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: "#ead9cc" })]
		}),
		[
			-3.2,
			0,
			3.2
		].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				x,
				2.6,
				-5.7
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.6,
				2.1,
				.05
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#c9d7e8",
				metalness: .15,
				roughness: .15
			})]
		}, x)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				4.4,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.2,
				.15,
				.2
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#c9a15b",
				emissive: "#c9a15b",
				emissiveIntensity: .4
			})]
		})
	] });
}
var ctx = null;
var timer = null;
var master = null;
var NOTES = [
	262,
	330,
	392,
	494,
	392,
	330,
	440,
	349
];
function startMusic() {
	if (timer != null) return;
	const AC = window.AudioContext;
	ctx = ctx ?? new AC();
	ctx.resume();
	master = ctx.createGain();
	master.gain.value = .08;
	master.connect(ctx.destination);
	let step = 0;
	const tick = () => {
		if (!ctx || !master) return;
		const osc = ctx.createOscillator();
		const g = ctx.createGain();
		osc.type = step % 4 === 0 ? "triangle" : "sine";
		osc.frequency.value = NOTES[step % NOTES.length];
		g.gain.setValueAtTime(1e-4, ctx.currentTime);
		g.gain.exponentialRampToValueAtTime(.9, ctx.currentTime + .02);
		g.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + .28);
		osc.connect(g);
		g.connect(master);
		osc.start();
		osc.stop(ctx.currentTime + .3);
		step += 1;
	};
	tick();
	timer = window.setInterval(tick, 320);
}
function setMusicMuted(muted) {
	if (master && ctx) master.gain.setTargetAtTime(muted ? 1e-4 : .08, ctx.currentTime, .05);
}
var SLOTS = [
	{
		id: "hair",
		label: "Hair"
	},
	{
		id: "top",
		label: "Top"
	},
	{
		id: "bottom",
		label: "Bottom"
	},
	{
		id: "shoes",
		label: "Shoes"
	},
	{
		id: "extra",
		label: "Extra"
	}
];
function loadLook() {
	try {
		const raw = localStorage.getItem("lumen-look");
		if (!raw) return { ...DEFAULT_LOOK };
		const parsed = JSON.parse(raw);
		return {
			...DEFAULT_LOOK,
			...parsed
		};
	} catch {
		return { ...DEFAULT_LOOK };
	}
}
function Home() {
	const [started, setStarted] = (0, import_react.useState)(false);
	const [look, setLook] = (0, import_react.useState)(DEFAULT_LOOK);
	const [slot, setSlot] = (0, import_react.useState)("hair");
	const [theme, setTheme] = (0, import_react.useState)("glam");
	const [left, setLeft] = (0, import_react.useState)(45);
	const [score, setScore] = (0, import_react.useState)(null);
	const [best, setBest] = (0, import_react.useState)(0);
	const [pose, setPose] = (0, import_react.useState)("idle");
	const [muted, setMuted] = (0, import_react.useState)(false);
	const [hint, setHint] = (0, import_react.useState)("WASD to walk. Dress for the theme.");
	const joy = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const qaKeys = (0, import_react.useRef)(null);
	const stick = (0, import_react.useRef)(null);
	const dragging = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		setLook(loadLook());
		const b = Number(localStorage.getItem("lumen-best") || "0");
		if (!Number.isNaN(b)) setBest(b);
		setTheme(THEMES[Math.floor(Math.random() * THEMES.length)].id);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!started || score != null) return;
		const id = window.setInterval(() => {
			setLeft((s) => {
				if (s <= 1) {
					window.clearInterval(id);
					return 0;
				}
				return s - 1;
			});
		}, 1e3);
		return () => window.clearInterval(id);
	}, [started, score]);
	(0, import_react.useEffect)(() => {
		if (left !== 0 || !started || score != null) return;
		const s = scoreLook(look, theme);
		setScore(s);
		setPose("runway");
		setBest((b) => {
			const next = Math.max(b, s);
			localStorage.setItem("lumen-best", String(next));
			return next;
		});
		setHint(s >= 60 ? "The room loves this look." : "Close — match more pieces to the theme.");
	}, [
		left,
		started,
		score,
		look,
		theme
	]);
	(0, import_react.useEffect)(() => {
		localStorage.setItem("lumen-look", JSON.stringify(look));
	}, [look]);
	const themeMeta = (0, import_react.useMemo)(() => THEMES.find((t) => t.id === theme), [theme]);
	const options = ITEMS.filter((i) => i.slot === slot);
	function begin() {
		setStarted(true);
		startMusic();
		setMusicMuted(false);
	}
	function again() {
		setScore(null);
		setLeft(45);
		setPose("idle");
		setTheme(THEMES[Math.floor(Math.random() * THEMES.length)].id);
		setHint("New theme. Walk it out.");
	}
	function onPointer(e, active) {
		const el = stick.current;
		if (!el) return;
		if (!active) {
			dragging.current = false;
			joy.current = {
				x: 0,
				y: 0
			};
			el.style.transform = "translate(0px, 0px)";
			return;
		}
		dragging.current = true;
		const r = el.parentElement.getBoundingClientRect();
		const cx = r.left + r.width / 2;
		const cy = r.top + r.height / 2;
		let dx = e.clientX - cx;
		let dy = e.clientY - cy;
		const max = 36;
		const len = Math.hypot(dx, dy) || 1;
		if (len > max) {
			dx = dx / len * max;
			dy = dy / len * max;
		}
		joy.current = {
			x: dx / max,
			y: dy / max
		};
		el.style.transform = `translate(${dx}px, ${dy}px)`;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative h-full min-h-screen overflow-hidden bg-ink text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
				shadows: true,
				camera: {
					position: [
						0,
						2.2,
						6.4
					],
					fov: 42
				},
				className: "absolute inset-0 h-full w-full touch-none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
						attach: "background",
						args: ["#f3e4d6"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .7 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
						position: [
							4,
							8,
							4
						],
						intensity: 1.3,
						castShadow: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
						fallback: null,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Room, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {
							look,
							pose,
							joy,
							qaKeys,
							onMoved: () => {}
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto rounded-2xl bg-panel/90 px-4 py-3 text-ink shadow-lg backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl leading-none",
						children: "Lumen Atelier"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Original stylist. Your soundtrack later."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto rounded-2xl bg-ink/80 px-4 py-3 text-right backdrop-blur",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-wide text-gold uppercase",
							children: "Theme"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg leading-tight",
							children: themeMeta.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-paper/80",
							children: themeMeta.hint
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm",
							children: [
								score == null ? `${left}s` : `${score} pts`,
								" · best ",
								best
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "absolute inset-x-0 bottom-0 flex max-h-[42vh] flex-col gap-2 p-3 md:inset-x-auto md:right-4 md:bottom-4 md:max-h-none md:w-80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hidden rounded-xl bg-ink/70 px-3 py-2 text-sm backdrop-blur md:block",
					children: hint
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-panel p-3 text-ink shadow-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 flex gap-1 overflow-x-auto",
							children: SLOTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSlot(s.id),
								className: "min-h-11 shrink-0 rounded-full px-3 text-sm font-semibold " + (slot === s.id ? "bg-rose text-paper" : "bg-paper text-ink"),
								children: s.label
							}, s.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid max-h-36 grid-cols-2 gap-2 overflow-y-auto md:max-h-64",
							children: options.map((item) => {
								const on = look[item.slot] === item.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setLook((l) => ({
										...l,
										[item.slot]: item.id
									})),
									className: "flex min-h-11 items-center gap-2 rounded-xl border px-2 py-2 text-left text-sm " + (on ? "border-rose bg-paper" : "border-transparent bg-paper/70"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "size-6 shrink-0 rounded-full border border-ink/10",
										style: { background: item.color }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-semibold leading-tight",
										children: item.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted",
										children: itemById(item.id).vibe
									})] })]
								}, item.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-ink text-paper",
								onClick: () => setMuted((m) => {
									const next = !m;
									setMusicMuted(next);
									return next;
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, { className: "size-4" }), muted ? "Sound off" : "Sound on"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-rose text-paper",
								onClick: again,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "New theme"]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-[46vh] left-4 size-24 rounded-full bg-ink/35 md:hidden",
				onPointerDown: (e) => onPointer(e, true),
				onPointerMove: (e) => dragging.current && onPointer(e, true),
				onPointerUp: (e) => onPointer(e, false),
				onPointerCancel: (e) => onPointer(e, false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: stick,
					className: "absolute top-7 left-7 size-10 rounded-full bg-paper"
				})
			}),
			!started && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-end justify-center bg-ink/45 p-4 md:items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-3xl bg-panel p-6 text-ink shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.2em] text-rose uppercase",
							children: "Boutique prototype"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display mt-2 text-4xl leading-none",
							children: "Dress the floor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base leading-relaxed text-muted",
							children: "An original anime stylist in a small atelier. Match hair, clothes, and shoes to the theme before the clock hits zero. WASD or the stick to walk. Your tracks can replace the built-in loop later."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: begin,
							className: "mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-rose text-lg font-semibold text-paper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5" }), "Start"]
						})
					]
				})
			}),
			score != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute top-28 left-1/2 -translate-x-1/2 rounded-full bg-ink px-5 py-2 text-paper shadow-lg",
				children: ["Runway score ", score]
			})
		]
	});
}
//#endregion
export { Home as component };
