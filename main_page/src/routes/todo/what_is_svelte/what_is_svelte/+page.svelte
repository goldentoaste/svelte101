<h1 class="title">So, what is Svelte?</h1>

<p>
    Svelte is a javascript framework to build components with, similar to React
    or Vue. But Svelte is also a compiler, that turns the svelte component you
    write directly to Js that runs in the browser(without a Virtual DOM like
    react). Being a compiler, Svelte is allowed to do a few magic tricks that
    gives:
</p>

<h2 class="title">Better Dev Experience</h2>
<ul>
    <li>
        Simple reactivity & states (no more useEffect, useRef, useMemo,
        useCallback...)
    </li>
    <li>Simpler conditional classes and rendering</li>
    <li>Builtin component transitions</li>
    <li>Better event handling</li>
</ul>

<h2 class="title">Easier to Learn</h2>
<p>
    During compilation, Svelte checks all the variable the UI depends on, and
    the variables that depends on each other, and makes them all reactive. This
    along with previously mentioned takes burden off the programmer so that the
    framework is easy to use, and enjoyable to use.
</p>

<h2 class="title">Better Performance</h2>
<p>
    Svelte's compiler produces vanilla html/js web pages so no virtual DOM needs
    to shipped to user's browser, and together with optimized state
    dependencies, leads to less overhead, faster page loads, and better performance in interactive pages.
</p>

<span style="filter: brightness(0.6); font-size:medium;">
    *Disclaimer: Svelte used to have a <em>significant</em> performance advantage
    over other frameworks a few years ago, however others has caught somewhat lately. Svelte 5 is currently in the works and promises improved compiler.
    Currently performance ranking is more like Solid &gt Inferno &gt Svelte/Vue &gt React &gt Angular.
</span>
