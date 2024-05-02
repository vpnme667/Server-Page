
export default {

let url = new URL(event.request.url);
                        url.hostname = 'host.parshast.xyz';
                        url.protocol = 'https:';
                        request = new Request(url, request);
                        return await fetch(request);
       

}
