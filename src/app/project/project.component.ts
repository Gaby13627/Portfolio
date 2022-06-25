import { ApiService } from './api.service';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

export interface DialogData {
  title: string,
  description: string,
  url:string,
  languages : [],
  image: string
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  tags = ["Html","CSS","JS","C#","Arduino","Python","MongoDB"]

  constructor(private api: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProject()
  }

  projectArray:any = []
  arrays:any = []
  getProject(){
    this.projectArray = this.api.projectService()
    this.arrays = this.api.projectService()

  }

  tempArray:any = []
  newArray:any = []

  onChange(event:any, value:any){
    console.log(event);

    if (event.checked) {
      this.tempArray = this.arrays.filter( (project:any) => project.tags.includes(value) )
      this.projectArray.push(...this.tempArray)
      console.log(this.projectArray);

    }else{
      this.tempArray = this.projectArray.filter( (project:any) => !project.tags.includes(value) )
      this.projectArray = []
      this.projectArray.push(...this.tempArray)

    }
  }

  openDialog(project:any) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        title: project.project_name,
        description: project.description,
        url: project.link,
        languages : project.tags,
        image : project.img
      },
    });
  }

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.html',
  styleUrls: ['./dialog-data-example-dialog.scss']
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, common:CommonModule) {}
}
