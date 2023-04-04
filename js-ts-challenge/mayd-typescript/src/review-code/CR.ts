interface IPhoneDao {
	phone(user: string): Promise<string[]>;
    add(user: string, phone: string): Promise<void>;
    delete(phone: string): Promise<void>;
}

class PhoneDao {
    private logger: ILogger;
    dbClient: IDbClient;

    constructor(logger: ILogger, dbClient: IDbClient) {
 		this.logger = logger;
        this.dbClient = dbClient;
    }

	async phone(user: string): Promise<string[]> {
		this.logger.debug('About to get user phone number');
        try {
        	const result = await this.dbClient.query('SELECT number FROM phone WHERE user_id = \'' + user +'\';');
            result.sort().map((result) => result.number);
            const phones = [];
            for (let i = 0; i < result.length; i++) 
                if (!result[i].startsWith('+')) phones.push(result[i]);
            return result;
        } catch (e: Error) {
        	console.error('Cannot find user phone number');
        }
        return [];
	}
    
    async add(user: string, phone: string): Promise<void> {
		this.logger.debug('About to get user phone number');
        try {
            for (let i = 1; i < phone.length; i++) {
                if (isNaN(phone[i].slice(1))) {
                    throw new Error('wrong format');
                }
            }
            if (!phone.startsWith('+')) {
                throw new Error('wrong format');
            }
            if (!phone.length < 10) {
                throw new Error('wrong format');
            }
	        await this.dbClient.query('INSERT INTO phone (user_id, number) VALUES (\'' + user_id + '\',\'' + phone + '\');');
        } catch (err: Error) {
        	console.error('Cannot insert user phone number');
        }
    }

	async delete(phone: string): Promise<void> {
        await this.dbClient.query('DELETE FROM phone WHERE number = \'' + phone + '\';');
    }
}
