/**
 * The domain error that crosses the wire between server and client.
 * Throw it with a SPECIFIC snake_case code in the `entity_reason` shape (e.g. "user_not_found",
 * "invalid_credentials", "email_already_registered") — never a vague "not_found". Each domain
 * owns its own codes; the reader maps the code to a message. Serializes to `{ error, details? }`.
 */
export class TcError extends Error {
  readonly code: string;
  readonly details?: Record<string, unknown>;
  /**
   * HTTP status the error crossed the wire with, when known. Set by transports (the client
   * http package) when mapping a response back into a TcError; server code composing the
   * response derives the status elsewhere. Not part of `toJSON()` — on the wire it IS the
   * response's HTTP status, never a body field.
   */
  readonly status?: number;

  constructor(code: string, message?: string, details?: Record<string, unknown>, status?: number) {
    super(message ?? code);
    this.name = "TcError";
    this.code = code;
    this.details = details;
    this.status = status;
  }

  /** Serializable shape that crosses the HTTP boundary (the client reads this). */
  toJSON(): { error: string; details?: Record<string, unknown> } {
    return this.details ? { error: this.code, details: this.details } : { error: this.code };
  }
}
