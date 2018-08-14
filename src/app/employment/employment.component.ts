import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JOBS } from '../job-list';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {
 /* job: Job = {
      name: 'WalkMe',
      dates: 'August 2017 - Present',
      position: 'QA Engineer',
      description: 'The QA Engineer that wants to be dev'
  }; */
  jobs = JOBS;

  selectedJob: Job;

  constructor() { }

  ngOnInit() {
  }

  onSelect(job: Job): void {
    this.selectedJob = job;
  }

}
