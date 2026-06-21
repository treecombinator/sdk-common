/**
 * The domain error that crosses the wire between server and client.
 * Throw it with a SPECIFIC snake_case code in the `entity_reason` shape (e.g. "user_not_found",
 * "invalid_credentials", "email_already_registered") — never a vague "not_found". Each domain
 * owns its own codes; the reader maps the code to a message. Serializes to `{ error, details? }`.
 */
export class TcError extends Error {
  readonly code: string;
  readonly details?: Record<string, unknown>;

  constructor(code: string, message?: string, details?: Record<string, unknown>) {
    super(message ?? code);
    this.name = "TcError";
    this.code = code;
    this.details = details;
  }

  /** Serializable shape that crosses the HTTP boundary (the client reads this). */
  toJSON(): { error: string; details?: Record<string, unknown> } {
    return this.details ? { error: this.code, details: this.details } : { error: this.code };
  }
}
