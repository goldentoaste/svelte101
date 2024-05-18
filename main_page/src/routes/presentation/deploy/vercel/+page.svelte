<h1 class="title">Deploying to Vercel</h1>

<p>
    You can deploy SvelteKit sites anywhere websites usually goes to. But for hobbist like myself, I
    would recommend GitHub pages, or Vercel.
    <br />
    Github pages is good for static pages and you get a nice github url for your site, and setting it
    up not too much work.

    <br />
    Vercel is my preferred provider, since deploying on it is very easy, and for Svelte it takes no configurations
    at all for a basic projects.
</p>

<a target="_blank" href="https://vercel.com/" style="font-size: x-large;">Link to vercel</a>

<p>
    To get started, go head to Vercel and login with your github account. Then in the Vercel
    dashboard, you should see a button to add a new project.
</p>

<img src="/vercel_1.png" alt="" />

<p>Then choose the project you want to deploy in the next menu.</p>

<img src="/vercel_2.png" alt="" />

<p>
    The default project settings should be fine, Vercel detects the framework you used and selects
    the right config by itself. Hit Deploy.
</p>
<img src="/vercel_3.png" alt="" />

<p>Building should finish in about 30 seconds</p>
<img src="/vercel_4.png" alt="" />

<p>
    When finished, click on your website preview, or to your dashboard. The deployed url should be <span class="inline">{"https://<repo_name>.vercel.app"}</span>
    if your repo name is unique.
</p>
<img src="/vercel_5.png" alt="" />
<img src="/vercel_6.png" alt="" />

<h2 class="title">And thats it!</h2>

<style>
    img {
        max-width: 100%;
    }
</style>
