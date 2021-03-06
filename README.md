## 概要

Next.jsの練習ついでに作成した宿泊予約アプリ

![スクリーンショット 2021-11-23 13 35 42](https://user-images.githubusercontent.com/66961071/142971983-769db1a3-7ff6-47d4-9270-34128db5e5d8.png)

## 機能

### ユーザー側

- 登録&ログイン機能（メールアドレス&パスワード）
- プロフィール作成・更新（ユーザー名・メールアドレス・アバター画像）
- パスワードを忘れた際の再設定（メール配信）
- 宿泊の予約
- 宿泊レビュー
- 予約一覧確認（予約内容をPDFでダウンロード可能）
- Stripe決済

### 管理者（Admin）側

- ユーザー一覧確認
- 宿泊施設一覧確認&編集機能
- レビュー一覧確認&編集機能

## 使用技術

- Next.js
- Redux
- Vercel
- MongoDB
- StripeAPI（決済用）
- Cloudinary（アバター画像・宿泊施設画像の保存用）
