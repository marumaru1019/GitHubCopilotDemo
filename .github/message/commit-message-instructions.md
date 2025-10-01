# Commit Message Generation Instructions

## Format
Conventional Commits形式を使用してください。

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Types
- **feat**: 新機能の追加
- **fix**: バグ修正
- **docs**: ドキュメントのみの変更
- **style**: コードの意味に影響を与えない変更(空白、フォーマット、セミコロンの欠落など)
- **refactor**: バグ修正でも機能追加でもないコード変更
- **perf**: パフォーマンスを向上させるコード変更
- **test**: 不足しているテストの追加または既存のテストの修正
- **chore**: ビルドプロセスまたは補助ツールとライブラリ(ドキュメント生成など)の変更

## Rules
1. subject(件名)は50文字以内に収める
2. subjectの最初の文字は大文字にする(日本語の場合は不要)
3. subjectの末尾にピリオドを付けない
4. subjectは命令形で書く(例: "Add feature" not "Added feature")
5. bodyは72文字で折り返す
6. bodyでは「何を」「なぜ」変更したかを説明する(「どのように」は省略可)
7. 破壊的変更がある場合は、footerに `BREAKING CHANGE:` を記載する
8. issueやタスクへの参照は、footerに記載する(例: `Closes #123`)

## Language
- 日本語または英語で記述可能
- プロジェクトの慣習に従う
- 一貫性を保つ

## Additional Guidelines
- コミットは論理的な単位で分割する
- 1つのコミットで1つの目的を達成する
- レビュアーが理解しやすい粒度を心がける
