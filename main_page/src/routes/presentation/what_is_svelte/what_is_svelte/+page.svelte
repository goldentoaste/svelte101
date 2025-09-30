<h1 class="title">So, what is Svelte?</h1>

<p>
    Svelte is a javascript framework to build components with, similar to React or Vue. But Svelte
    use it's own template syntax, unlike React requiring everything to be a JS file.
</p>

<h2 class="title">Better Dev Experience</h2>
<ul>
    <li>Simple reactivity & states (no more useEffect, useRef, useMemo, useCallback...)</li>
    <li>Simpler conditional classes and rendering</li>
    <li>Builtin component transitions</li>
</ul>

<h2 class="title">Easier to Learn</h2>

<ul>
    <li>Automatic state handling, no need for dependency array!</li>
    <li>Cleaner syntax, clear templating. Html Template is separate from script</li>
    <li>
        "Batteries-included", many basic features are already included in the framework, so no need
        to install and learn many external libraries.
    </li>
    <li>Css scoped to component by default</li>
    <li><a href="Official interactive tutorial">Official interactive tutorial</a></li>
</ul>

<h2 class="title">Better Performance</h2>
<ul>
    <li>
        Svelte is compiled to raw html/js/css, without any runtime dependencies -> Faster page load
        time
    </li>
    <li>
        State is automated managed so that components only "re-render" when it's supposed to. ->
        Less Unnecessary script runs.
    </li>
</ul>

<h2 class="title">Ecosystem</h2>
<ul>
    <li>
        Svelte has a active community supporting both the framework and other compatible libraries.
        For example here are some UI component libs to choose from:
        <ul>
            <li>
                <a href="https://shadcn-svelte.com/">ShadCn for Svelte</a>
            </li>
            <li><a href="https://www.melt-ui.com/">Melt UI</a></li>
            <li>
                <a href="https://www.skeleton.dev/">Skeleton UI</a>
            </li>
        </ul>
    </li>
    <li>
        Although most major js libraries supports Svelte now, Svelte is also very compatible with
        older libraries for vanilla JS, without needing special adapters.
    </li>
    <li>
        Actively developed: Much improved server-side async handle, and built-in "tRPC" coming later
        this year.
    </li>
</ul>
