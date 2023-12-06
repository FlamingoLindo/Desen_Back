import { Request, Response } from "express";
import { ListProfileService } from "../../Service/Profile/ListProfileService";

class ListProfilesController {
  async handle(request: Request, response: Response) {
    const listProfileService = new ListProfileService();

    const profiles = await listProfileService.execute();

    return response.json(profiles);
  }
  async handleOne(request: Request, response: Response) {
    
    const listProfileService = new ListProfileService();
    const id= request.params.id;
    console.log(id);
    const profile = await listProfileService.load(id);

    return response.json(profile);

  }
}

export { ListProfilesController };