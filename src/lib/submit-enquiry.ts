import type { EnquiryInput } from "@/types/forms";

export async function submitEnquiry(
  input: EnquiryInput,
): Promise<{ ok: boolean }> {
  // Simulate network latency for client-side static handling
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (!input.name || !input.phone || !input.message) {
    return { ok: false };
  }

  // Ready for backend API / CRM webhook integration
  return { ok: true };
}
