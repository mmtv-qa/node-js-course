

interface Employee {
    name: string;
    age: number;
}


interface TechnicalEmployee extends Employee {
    skills: string[];
    level: 'junior' | 'middle' | 'senior';
}


interface ManagerEmployee extends Employee {
    employees: Employee[];
}


interface PM extends ManagerEmployee {
    projects: string[];
}

interface QA extends TechnicalEmployee {
    bugs: string[];
}

interface Developer extends TechnicalEmployee {
    programmingLanguages: string[];
}

interface AQA extends QA, Developer {}


interface BA extends ManagerEmployee {
    requirements: string[];
}