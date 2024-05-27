# Next.js + Feature-Sliced Design | Pure Template

## IMPORTANT

Do not delete the pages\* folder even if you are using App Router, deleting the pages folder
will result in a [build error](https://t.me/feature_sliced/1/107414).

In WebStorm you can mark a directory as [excluded](https://www.jetbrains.com/help/webstorm/configuring-project-structure.html#content-root). After that, you won’t see it in shared files (like, for example, node_modules or .next)

## ADDITIONAL SOLUTION TO THE PROBLEM (NOT RECOMMENDED)

If you don't like the empty "pages" folder in the project root, you can rename the pages layer (./src/pages)
for example to "pagesLayer" and then delete the pages folder from the project root 
(you will also have to change path aliases in tsconfig and similar).

**Use what you like best <3**

---

## Folders description

| Folder       | Description                                                                                                     |
| ------------ | --------------------------------------------------------------------------------------------------------------- |
| app          | Next App folder for [App Routing](https://nextjs.org/docs/app/building-your-application/routing#the-app-router) |
| pages \*     | Next Pages folder for [Pages Routing](https://nextjs.org/docs/pages)                                            |
| public       | Public files                                                                                                    |
| src/app      | App FSD Layer                                                                                                   |
| src/pages    | Pages FSD Layer                                                                                                 |
| src/widgets  | Widgets FSD Layer                                                                                               |
| src/features | Features FSD Layer                                                                                              |
| src/entities | Entities FSD Layer                                                                                              |
| src/shared   | Shared FSD Layer                                                                                                |

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
