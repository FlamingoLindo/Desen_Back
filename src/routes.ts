import { Router } from "express";
//Import Profile Controller
import { CreateProfileController } from "./Controller/Profile/CreateProfileController";
import { ListProfilesController } from "./Controller/Profile/ListProfileController"; 
import { DeleteProfileController } from "./Controller/Profile/DeleteProfileController";
import { UpdateProfileController } from "./Controller/Profile/UpdateProfileController";

//Import User Controller
import { CreateUserController } from "./Controller/User/CreateUserController";
import { ListUsersController } from "./Controller/User/ListUserController";
import { DeleteUserController } from "./Controller/User/DeleteUserController";
import { UpdateUserController } from "./Controller/User/UpdateUserController";
import { AuthenticateUserController } from "./Controller/Authentication/AuthenticationUserController";

//Import Feed Controller
import { CreateFeedController } from "./Controller/Feed/CreateFeedController";
import { ListFeedController } from "./Controller/Feed/ListFeedController";
import { DeleteFeedController } from "./Controller/Feed/DeleteFeedController";
import { UpdateFeedController } from "./Controller/Feed/UpdateFeedController";

//Import Tasks Controller
import { CreateTaskController } from "./Controller/Tasks/CreateTaskController";
import { ListTaskController } from "./Controller/Tasks/ListTaskController";
import { DeleteTaskController } from "./Controller/Tasks/DeleteTaskController";
import { UpdateTaskController } from "./Controller/Tasks/UpdateTaskController";

//Import Achievements Controller
import { CreateAchievementsController } from "./Controller/Achievements/CreateAchievementsController";
import { ListAchievementsController } from "./Controller/Achievements/ListAchievementsController";
import { DeleteAchievementsController } from "./Controller/Achievements/DeleteAchievementsController";
import { UpdateAchievementsController } from "./Controller/Achievements/UpdateAchievementsController";

//Import Progress Controller
import { CreateProgressController } from "./Controller/Progress/CreateProgressController";
import { ListProgressController } from "./Controller/Progress/ListProgressController";
import { DeleteProgressController } from "./Controller/Progress/DeleteProgressController";
import { UpdateProgressController } from "./Controller/Progress/UpdateProgressController";

//Midlleware
import { EnsureAuthenticated } from "./Middleware/EnsureAuthenticated";

//Profile
const createProfileController = new CreateProfileController();
const listProfileController = new ListProfilesController();
const deleteProfileController = new DeleteProfileController();
const updateProfileController = new UpdateProfileController();

//User
const createUserController = new CreateUserController();
const listUserController = new ListUsersController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const authenticateUserController = new AuthenticateUserController();

//Feed
const createFeedController = new CreateFeedController();
const listFeedController = new ListFeedController(); 
const deleteFeedController = new DeleteFeedController();
const updateFeedController = new UpdateFeedController();

//Tasks
const createTaskController = new CreateTaskController();
const listTaskController = new ListTaskController();
const deleteTaskController = new DeleteTaskController();
const updateTaskController = new UpdateTaskController();

//Achievements
const createAchievementsController = new CreateAchievementsController();
const listAchievementsController = new ListAchievementsController();
const deleteAchievementsController = new DeleteAchievementsController();
const updateAchievementsController = new UpdateAchievementsController();

//Progress
const createProgressController = new CreateProgressController();
const listProgressController = new ListProgressController();
const deleteProgressController = new DeleteProgressController();
const updateProgressController = new UpdateProgressController();

//Router
const router = Router();

//Profile
router.post("/profiles", createProfileController.handle);
router.get("/profiles", listProfileController.handle);
router.delete("/profiles/:id", deleteProfileController.handle);
router.put("/profiles", updateProfileController.handle);

//User
router.post("/login", authenticateUserController.handle);

//Authentication
router.post("/reset", authenticateUserController.resetPassword);

//User
router.post("/users", createUserController.handle);
router.get("/users", listUserController.handle);
router.delete("/users/:id", deleteUserController.handle);
router.put("/users", updateUserController.handle);


//Feed
router.post("/feed", createFeedController.handle);
router.get("/feed", listFeedController.handle);
router.delete("/feed/:id", deleteFeedController.handle);
router.put("/feed", updateFeedController.handle);

//Tasks
router.post("/task", createTaskController.handle);
router.get("/task", listTaskController.handle);
router.delete("/task/:id", deleteTaskController.handle);
router.put("/task", updateTaskController.handle);

//Achievements
router.post("/achievements", createAchievementsController.handle);
router.get("/achievements", listAchievementsController.handle);
router.delete("/achievements/:id", deleteAchievementsController.handle);
router.put("/achievements", updateAchievementsController.handle);

//Progress
router.post("/progress", createProgressController.handle);
router.get("/progress", listProgressController.handle);
router.delete("/progress/:id", deleteProgressController.handle);
router.put("/progress", updateProgressController.handle);



router.get("/users/:id", listUserController.handleOne);
router.get("/profiles/:id", listProfileController.handleOne);
router.get("/task/:id", listTaskController.handleOne);
router.get("/achievements/:id", listAchievementsController.handleOne);
router.get("/feed/:id", listFeedController.handleOne);
router.get("/progress/:id", listProgressController.handleOne);



router.use(EnsureAuthenticated);

export{router}

