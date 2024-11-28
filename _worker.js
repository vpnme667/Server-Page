export default {
    async fetch(request, env) {
                        const url = new URL(request.url);
                        url.hostname = env.HOST || 'ictfz.ir';
                        url.protocol = 'https:';
                        request = new Request(url, request);
                        return fetch(request);      
    }
};
