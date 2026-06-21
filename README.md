# @treecombinator/sdk-common

---

> Developed by Danthur Lice.\
> Copyright © 2026 Tree Combinator.\
> Contact: dev (at) treecombinator.com

---

The **common** primitive of the Tree Combinator SDK — the one genuinely shared piece: `TcError`, the domain error that crosses the wire between server and client. Zero runtime dependencies, isomorphic.

## Install

```bash
npm install github:treecombinator/sdk-common
```

## Use

```ts
import { TcError } from "@treecombinator/sdk-common";

throw new TcError("user_not_found", "no user for that email"); // serializes as { error: "user_not_found" }
```

`TcError(code, message?, details?)` is the domain error every package throws. `code` is a **specific** snake_case string in the `entity_reason` shape — `user_not_found`, `invalid_credentials`, `email_already_registered` — never a vague `not_found`. Each domain owns its own codes. `toJSON()` is the `{ error, details? }` wire shape the client maps back to a human message.
