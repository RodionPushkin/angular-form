import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angularlearn';
  ngOnInit() {
    this.formFormat()
  }
  toggleSlide(slideNum: number){
    const slides = document.querySelectorAll('.slide')
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.toggle('active', false)
      if(i == slideNum){
        slides[i].classList.toggle('active', true)
      }
    }
  }
  formFormat(){
    let inputAmount = document.getElementById('amount') as HTMLInputElement;
    let inputDuration = document.getElementById('duration') as HTMLInputElement;
    let inputPhone = document.getElementById('phone') as HTMLInputElement;
    if(inputAmount != null){
      inputAmount.addEventListener('input', (event)=>{
        let clearText = inputAmount.value.replace(/\D/g, "")
        let formatedText = ""
        if(clearText == null || clearText == ""){
          formatedText = ""
        }else{
          if(clearText.length == 3){
            formatedText = clearText.substring(0,3);
          }else if(clearText.length == 4){
            formatedText = clearText.substring(0,1)+" "+clearText.substring(1,4);
          }else if(clearText.length == 5){
            formatedText = clearText.substring(0,2)+" "+clearText.substring(2,5);
          }else if(clearText.length == 6){
            formatedText = clearText.substring(0,3)+" "+clearText.substring(3,6);
          }else if(clearText.length == 7){
            formatedText = clearText.substring(0,1)+" "+clearText.substring(1,4)+" "+clearText.substring(4,7);
          }else if(clearText.length == 8){
            formatedText = clearText.substring(0,2)+" "+clearText.substring(2,5)+" "+clearText.substring(5,8);
          }else if(clearText.length >= 9){
            formatedText = clearText.substring(0,3)+" "+clearText.substring(3,6)+" "+clearText.substring(6,9);
          }else{
            formatedText = clearText
          }
        }
        inputAmount.value = formatedText
      })
    }
    if(inputAmount != null) {
      inputAmount.onblur = () => {
        if (inputAmount.value.length != 0) {
          let clearText = inputAmount.value.replace(/\D/g, "")
          let formatedText = ""
          if (clearText == null || clearText == "") {
            formatedText = ""
          } else {
            if (clearText.length == 3) {
              formatedText = clearText.substring(0, 3);
            } else if (clearText.length == 4) {
              formatedText = clearText.substring(0, 1) + " " + clearText.substring(1, 4);
            } else if (clearText.length == 5) {
              formatedText = clearText.substring(0, 2) + " " + clearText.substring(2, 5);
            } else if (clearText.length == 6) {
              formatedText = clearText.substring(0, 3) + " " + clearText.substring(3, 6);
            } else if (clearText.length == 7) {
              formatedText = clearText.substring(0, 1) + " " + clearText.substring(1, 4) + " " + clearText.substring(4, 7);
            } else if (clearText.length == 8) {
              formatedText = clearText.substring(0, 2) + " " + clearText.substring(2, 5) + " " + clearText.substring(5, 8);
            } else if (clearText.length >= 9) {
              formatedText = clearText.substring(0, 3) + " " + clearText.substring(3, 6) + " " + clearText.substring(6, 9);
            } else {
              formatedText = clearText
            }
          }
          inputAmount.value = formatedText + ' р'
        }
      }
    }
    if(inputDuration != null) {
      inputDuration.addEventListener('input', (event) => {
        let clearText = inputDuration.value.replace(/\D/g, "")
        let formatedText = ""
        if (clearText == null || clearText == "") {
          formatedText = ""
        } else {
          if (clearText.length >= 3) {
            formatedText = clearText.substring(0, 3)
          } else {
            formatedText = clearText
          }
        }
        inputDuration.value = formatedText
      })
    }
    if(inputDuration != null) {
      inputDuration.onblur = () => {
        if(inputDuration.value != null){
          if (inputDuration.value.length != 0) {
            inputDuration.value = inputDuration.value.replace(/\D/g, "") + ' месяца'
          }
        }
      }
    }
    if(inputPhone != null) {
      inputPhone.addEventListener('input', (event) => {
        let inputNumbersValue = inputPhone.value.replace(/\D/g, "")
        let formattedValue = ""
        if (inputNumbersValue == null || inputNumbersValue == "") {
          formattedValue = ""
        } else {
          if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") {
              formattedValue = "7" + inputNumbersValue
            }
            let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7"
            formattedValue = firstSymbols + " "
            if (inputNumbersValue.length > 1) {
              formattedValue += "(" + inputNumbersValue.substring(1, 4)
            }
            if (inputNumbersValue.length >= 5) {
              formattedValue += ") " + inputNumbersValue.substring(4, 7)
            }
            if (inputNumbersValue.length >= 8) {
              formattedValue += "-" + inputNumbersValue.substring(7, 9)
            }
            if (inputNumbersValue.length >= 10) {
              formattedValue += "-" + inputNumbersValue.substring(9, 11)
            }
          } else {
            formattedValue = "+" + inputNumbersValue.substring(0, 16)
          }
        }

        inputPhone.value = formattedValue
      })
    }
  }
  sendData(){
    let inputAmount = document.getElementById('amount') as HTMLInputElement;
    let inputDuration = document.getElementById('duration') as HTMLInputElement;
    let inputPhone = document.getElementById('phone') as HTMLInputElement;

    if(inputAmount.value.length != 0 || inputDuration.value.length != 0 || inputPhone.value.length != 0){
      console.log("sending data...");
      inputAmount.value = ""
      inputDuration.value = ""
      inputPhone.value = ""
      this.toggleSlide(2)
      setTimeout(()=>{
        setTimeout(()=>this.toggleSlide(0),800)
      },800)
    }
  }
}
