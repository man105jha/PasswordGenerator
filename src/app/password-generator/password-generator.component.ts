import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {
  password:string=""
  isLetter=false;
  isNumber=false;
  isSpecial=false;
  length:number=0;
  

  onChangeLength(event:Event){
    const target = event.target as HTMLInputElement;
   const parsedLength=parseInt(target.value);
   if(!(isNaN(parsedLength))){
    this.length=parsedLength
   }

  }

  onChangeLetter(){
    this.isLetter=!this.isLetter;
  }

  onChangeNumber(){
    this.isNumber=!this.isNumber

  }

  onChangeSpecial(){
    this.isSpecial=!this.isSpecial

  }


  onSubmit(){
  const  numbers="1234567890";
  const letter='abcdefghijklmnopqrstuvwxyz'
  const special='!@#$%^&*()_+'

  let validCharacters=''
    if(this.isLetter){
      validCharacters+=letter;

    }
    if(this.isNumber){
      validCharacters+=numbers;

    }
    if(this.isSpecial){
      validCharacters+=special;

    }
  let  generatedPassword=''



    for(let i=0;i<=this.length;i++){
      const index=Math.floor(Math.random()*validCharacters.length);
      generatedPassword+=validCharacters[index];

    }

    this.password=generatedPassword;
   
  }

}
