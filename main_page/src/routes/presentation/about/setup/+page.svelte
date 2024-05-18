<script>
    import Prism from "svelte-prism";
</script>

<h1 class="title">Setting Up the Environment</h1>
<p>
    This sections includes everything you need to get start with Svelte. For
    experienced web devs, you probably have most things already.
</p>

<span>We will be using the following:</span>
<ul>
    <li>
        <a target="_blank" href="https://code.visualstudio.com/">
            <img src="/vscode.png" alt="vscode logo" />Vscode</a
        >
    </li>

    <li>
        <a target="_blank" href="https://nodejs.org/en/download/current">
            <img src="/node.svg" alt="node js logo" />Node.Js</a
        >
    </li>

    <li>
        <a
            target="_blank"
            href="https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode"
        >
            <img src="/svelte.svg" alt="svelte logo" />Svelte extension for
            Vscode</a
        >
    </li>

    <li>
        <a target="_blank" href="https://desktop.github.com/"
            ><img src="/github.png" alt="github logo" />Github Desktop</a
        >
        or any
        <a target="_blank" href="https://git-scm.com/downloads"
            ><img src="/git.svg" alt="Git" /> Git</a
        > solution you prefer
    </li>
    <li>
        ! Clone the <a
            target="_blank"
            href="https://github.com/goldentoaste/svelte_todo_template"
            >Template Code</a
        > here using git.
    </li>

    <li>
        <img src="/vercel.png" alt="vercel logo" />
        Prepare Github logins for Vercels
    </li>
</ul>

<div class="horDiv" />

<section>
    <h2 class="title">Template Code for Todo app</h2>
    <p>
        <a
            target="_blank"
            href="https://github.com/goldentoaste/svelte_todo_template"
        >
            Clone the repo here</a
        ><br />
        <br />
        This template repo contains skeleton code for the todo app we will be making.
        It also has some css already to the app look nicer.

        <br /> <br />
        On the Github page there should be a green button that says "Use this template",
        which you can use to create a new repo using the template code.
    </p>
    <img src="/git_template.png" alt="" style="width: 100%;" />
    <img src="/git_template2.png" alt="" style="width: 400px;" />

    <p>
        You can also initialize a new Svelte from scratch if you want to:
        <Prism language="plain">
            {"npm create svelte@latest my-app"}
        </Prism>
    </p>
</section>

<section>
    <h2 class="title">
        <img src="/vscode.png" alt="vscode logo" class="large" />
        Vscode
    </h2>
    <a target="_blank" href="https://code.visualstudio.com/">
        Download Vscode Here</a
    >

    <p>
        Vscode is a popular code editor that supports most languages and
        frameworks through extensions, in particular Svelte has first-party for
        support for a vscode extension, and so will be used for this workshop.
        Installing vscode should be fairly straight forward.

        <br /><br />
        Some alternative IDEs are JetBrain's WebStorm, or NeoVim are viable as well,
        with third-party extensions.
    </p>
</section>

<section>
    <h2>
        <img src="/node.svg" alt="node logo" />
        Node.Js
    </h2>

    <a target="_blank" href="https://nodejs.org/en/download/current"
        >Download Node Here</a
    >

    NodeJs is a "javascript runtime environment". We will just use it as a
    package manager, and to initialize and run our project. Choosing all the
    default options in the Node.Js' install wizard should be fine.

    <Prism language={"plain"}>
        {`# Test if the installation is successful, if the following prints a version number in terminal
node -v
> v20.11.0`}
    </Prism>
</section>

<section>
    <h2>
        <img src="/svelte.svg" alt="ndoe logo" />
        Svelte Extension
    </h2>

    <a
        target="_blank"
        href="https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode"
        >Install the Svelte for Vscode extension</a
    >

    This extension probides features syntax highlighting, formatting, auto
    complete,
    <a target="_blank" href="https://docs.emmet.io/cheat-sheet/">Emmet</a> etc,
    so you probably want this.

    <br />
    I would also recommend
    <a
        href="https://marketplace.visualstudio.com/items?itemName=MrAmericanMike.sveltesnippets"
        >this extension</a
    >, which adds bunch of useful snippets which I use to type the if and each
    block quicker.

    <br />
    I would also recommend that in your Vscode settings, set "Explorer: Sort Order"
    to "filesFirst". This will put files before folders on the left hand side, lets
    you view svelte or nextjs project more cleanly.
</section>

<section>
    <h2>
        <img src="/vercel.png" alt="ndoe logo" />
        Vercel
    </h2>

    <a target="_blank" href="https://vercel.com/login"
        >Try loggin to Vercel with your Github</a
    >

    <p>
        We will be using Vercel to deploy with finished todo. Vercel has a
        generous free tier, gives you a clean public url, and is *very* easy to
        deploy to.
    </p>
</section>

<style>
    section {
        margin: 0.5rem;
        border: var(--bg5) solid 2px;
        padding: 1rem;
    }

    img {
        width: 24px;
        vertical-align: middle;
        margin-right: 0.25rem;
    }

    img.large {
        width: 2.75rem;
    }

    a {
        text-decoration: underline;
    }
</style>
