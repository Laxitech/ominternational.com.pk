import type { ContactFormInput } from "@/types/forms";

export async function submitContactForm(
  input: ContactFormInput,
): Promise<{ ok: boolean; message?: string }> {
  // Simulate network latency (placeholder until real API endpoint is wired)
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (!input.name || !input.email || !input.subject || !input.message) {
    return { ok: false, message: "Please fill in all required fields." };
  }

  return { ok: true, message: "Thank you! Your message has been received." };
}
