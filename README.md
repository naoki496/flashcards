# Flashcards PWA（ランダム / 生徒配布向け）

## できること
- URLで配布（GitHub Pagesなどの静的ホスティングでOK）
- 端末内保存（学習状況は各自の端末に保存）
- オフライン動作（PWA）
- ランダム出題 / 答え表示 / 表裏コピー
- 先生用：CSVインポート（任意）/ エクスポート / 既定デッキへ戻す

## 重要：初回CSVインポートは不要です
`deck_default.csv` を同梱しているため、**初回起動で自動的に既定デッキを読み込みます**。

- 生徒：URLを開くだけで使えます
- 先生：デッキを更新したいときは `deck_default.csv` を差し替えて再アップロードしてください

既定デッキの更新検知は `deck_meta.json`（version: e22fbbb517bd）で行います。

## CSVフォーマット
推奨：ヘッダ付き
```
front,back
問い,答え
```
※ヘッダ無しでも「1列目=front、2列目=back」として読み込みます。

## GitHub Pages 公開手順（概要）
1. GitHubで新規リポジトリ（Public）作成
2. このフォルダの中身（`index.html` など）をリポジトリ直下へアップロード
3. Settings → Pages → Branch: `main` / Folder: `/ (root)` → Save
4. 出てきたURLを生徒に配布

## スマホでアプリ風に使う
- iPhone（Safari）：共有 → ホーム画面に追加
- Android（Chrome）：︙ → ホーム画面に追加（またはアプリをインストール）
