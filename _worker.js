import { connect } from 'cloudflare:sockets';
export default {
    async fetch(request, env, ctx) {
        try {
                        const url = new URL(request.url);
                        url.hostname = 'host.parshast.xyz';
                        url.protocol = 'https:';
                        request = new Request(url, request);
                        return await fetch(request);
       

              }
        }
}
