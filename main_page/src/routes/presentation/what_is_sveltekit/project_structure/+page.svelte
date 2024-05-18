<script>
    import Prism from "svelte-prism";
</script>



<h1 class="title">SvelteKit Project Structure</h1>
<p>A SvelteKit project generally has 3 main folders. Static, routes, and lib. More on routes next page.</p>

<h2 class="title">Static</h2>
<p>
    As the name suggest, this folder contains the static assets your site needs,
    such as image or video content. The url for static content starts at the
    root address, the following display an img of the svelte logo.
</p>

<Prism language="html">
    {`<img src="/svelte_logo.svg" alt="svelte logo">`}
</Prism>

<h2 class="title">Lib</h2>
<p>
    The lib folder generally contains shared code accross the project. For
    example, reuseable components, shared global states, common scripts etc. 
    <br>
    SvelteKit provides "$lib" to make importing stuff from lib easier.
</p>
<Prism language="svelte">
    {
`<script>
    // import from lib like following. $lib is translated at build time to the actual path.
    import FancyList from "$lib/components/FancyList.svelte"
    import {userLogins, accDetails} from "$lib/global_states.ts";
<\/script>
`
    }
</Prism>

<h2 class="title"> 
    Example
</h2>
<Prism language="plain">
    {`// Example svelte project structure
my_project/
├── src/
│   ├── routes/
│   │   ├── +page.svelte
│   │   ├── +layout.svelte
│   │   ├── info/
│   │   │   └── +page.svelte
│   │   └── about/
│   │       └── +page.svelte
│   └── lib/
│       ├── global_states.ts
│       ├── components/
│       │   ├── MyButton.svelte
│       │   └── FancyList.svelte
│       └── scripts/
│           ├── joke_writter.ts
│           └── db_connections.ts
├── static/
│   ├── svelte_logo.svg
│   ├── favicon.png
│   └── other_data.stuff
├── .gitignore
├── package.json
└── tsconfig.json
`}
</Prism>
