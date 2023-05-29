# Cloudflare Workers Practice

### ダッシュボード

https://dub.sh/dZcJ3aO

好きに弄って大丈夫です



### ドキュメント

https://developers.cloudflare.com/workers/


### セットアップ

wranglerのインストール

```bash
$ npm install wrangler -g
```

CLIでwranglerにログイン

```bash
$ wrangler login
```

devサーバ起動

```bash
$ wrangler dev
```

### 目標

- Cloudflare Workersのダッシュボードに慣れる
- APIサーバーを開発してデプロイするまでのフローを取得する
  - メトリクスや環境変数とかその辺の作法を感じておく
- Hono を使ってみる
- monorepo でアプリを動かしてCIでデプロイできるようにする
