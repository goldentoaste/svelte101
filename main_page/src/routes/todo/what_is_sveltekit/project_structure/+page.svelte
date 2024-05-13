<script>
    import Prism from "svelte-prism";
</script>
<h1>SvelteKit Project Structure</h1>

<Prism>
{
`my_project/
├── static/
│   ├── svelte_logo.svg
│   ├── favicon.png
│   └── other_data.stuff
├── src/
│   └── routes/
│       ├── +page.svelte
│       ├── +layout.svelte
│       ├── info/
│       │   └── +page.svelte
│       └── about/
│           └── +page.svelte
└── lib/
    ├── MyButton.svelte
    ├── FancyList.svelte
    └── script/
        ├── joke_maker.ts
        └── joker_enhancer.ts
`
}
</Prism>
