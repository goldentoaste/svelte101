<script>
    import Prism from "svelte-prism";
</script>

<h1 class="title">Page Routing</h1>

<p>
    SvelteKit uses a file system based routing, similar to NextJS. Every folder
    in the routes directory represents a path segment in the url.
    <br />
    For example the page marked with arrow is reached by "https://domain.name/about/secret".
</p>

<Prism language="plain">
    {`routes/
├── +page.svelte
├── +layout.svelte
├── info/
│   └── +page.svelte
└── about/
    ├── +page.svelte
    └── secret/
        └── +page.svelte <-- Display this page
`}
</Prism>

<p>
    Generally each sub-folder in routes contains +page.svelte and
    +layout.svelte. It can also have some speical .ts or .js files to control
    SSR behaviours.
</p>

<h2 class="title">+page.svelte</h2>
<p>
    +page.svelte contains the actual page content at a route, and is just a
    regular svelte component. It's a good idea to divide common parts of the
    page to smaller components, and the +page.svelte be a composition of them.
</p>

<h2 class="title">+layout.svelte</h2>
<p>
    +layout.svelte defines Ui elements, page layouts and code that will be
    inherited by all sub directories.
    <br />
    For example on this presentation site, the top nav bar is defined in root directory's
    +layout.
    <br />
    ./presention/+layout.svelte contains the table of content on the left, the Prev
    and Next buttons, and layouts for the center contents.
    <br />
    If there are any code that applies to all of the sub pages, such as user login,
    +layout is a good place to do it.

    <br />
    It's also important to note that +layout should always have a
    <span class="inline">{"<slot/>"}</span> to indicate where the sub pages should
    go, otherwise nothing will be rendered!
</p>
