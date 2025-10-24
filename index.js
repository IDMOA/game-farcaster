import { createSDK } from "@farcaster/sdk-web";

const sdk = createSDK();

async function initApp() {
  try {
    // Example fetch (replace with your endpoint)
    const res = await fetch("/api/data");
    const data = await res.json();

    // Render something
    document.getElementById("root").textContent = "App loaded!";

    // Tell Farcaster your app is ready
    await sdk.actions.ready();
  } catch (err) {
    console.error("App init error:", err);
    await sdk.actions.ready(); // still call ready even on error
  }
}

initApp();
