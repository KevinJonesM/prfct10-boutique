const newsletterEndpoint = (import.meta.env.VITE_NEWSLETTER_ENDPOINT || "").trim();

export const newsletterIntegration = Object.freeze({
  configured: Boolean(newsletterEndpoint),
  provider: newsletterEndpoint ? "custom-endpoint" : null
});

export const newsletterInterests = Object.freeze([
  "Training Gear",
  "Accessories",
  "Mind Gym",
  "Apparel",
  "Team Orders"
]);

export async function subscribeToNewsletter({ email, source, interests = [] }) {
  if (!newsletterIntegration.configured) {
    return { status: "not-configured" };
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(newsletterEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source, interests }),
      signal: controller.signal
    });

    if (!response.ok) return { status: "error" };
    return { status: "success" };
  } catch {
    return { status: "error" };
  } finally {
    window.clearTimeout(timeout);
  }
}
