import Follow  from "../models/Follow";
import BaseDataBase from "./BaseDataBase";


class FollowData extends BaseDataBase {

    public async selectFollowedUsers(idFollower: string, idFollowed: string): Promise<any> {
        const result = await BaseDataBase.getConnection().into("cookenu_follow")
            .select("*")
            .where({ follower_id: idFollower, followed_id: idFollowed });

        return result[0] && Follow.toFollowModel(result[0]);
    } 

    public async insertFollow(data: Follow): Promise<void> {
        await BaseDataBase.getConnection().into("cookenu_follow")
            .insert({
                id: data.getId(),
                follower_id: data.getIdFollower(),
                followed_id: data.getIdFollowed()
            });
    }

    public async deleteFollow(idFollower: string, idFollowed: string): Promise<void> {
        await BaseDataBase.getConnection().into("cookenu_follow")
            .delete()
            .where({ follower_id: idFollower, followed_id: idFollowed });
    }
}

export default FollowData;