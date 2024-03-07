import ResourcesAPI from "@api/resources";
import ResourcesService from "@services/ResourcesService";

class ViteDIContainer {
	static getResourcesUseCase() {
		return new ResourcesService(new ResourcesAPI());
	}

}

export { ViteDIContainer };
