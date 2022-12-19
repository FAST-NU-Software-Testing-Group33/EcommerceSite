import http from 'k6/http';
import {sleep} from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '5m', target: 100 },
        { duration: '10m', target: 100 },
        { duration: '5m', target: 0 },
    ],
    threshold: {
        http_req_duration: ['p(99)<150'],
    },
};

export default () => {
    let response = http.get('http://localhost:8000/');
    sleep(1);
}