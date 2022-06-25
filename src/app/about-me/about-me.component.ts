import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

interface FolderNode {
  file: string;
  children?: FolderNode[];
}

enum EnumFile{
  Bio = "bio",
  French = "French",
  English = "English",
  Asian_Culture = "Asian-Culture",
  New_Technologies = "New-Technologies",
  Universities = "Universities",
  High_school = "High-school"
}

const TREE_DATA: FolderNode[] = [
  {
    file: 'Education',
    children: [{ file: 'High-school' }, { file: 'Universities' }],
  },
  {
    file: 'Interests',
    children: [{ file: 'Asian-Culture' }, { file: 'New-Technologies' }],
  },
  {
    file: 'Langs',
    children: [{ file: 'French' }, { file: 'English' }],
  },
  {
    file: 'bio',
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  actualFile:EnumFile = EnumFile.Bio
  fileEnum = EnumFile

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
  }

  changeActualFile(newFile:EnumFile){
    this.actualFile = newFile
  }


  private _transformer = (node: FolderNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.file,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  getLine(num:number){
    let tmp = []
    for (let i = 1; i <= num; i++) {
      tmp.push(i)
    }
    return tmp.join("\n")
  }


}
