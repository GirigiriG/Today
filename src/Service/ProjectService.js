

class ProjectService {
    static numberOfTask = 0;
    createProject(record) {
        this.name = record.name;
        this.description = record.description
    }
}

export default ProjectService;