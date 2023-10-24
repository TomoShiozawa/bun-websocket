# 勉強会でライブコーディングしてたやつ

[Bun](https://bun.sh/)が必要になるのでそれはお好みの経路で入れてください。

[Bun installation](https://bun.sh/docs/installation)

## 準備

```bash
// パッケージ入れる
bun install
```

## 使い方

### サーバー起動

```bash
bun run server
```

portを変えたい場合は`.env`ファイルをルートに作成して`PORT`を設定してください。

```env
PORT=3333
```

### クライアント起動

```bash
bun run client

// 引数からusernameの設定もできます
bun run client Alice
```
