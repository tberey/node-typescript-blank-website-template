import { SimpleTxtLogger } from 'simple-txt-logger';
import express, { Express, Router } from 'express';
import session from "express-session";
import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors';


declare module 'express-session' {
    interface SessionData {
        username: string;
        password: string;
        email: string;
        membership: string;
        loggedin: boolean;
    }
}


export class ServerSetup {
    private port: string;
    private hostname: string;
    private server: http.Server;
    private app: Express;

    protected router: Router;
    protected txtLogger: SimpleTxtLogger;



    protected constructor(port: string = '4000', hostname: string = '127.0.0.1') {
        if (dotenv.config().parsed) console.info('\nSecrets File .env Loaded.\n');
        else console.info('\nNo Secrets Loaded.\n');

        this.txtLogger = new SimpleTxtLogger(SimpleTxtLogger.newDateTime(), 'Server', 'Website');
        this.txtLogger.writeToLogFile(`...::STARTING SERVER::...`);

        this.port = process.env['PORT'] || port;
        this.hostname = process.env['HOSTNAME'] || hostname;
        this.router = express.Router();
        this.app = express();
        this.serverConfig();

        this.server = new http.Server(this.app);

        this.serverStart();
    }

    private serverConfig(): void {
        this.txtLogger.writeToLogFile(`Configuring Server.`);

        this.app.use(session({
            /*
            store: new FileStore(), // Store Session Data in DB or Cache.
            */
            cookie: {
                maxAge: 36000000,
                httpOnly: true
              },
            secret: 'SessionSecret',
            saveUninitialized: true,
            resave: false
        }));

        this.app.use(cors({ origin: ['*'] }));

        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.static('public'));
        this.app.set('view engine', 'ejs');

        this.app.use("/", this.router);
    }

    private serverStart(): void {
        this.server.listen(parseInt(this.port), this.hostname, () => this.txtLogger.writeToLogFile(
            `Server Configured. Listening on Port ${parseInt(this.port)}, with Host ${this.hostname}`
        ));
    }

    // Accessor needed for testing only. So property 'this.app' can remain private.
    public appAccessor(app = this.app): Express { return app; }
}