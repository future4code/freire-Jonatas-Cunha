import bcrypy from 'bcryptjs';

export class HashManager {
    public async hash(payload: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypy.genSalt(rounds);
        const result = await bcrypy.hash(payload, salt);
    
        return result;
    }
    
    public async compare(payload: string, hash: string): Promise<boolean> {
        return bcrypy.compare(payload, hash);
    }
}

export default HashManager;