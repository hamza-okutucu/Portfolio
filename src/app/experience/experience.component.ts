import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  companies: { name: string; link: string; job: string; date: string; missions: string[] }[] = [
    {
      name: 'SFR',
      link: 'https://en.wikipedia.org/wiki/SFR',
      job: 'Software Engineer',
      date: 'Apr 2023 - Present',
      missions: ['Developed a new "Brique Annonce" application in Java to replace an outdated version in PHP.',
      'Conducted in-depth analysis of the existing system and proposed a comprehensive hardware and software solution.',
      'Integrated the new application into the company\'s directory for software updates and improved IT security compliance.',
      'Created a Spring Boot API for the back-end, allowing the front-end to query information from the database.',
      'Designed the user interface (IHM) in Angular, offering similar functionalities to the previous IHM while introducing new features for an enhanced user experience.',
      'Utilized a complete technical environment, including UNIX, Eclipse, Java, Oracle, GIT, Docker, Kubernetes, and Virtual Machine.',
      'Collaborated within the Direction SI OSS to successfully carry out the Java refactoring project.',
      'Presented the chosen solution to stakeholders for validation and approval.']
    }
  ];

  selectedCompany: { name: string; link: string; job: string; date: string; missions: string[] } = this.companies[0];

  selectCompany(company: any) {
    this.selectedCompany = company;
  }
}
