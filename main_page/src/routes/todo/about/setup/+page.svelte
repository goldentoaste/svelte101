<h1 class="title">Settiing Up the Environment</h1>
<p>
    This sections includes everything you need to get start with Svelte. For
    experienced web devs, you probably have most things already.
</p>

<span>We will be using the following:</span>
<ul>
    <li>
        <a href="https://code.visualstudio.com/">
            <img src="/vscode.png" alt="vscode logo" />Vscode</a
        >
    </li>

    <li>
        <a href="https://nodejs.org/en/download/current">
            <img src="/node.svg" alt="node js logo" />Node.Js</a
        >
    </li>

    <li>
        <a
            href="https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode"
        >
            <img src="/svelte.svg" alt="svelte logo" />Svelte extension for
            Vscode</a
        >
    </li>

    <li>
        <a href="https://desktop.github.com/"
            ><img src="/github.png" alt="github logo" />Github Desktop</a
        >
        or any
        <a href="https://git-scm.com/downloads"
            ><img src="/git.svg" alt="Git" /> Git</a
        > solution you prefer
    </li>
    <li>
        ! Clone the <a href="stuff">Template Code</a> here using git.
    </li>

    <li>
        <img src="/vercel.png" alt="vercel logo" />
        Prepare Github logins for Vercels
    </li>
</ul>

<div class="horDiv"></div>

<section>
    <h2 class="title">Template Code for Todo app</h2>
    <p>
        <a href="stuf"> Clone the repo here</a><br />
        <br />
        This template repo contains skeleton code for the todo app we will be making.
        It also has some css already to the app look nicer.
    </p>
</section>

<section>
    <h2 class="title">
        <img src="/vscode.png" alt="vscode logo" class="large" />
        Vscode
    </h2>
    <a href="https://code.visualstudio.com/"> Download Vscode Here</a>

    <p>
        Vscode is a popular code editor that s  upports most languages and
        frameworks through extensions, in particular Svelte has first-party for
        support for a vscode extension, and so will be used for this workshop. 
        Installing vscode should be fairly straight forward.
        
        <br><br>
        Some alternative IDEs are JetBrain's WebStorm, or NeoVim are viable as well, with third-party extensions.
    </p>
</section>

<section>
    <h2>
        <img src="/node.svg" alt="ndoe logo">
        Node.Js
    </h2>

    <a href="https://nodejs.org/en/download/current">Download Node Here</a>

    NodeJs is a "javascript runtime environment". We will just use it as a package manager, and to initialize and run our project. 
    Choosing all the default options in the Node.Js' install wizard should be fine.
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
