import { Server } from '../Server';
import chai from 'chai';
import chaiHttp from 'chai-http';
import 'mocha';

chai.use(chaiHttp);

const app = (new Server('8000','localhost')).appAccessor();

describe('[API] GET Check', () => {
    it('Should return a 200 status', async () => {
        const res = await chai.request(app).get('/test');
        return chai.expect(res.status).to.equal(200);
    });
});
