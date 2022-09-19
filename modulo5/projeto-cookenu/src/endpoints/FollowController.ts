import { Request, Response } from 'express';
import MissingParameters from '../error/MissingParameters';
import Authenticator from '../services/Authenticator';
import GenerateId from '../services/GenerateId';
import UserData from '../data/UserData';
import UserNotFound from '../error/UserNotFound';
import Follow from '../models/Follow';
import FollowData from '../data/FollowData';
import Confict from '../error/Confict';
import User, { UserProfile } from '../models/User';
import FollowNotFound from '../error/FollowNotFound';


class FollowController {
    
    public async getAllFollowers (req: Request, res: Response) {
            
            try {
            
                const token = req.headers.authorization as string;
    
                if (!token) {
                    throw new MissingParameters("authorization");
                }
        
                const authenticator = new Authenticator();
                const authenticatorData = authenticator.getData(token);
        
                const followData = new FollowData();
                const followers: Follow[] | [] = await followData.selectFollowersUsers(authenticatorData.id);
        
                if(!followers) {
                throw new FollowNotFound("You don't have followers");
                }
        
                const userData = new UserData();
                const result = followers.map(async (follow: Follow): Promise<UserProfile> => {
                    const user: User = await userData.selectUserById(follow.getIdFollower());
                    return {
                        id: user.getId(),
                        name: user.getName(),
                        email: user.getEmail()
                    };
                });
        
                res.status(200).send(await Promise.all(result));
    
            } catch (error) {
                error.sqlMessage ? res.status(500).send({ message: error.sqlMessage }) 
                    : res.status(error.statusCode || 400).send({ message: error.message });
            }
    
    }


    public async getAllFollowing (req: Request, res: Response) {

        try {
           
            const token = req.headers.authorization as string;

            if (!token) {
                throw new MissingParameters("authorization");
            }
    
            const authenticator = new Authenticator();
            const authenticatorData = authenticator.getData(token);
    
            const followData = new FollowData();
            const following: Follow[] | [] = await followData.selectAllFollowingByUserId(authenticatorData.id);
    
            if(!following) {
               throw new FollowNotFound("You don't follow anyone");
            }
    
            const userData = new UserData();
            const result = following.map(async (follow: Follow): Promise<UserProfile> => {
                const user: User = await userData.selectUserById(follow.getIdFollowed());
                return {
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail()
                };
            });
    
            res.status(200).send(await Promise.all(result));

        } catch (error) {
            error.sqlMessage ? res.status(500).send({ message: error.sqlMessage }) 
                : res.status(error.statusCode || 400).send({ message: error.message });
        }

    }


    public async followVerify (req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string;
            const idFollowed = req.params.id as string;

            if (!token || !idFollowed) {
                throw new MissingParameters("authorization and id");
            };

            const authenticator = new Authenticator();
            const authenticatorData = authenticator.getData(token);

            const userData = new UserData();
            const user = await userData.selectUserById(idFollowed);

            if (!user) {
                throw new UserNotFound();
            }

            const followData = new FollowData();
            const isFollowed = await followData.selectFollowedUsers(authenticatorData.id, idFollowed);

            res.status(200).send(isFollowed ? { following: true } : { following: false })

        } catch (error) {
            error.sqlMessage ? res.status(500).send({ message: error.sqlMessage }) 
                : res.status(error.statusCode || 400).send({ message: error.message });
        };
    }

    public async followUser(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string;
            const idFollowed = req.params.id as string;

            if (!token || !idFollowed) {
                throw new MissingParameters("authorization and id");
            };

            const authenticator = new Authenticator();
            const authenticatorData = authenticator.getData(token);

            const userData = new UserData();
            const user = await userData.selectUserById(idFollowed);

            if (!user) {
                throw new UserNotFound();
            };

            const followData = new FollowData();
            const isFollowed = await followData.selectFollowedUsers(authenticatorData.id, idFollowed);

            if (isFollowed) {
                throw new Confict("You already follow this user");
            }

            if(authenticatorData.id === idFollowed) {
                throw new Confict("You can't follow yourself");
            }

            const generateId = new GenerateId();
            const id = generateId.generate();

            const follow = new Follow(id, authenticatorData.id, idFollowed);
            await followData.insertFollow(follow);

            res.status(200).send({ message: "Followed successfully" });

        } catch (error) {
            error.sqlMessage ? res.status(500).send({ message: error.sqlMessage }) 
                : res.status(error.statusCode || 400).send({ message: error.message });
        };
    }

    public async unfollowUser(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string;
            const idFollowed = req.params.id as string;

            if (!token || !idFollowed) {
                throw new MissingParameters("authorization and id");
            };

            const authenticator = new Authenticator();
            const authenticatorData = authenticator.getData(token);

            const userData = new UserData();
            const user = await userData.selectUserById(idFollowed);

            if (!user) {
                throw new UserNotFound();
            };

            if(authenticatorData.id === idFollowed) {
                throw new Confict("You can't unfollow yourself");
            }

            const followData = new FollowData();
            const isFollowed = await followData.selectFollowedUsers(authenticatorData.id, idFollowed);

            if (!isFollowed) {
                throw new Confict("You don't follow this user");
            }

            await followData.deleteFollow(authenticatorData.id, idFollowed);

            res.status(200).send({ message: "Unfollowed successfully" });

        } catch (error) {
            error.sqlMessage ? res.status(500).send({ message: error.sqlMessage }) 
                : res.status(error.statusCode || 400).send({ message: error.message });
        };
    }

}

export default FollowController;