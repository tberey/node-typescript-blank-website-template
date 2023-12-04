import { ServerSetup } from './ServerSetup';
import { Request, Response } from 'express';



export class Server extends ServerSetup {

    public constructor(port?: string, hostname?: string) {
        super(port, hostname);
        this.getRequests();
        this.postRequests();
    }



    private logRequest(req:Request, res:Response): void {
        this.txtLogger.writeToLogFile(
            'Request Completed:\n'
            +`  Type: ${req.protocol}\n`
            +`  ${req.method}: ${req.url}\n`
            +`  Host: ${req.hostname}\n`
            +`  IP: ${req.ip}\n`
            +`  Status: ${res.statusCode}\n`
            +`  SessionID: ${req.sessionID}`
        );
    }



    private getRequests(): void {
        this.router.get('/', async (req:Request, res:Response) => {
            this.txtLogger.writeToLogFile('Request Made: GET /');

            res.status(200).render('index.ejs');
            this.logRequest(req, res);
        });


        this.router.get('/login', async (req:Request, res:Response) => {
            this.txtLogger.writeToLogFile('Request Made: GET /login');

            if (!req.session.loggedin) return res.status(401).redirect('/');

            try {
                if (req.query && req.query['queryString']) {
                    const { queryString } = req.query;
                    this.txtLogger.writeToLogFile(`Query String "queryString" Value: ${queryString}`);
                }

            } catch (err) {
                this.txtLogger.writeToLogFile(`An error occurred: ${err}`);

            } finally {
                res.status(200);
                res.render('index.ejs', { loggedIn: req.session.loggedin, username: req.session.username, email: req.session.email });
                this.logRequest(req, res);
            }
        });


        this.router.get('/test', async (_req:Request, res:Response) => {
            res.status(200).redirect('/');
        });
    }



    private postRequests(): void {
        this.router.post('/logout', async (req:Request, res:Response) => {
            this.txtLogger.writeToLogFile('Request Made: POST /logout');

            req.session.loggedin = false;
            req.session.username = '';
            req.session.email = '';

            res.status(200).redirect('/');
            this.logRequest(req, res);
        });


        this.router.post('/login', async (req: Request, res: Response) => {
            this.txtLogger.writeToLogFile('Request Made: POST /login');

            let status: number = 418;

            try {
                const { username, password } = req.body;

                if (!username.toString() || !password.toString()) {
                    this.txtLogger.writeToLogFile('Login failed. Enter your username and password.');
                    return status = 400;
                }

                const checkLoginDataInDB: boolean = await true;
                const getLoginData = { username: 'username', email: 'email' };

                if (checkLoginDataInDB && getLoginData) {
                    req.session.loggedin = true;
                    req.session.username = getLoginData.username;
                    req.session.email = getLoginData.email;
                    return status = 200;
                }

                this.txtLogger.writeToLogFile('Login failed. Incorrect username or password.');
                return status = 401;

            } catch (err) {
                this.txtLogger.writeToLogFile(`An error occurred during Login:  ${err}`);
                return status = 500;

            } finally {
                res.status(status).redirect('/');
                this.logRequest(req, res);
            }
        });
    }
}