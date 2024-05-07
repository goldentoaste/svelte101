/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	let theme = event.cookies.get("theme" ) || "dark"; // defaults to darkmode

	const response = await resolve(event, {
        transformPageChunk: ({html})=>{
            return html.replace("data-theme=\"\"", `data-theme="${theme}"` )
        }
    });
	return response;
}