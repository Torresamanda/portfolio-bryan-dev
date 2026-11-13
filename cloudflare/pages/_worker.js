const PORTFOLIO_ORIGIN = 'https://portfolio-bryan-dev.arquivoslimiar.workers.dev';

const worker = {
  fetch(request) {
    const incoming = new URL(request.url);
    const upstream = new URL(PORTFOLIO_ORIGIN);
    upstream.pathname = incoming.pathname;
    upstream.search = incoming.search;
    return fetch(new Request(upstream, request));
  },
};

export default worker;
