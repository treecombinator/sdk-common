/**
 * Stable error codes in snake_case — the error boundary between server and client.
 * Crosses the wire as `{ error: code }`; the reader maps each code to a message and
 * never shows the raw code. One source of truth for both sides.
 */
export const ERROR_CODES = [
  "unauthorized",
  "forbidden",
  "not_found",
  "invalid_input",
  "conflict",
  "rate_limited",
  "internal",
] as const;

export type ErrorCode = (typeof ERROR_CODES)[number];

/** Domain error carrying a stable code + optional serializable details. */
export class TcError extends Error {
  readonly code: ErrorCode;
  readonly details?: Record<string, unknown>;

  constructor(code: ErrorCode, message?: string, details?: Record<string, unknown>) {
    super(message ?? code);
    this.name = "TcError";
    this.code = code;
    this.details = details;
  }

  /** Serializable shape that crosses the HTTP boundary (the client reads this). */
  toJSON(): { error: ErrorCode; details?: Record<string, unknown> } {
    return this.details ? { error: this.code, details: this.details } : { error: this.code };
  }
}
