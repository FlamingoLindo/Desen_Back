import { Request, Response } from "express";
import { UpdateProfileService } from "../../Service/Profile/UpdateProfileService";

class UpdateProfileController {
  async handle(request: Request, response: Response) {
    const { id, nome,} = request.body;
    const updateProfileService = new UpdateProfileService();
    const profile = await updateProfileService.execute({
      id,
      nome,
    });
    return response.json(profile);
  }
}

export { UpdateProfileController };