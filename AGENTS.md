# AGENTS.md — @treecombinator/sdk-common

The one shared primitive of the Tree Combinator SDK: the domain error. Zero dependencies; isomorphic (server + client).

## Exports

- `TcError(code, message?, details?)` — the domain error every package throws. `code` is a **specific** snake_case string in the `entity_reason` shape (e.g. `user_not_found`, `invalid_credentials`, `email_already_registered`) — never a vague `not_found`. `details?` is any serializable object. `toJSON()` → `{ error, details? }` (the wire shape the client reads). Each domain owns its own codes.

```ts
import { TcError } from "@treecombinator/sdk-common";
throw new TcError("email_already_registered");
```
