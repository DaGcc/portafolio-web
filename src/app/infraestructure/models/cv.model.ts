export interface CvModel {
    basics:       Basics;
    work:         Work[];
    volunteer:    Volunteer[];
    education:    Education[];
    awards:       Award[];
    certificates: Certificate[];
    publications: Publication[];
    skills:       Skill[];
    languages:    Language[];
    interests:    Interest[];
    references:   Reference[];
    projects:     Project[];
}

export interface Award {
    title:   null;
    date:    null;
    awarder: null;
    summary: null;
}

export interface Basics {
    name:     string;
    label:    string;
    image:    string;
    email:    string;
    phone:    string;
    url:      string;
    summary:  string;
    location: Location;
    profiles: Profile[];
}

export interface Location {
    address:     string;
    postalCode:  string;
    city:        string;
    countryCode: string;
    region:      string;
}

export interface Profile {
    network:  string;
    username: string;
    url:      string;
    image:    string;
}

export interface Certificate {
    name:   string;
    date:   Date;
    issuer: string;
    url:    null;
}

export interface Education {
    institution: string;
    url:         string;
    area:        string;
    studyType:   string;
    startDate:   Date;
    endDate:     Date;
    score:       string;
    courses:     string[];
}

export interface Interest {
    name:     string;
    keywords: string[];
}

export interface Language {
    language: string;
    fluency:  null | string;
    score:    number;
}

export interface Project {
    name:        string;
    startDate:   Date;
    endDate:     Date;
    description: string;
    highlights:  string[];
    url:         string;
}

export interface Publication {
    name:        string;
    publisher:   string;
    releaseDate: Date;
    url:         string;
    summary:     string;
}

export interface Reference {
    name:      string;
    reference: string;
}

export interface Skill {
    name:  string;
    utils: Util[];
}

export interface Util {
    name:     string;
    urlImage: string;
    level:    number;
}

export interface Volunteer {
    organization: null;
    position:     null;
    url:          null;
    startDate:    null;
    endDate:      null;
    summary:      null;
    highlights:   null[];
}

export interface Work {
    name:       string;
    position:   string;
    url:        null;
    startDate:  Date;
    endDate:    Date;
    summary:    string;
    highlights: string[];
}
