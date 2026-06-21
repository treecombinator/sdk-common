# AGENTS.md — @treecombinator/sdk-common

The one shared primitive of the Tree Combinator SDK: the error contract. Zero dependencies; isomorphic (server + client).

## Exports
- `TcError(code, message?, details?)` — domain error. `code: ErrorCode`, optional `details`; `toJSON()` → `{ error: ErrorCode, details? }` (the wire shape the client reads).
- `ERROR_CODES` — readonly snake_case list: `unauthorized`, `forbidden`, `not_found`, `invalid_input`, `conflict`, `rate_limited`, `internal`.
- `ErrorCode` — `(typeof ERROR_CODES)[number]`.

```ts
import { TcError } from "@treecombinator/sdk-common";
throw new TcError("invalid_input", "email required");
```
