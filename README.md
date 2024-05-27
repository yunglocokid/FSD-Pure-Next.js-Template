# Next.js + Feature-Sliced Design | Pure Template

## Folders description

| Folder          | Description                                                                                                     |
|-----------------|-----------------------------------------------------------------------------------------------------------------|
| app             | Next App folder for [App Routing](https://nextjs.org/docs/app/building-your-application/routing#the-app-router) |
| public          | Public files                                                                                                    |
| src/app         | App FSD Layer                                                                                                   |
| src/pagesLayer* | Pages FSD Layer                                                                                                 |
| src/widgets     | Widgets FSD Layer                                                                                               |
| src/features    | Features FSD Layer                                                                                              |
| src/entities    | Entities FSD Layer                                                                                              |
| src/shared      | Shared FSD Layer                                                                                                |

*&nbsp;**pagesLayer**, not **pages** because _*pages*_ is a reserved name for [Pages Router](https://nextjs.org/docs/pages) and an error occurs during [assembly](https://t.me/feature_sliced/1/107414).
## Remove junk _.gitkeep_ files

### UNIX

```bash
rm -rf .src/app/.gitkeep .src/entities/.gitkeep .src/features/.gitkeep .src/shared/.gitkeep .src/widgets/.gitkeep ./public/.gitkeep
```

### WINDOWS

```bash
del .\src\app\.gitkeep
del .\src\entities\.gitkeep
del .\src\features\.gitkeep
del .\src\shared\.gitkeep
del .\src\widgets\.gitkeep
del .\public\.gitkeep
```

This template uses such development assistants

- Eslint
- Prettier
- Stylelint
- Jest

If you don't need it, you can disable it at any time by removing the
dependency from your _package.json_ and _.\*rc_ file.
