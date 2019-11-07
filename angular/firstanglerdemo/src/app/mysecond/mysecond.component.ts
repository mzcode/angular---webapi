import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-mysecond',
  templateUrl: './mysecond.component.html',
  styleUrls: ['./mysecond.component.css']
})
export class MysecondComponent implements OnInit {
myc="a";
aa="v"
bb="x"
z="zzz"; // FOR TEO WAY BY NGMODEL
clr="blue"
  x=55;
  y="web"
  mytitle ="sdfsdfs"
  display(){
    return " welcome"
  }
  myfun(){
    alert("tammam");
  }
  myfun2(){
    return    alert("key  down");

  }
  myfun3(){
    return     alert("key up");

  }
  myfun4(){
    return  alert("change");
  }
  myfun5(e){
    return  alert(e.target.value);
  }
  myreset(){
    this.aa=""
    this.bb=""
  }
  myfun6(x){
    alert(x.value);
  }
  myfun7(x,y){
    alert(x.value + " "  + y.value + " this.x " +this.x);
  }
  myfun8(e){
    
  }



  constructor() { }

  ngOnInit() {
  }

}
