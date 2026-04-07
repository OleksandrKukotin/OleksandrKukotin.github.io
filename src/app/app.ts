import { Component } from '@angular/core';

interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  subjects: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  education: EducationEntry[] = [
    {
      degree: 'B.Eng. in Automation and Computer-Integrated Technologies',
      institution: 'The Bohdan Khmelnytsky National University of Cherkasy',
      period: '2017 – 2021',
      subjects: ['Algorithmization & Programming', 'Embedded Systems Development', 'Higher Math'],
    },
    {
      degree: 'MSc in Physics and Astronomy',
      institution: 'The Bohdan Khmelnytsky National University of Cherkasy',
      period: '2021 – 2022',
      subjects: ['Pedagogy', 'Physical Modeling', 'Theoretical Physics'],
    },
    {
      degree: 'Junior Java Developer',
      institution: 'GeekHub Java for Web course, 13th season',
      period: '2023.08 – 2024.03',
      subjects: ['Java Core', 'Build Tools', 'Spring Boot'],
    },
  ];
}
