# AGENTS.md — @treecombinator/sdk-common

The one shared primitive of the Tree Combinator SDK: the domain error. Zero dependencies; isomorphic (server + client).

## Exports

- `TcError(code, message?, details?, status?)` — the domain error every package throws. `code` is a **specific** snake_case string in the `entity_reason` shape (e.g. `user_not_found`, `invalid_credentials`, `email_already_registered`) — never a vague `not_found`. `details?` is any serializable object. `status?` is the HTTP status the error crossed the wire with, when known (set by transports mapping a response into a TcError); NOT in `toJSON()` — on the wire it's the response's HTTP status, never a body field. `toJSON()` → `{ error, details? }` (the wire shape the client reads). Each domain owns its own codes.

```ts
import { TcError } from "@treecombinator/sdk-common";
throw new TcError("email_already_registered");
```
