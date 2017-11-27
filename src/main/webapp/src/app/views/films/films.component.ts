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
      this.createHtml(this.domNode);
    });
  }

  genCmp(domNode) {
    let cmpStr = '';
    if(domNode.tag) {
      cmpStr += '<' + domNode.tag;
      if(domNode.attributes) {
        let obj = domNode.attributes;
        for (let attr in obj) {
          cmpStr += ' ' + attr + '="' + obj[attr] + '"';
        }
        let closeTag = domNode.tag != 'input' ? '>' : '/>';
        cmpStr+=closeTag;
      } else {
        let closeTag = domNode.tag != 'input' ? '>' : '/>';
        cmpStr+=closeTag;
      }
      if(domNode.content) {
        for(let dm of domNode.content) {
          let closeTag = !dm.content ? '</' + domNode.tag + '>' : '';
          cmpStr+= this.genCmp(dm)+closeTag;
        }
      }
    } else if(domNode.text) {
      cmpStr+= domNode.text;
    }

    return cmpStr;
  }

  createHtml(domNode) {
    this.jsonElement = this.genCmp(domNode);
    console.log(this.jsonElement);
  }

}
