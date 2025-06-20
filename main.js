if (!navigator.gpu){
	console.error("WebGPU cannot be initialized - navigator.gpu not found");
	return null;
}

const adapter = await navigator.gpu.requestAdapter();

if (!adapter) {
	console.error("WebGPU cannot be initialized - Adapter not found");
	return null;
}

const device = await adapter.requestDevice();

device.lost.then(() => {
	console.error("WebGPU cannot be initialized - Device has been lost");
	return null;
})

const canvas = document.getElementById("canvas-container");
const context = canvas.getContext('webgpu');

if (!context) {
	console.error("WebGPU cannot be initialized - Canvas does not support WebGPU");
	return null;
}
