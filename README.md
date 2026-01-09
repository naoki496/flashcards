# Flashcards（ランダム）PWA

サーバー運用不要のフラッシュカードPWAです。生徒へURL配布 → 各自がCSVをインポートして使用します。
学習履歴（今日見た枚数・出題履歴）は各端末内に保存されます。

## 使い方（生徒）
1. 配布されたURLを開く
2. 「CSVインポート」→ 先生から配布されたCSVを選ぶ
3. 「次へ（ランダム）」で学習
4. 端末移行に備えて「学習データをバックアップ」推奨

※スマホは「ホーム画面に追加」でアプリ風に使えます。

## CSV形式（標準）
- ヘッダあり：front,back（2列）
- ヘッダ無しでも2列なら取り込み可能

例：
front,back
問題,答え

## 公開（先生：GitHub Pages）
1. GitHubで新規リポジトリ作成
2. 本フォルダの中身（index.html, manifest.json, sw.js, icon-*.png）をルートに置く
3. Settings → Pages → Branch を main / root に設定
4. 表示されたURLを生徒に配布

## 同梱ファイル
- deck_kanbun.csv : 漢文句法デッキ（配布用）
- deck_template.csv : テンプレ
