# @treecombinator/sdk-common

---

> Developed by Danthur Lice.\
> Copyright © 2026 Tree Combinator.\
> Contact: dev (at) treecombinator.com

---

The **common** primitive of the Tree Combinator SDK — the one genuinely shared piece: the error contract (`TcError` + `ERROR_CODES`) that crosses the wire between server and client. Zero runtime dependencies, isomorphic.

## Install

```bash
npm install github:treecombinator/sdk-common
```

## Use

```ts
import { TcError, ERROR_CODES, type ErrorCode } from "@treecombinator/sdk-common";

throw new TcError("not_found", "user not found"); // serializes as { error: "not_found" }
```

`TcError(code, message?, details?)` is a domain error carrying a stable `ErrorCode`; its `toJSON()` is the `{ error, details? }` wire shape the client maps back to a message. `ERROR_CODES` is the canonical snake_case list both sides share (`unauthorized`, `forbidden`, `not_found`, `invalid_input`, `conflict`, `rate_limited`, `internal`).
