# `astaria-dto`

Shared data-transfer objects for E2E type-safety :sparkles:

### Installation

> Note: Not currently published to NPM, but can be installed by referencing the
> GitHub repository in your `package.json` file

Using SSH:

```json
{
  "name": "my-package",
  "dependencies": {
    "@astariaxyz/dto": "AstariaXYZ/astaria-dto#master"
  }
}
```

Using HTTPS:

```json
{
  "name": "my-package",
  "dependencies": {
    "@astariaxyz/dto": "https://github.com/AstariaXYZ/astaria-dto.git#master"
  }
}
```

### Usage

```ts
import { OffersByAssetResponseSchema } from "@astariaxyz/dto";
```

Or import a specific schema module (eg. for tree-shaking):

```ts
import { OffersByAssetResponseSchema } from "@astariaxyz/dto/dist/strategies";

OffersByAssetResponseSchema.parse({
  offers: [
    {
      id: "0x3d676ddad6c1e106c587d8aa92be4ee6a4f1a805e4fedbeb28b27af9fe8d8593",
      owner: "0x252537940740629AE6C83f6c5F1459c2f8F6Eb3e",
      asset: "0xd6ef92fa2ef2cb702f0bfff54b111b076ac0237d",
      amount: "777",
      price: "0.000000000000000001",
      expiresAt: "2021-09-30T00:00:00.000Z",
      createdAt: "2021-09-29T00:00:00.000Z",
    },
  ],
});
```
