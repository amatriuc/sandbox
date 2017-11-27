import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Film} from "./films";
import {FilmsService} from "./films.service";

@Component({
  selector: 'films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films: Film[] = [];
  film: Film;
  displayDialog: boolean = false;
  rerender = false;
  domNode: any;
  jsonElement:any;

  constructor(private filmsService: FilmsService,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadDomNode();
  }

  loadDomNode() {
    this.filmsService.getDomNode().subscribe(domNode => {
      this.domNode = domNode;
      console.log(this.domNode);
      this.createHtml(this.domNode);
    });
  }

  generateCmp(domNode) {
    let str = '';
    for(let prop in domNode) {
      if (prop == 'tag') {

        str += '<' + domNode[prop]
      }
      if (prop == 'attributes') {
        let obj = domNode[prop];
        for (let attr in obj) {
          str += ' ' + attr + '="' + obj[attr] + '"'
        }
        str+='>'
      }
      if(prop ==  'text') {
        str+= domNode[prop]
      }
      if(prop == 'content') {
        let arr = domNode[prop];
        for(let cnt of arr) {
          str+=this.generateCmp(cnt);
          console.log(cnt);
        }
      }

    }
    return str;
  }

  createHtml(domNode) {
    let str = '';
    for(let prop in domNode) {
      if(prop == 'tag') {

        str+= '<'+domNode[prop]
      }
      if(prop == 'attributes') {
        let obj = domNode[prop];
        for(let attr in obj) {
          str+= ' '+ attr + '="' + obj[attr]+'"'
        }
        str+='>'
      }
      if(prop == 'content') {
        let arr = domNode[prop];
        for(let cnt of arr) {
          str+=this.generateCmp(cnt);
          console.log(cnt);
        }
      }

    }
    console.log(str);

    this.jsonElement = str;
  }

}
